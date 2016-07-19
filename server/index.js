const deduce = require('deduce');
const initialState = require('./games/2016-07-19');

const game = deduce.composeStore({

	// Configure initial store
	default(state = initialState) {
		return Object.assign({}, state);
	},

	// Add a new host
	addHost(state, data) {
		const hostExists = Boolean(state.host);

		if (hostExists) {
			return state;
		}

		return Object.assign({}, state, {
			host: {
				id: data.id,
				name: data.name,
			},
		});
	},

	// Add a new player
	addPlayer(state, data) {
		const player = state.players[data.id] || {
			id: data.id,
			name: data.name,
			score: 200,
			finalBet: 0,
			isFinalBetLockedIn: false,
			finalQuestion: ''
		};
		const players = Object.assign({}, state.players, {
			[data.id]: player,
		});

		return Object.assign({}, state, {
			players,
		});
	},

	// Remove a player (kick)
	removePlayer(state, data) {
		const players = Object.assign({}, state.players);

		delete players[data.id];

		return Object.assign({}, state, {
			players,
		});
	},

	// Add Viewer
	addViewer(state, data) {
		return state;
	},

	// select and answer.  Done as host.
	selectAnswer(state, data) {
		return Object.assign({}, state, {
			activeAnswer: data.id,
			activePlayer: null,
			isFinal: state.activeRound === 2
		});
	},

	// select active player
	selectPlayer(state, data) {
		if (state.activeAnswer == null || state.activePlayer != null) {
			return state;
		}

		return Object.assign({}, state, {
			activePlayer: data.id,
		});
	},

	// Change Daily Double bet
	changeDoubleBet(state, data) {
		const { activeAnswer } = state;
		const score = data.score;
		if (activeAnswer == null) {
			return state;
		}

		const answer = state.answers[activeAnswer];
		const localAnswer = Object.assign({}, answer, {
			score
		});

		const answers = Object.assign({}, state.answers, {
			[activeAnswer]: localAnswer
		});

		return Object.assign({}, state, {
			answers,
		});
	},

	// Lock in daily double bet
	lockInDoubleBet(state, data) {
		const { activeAnswer } = state;
		const isBetLockedIn = true;
		if (activeAnswer == null) {
			return state;
		}

		const answer = state.answers[activeAnswer];
		const localAnswer = Object.assign({}, answer, {
			isBetLockedIn
		});

		const answers = Object.assign({}, state.answers, {
			[activeAnswer]: localAnswer
		});

		return Object.assign({}, state, {
			answers,
		});
	},

	// Lock in Final Pardy bet
	lockInFinalBet(state, data) {
		const player = state.players[data.id];
		const localPlayer = Object.assign({}, player, {
			isFinalBetLockedIn: true,
			finalBet: data.finalBet
		});
		const players =  Object.assign({}, state.players, {
			[data.id]: localPlayer,
		});
		return Object.assign({}, state, {
			players,
		});
	},


	// Lock in Final Pardy Answer
	lockInFinalAnswer(state, data) {
		const player = state.players[data.id];
		const localPlayer = Object.assign({}, player, {
			isFinalAnswerLockedIn: true,
			finalAnswer: data.finalAnswer
		});
		const players =  Object.assign({}, state.players, {
			[data.id]: localPlayer,
		});
		return Object.assign({}, state, {
			players,
		});
	},

	// Reveal the question to the answer
	revealQuestion(state) {
		return Object.assign({}, state, {
			revealQuestion: !state.revealQuestion,
		});
	},

	// Resolve the answer, giving points as necesarry
	resolveAnswer(state, data) {
		const { correct } = data;
		const { activeAnswer, activePlayer } = state;

		if (activeAnswer == null) {
			return state;
		}

		const answer = state.answers[activeAnswer];
		const localAnswer = Object.assign({}, answer, {
			correct,
		});

		const answers = Object.assign({}, state.answers, {
			[activeAnswer]: localAnswer,
		});

		if (activePlayer == null) {
			return Object.assign({}, state, {
				revealQuestion: false,
				activeAnswer: null,
				activePlayer: null,
				answers,
			});
		}

		const player = state.players[activePlayer];
		const score = player.score || 0;
		const localPlayer = Object.assign({}, player, {
			score: score + (answer.score * (correct ? 1 : -1)),
		});
		const players = Object.assign({}, state.players, {
			[activePlayer]: localPlayer,
		});

		return Object.assign({}, state, {
			revealQuestion: false,
			activeAnswer: correct ? null : activeAnswer,
			activePlayer: null,
			answers,
			players,
		});
	},

	decreaseRound(state) {
		return Object.assign({}, state, {
			activeRound: state.activeRound - 1,
			isFinal: false
		});
	},

	increaseRound(state) {
		return Object.assign({}, state, {
			activeRound: state.activeRound + 1,
			isFinal: state.activeRound + 1 === 2
		});
	},

	restart() {
		return Object.assign({}, initialState);
	},

	startFinal(state) {
		console.log('startFinal');
		return Object.assign({}, state, {
			isFinalStarted: true,
		});
	},

	endFinal(state) {
		return Object.assign({}, state, {
			isFinalEnded: true,
		});
	},
});

function connectUser(socket) {
	const removeListener = game.addListener(() => {
		socket.emit('update', game.getState());
	});

	socket.on('action', data => {
		const { type } = data;

		if (type && type in game) {
			game[type](data);
		}
	});

	socket.on('disconnect', () => {
		removeListener();
	});
}

module.exports = connectUser;
