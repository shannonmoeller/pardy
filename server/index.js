const deduce = require('deduce');
const initialState = require('./games/2016-05-26');

const game = deduce.composeStore({
	default(state = initialState) {
		return Object.assign({}, state);
	},

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

	addPlayer(state, data) {
		const player = {
			id: data.id,
			name: data.name,
			score: 0,
		};

		const players = Object.assign({}, state.players, {
			[data.id]: player,
		});

		return Object.assign({}, state, {
			players,
		});
	},

	removePlayer(state, data) {
		const players = Object.assign({}, state.players);

		delete players[data.id];

		return Object.assign({}, state, {
			players,
		});
	},

	addViewer(state, data) {
		return state;
	},

	selectAnswer(state, data) {
		return Object.assign({}, state, {
			activeAnswer: data.id,
			activePlayer: null,
		});
	},

	selectPlayer(state, data) {
		if (state.activeAnswer == null || state.activePlayer != null) {
			return state;
		}

		return Object.assign({}, state, {
			activePlayer: data.id,
		});
	},

	revealQuestion(state) {
		return Object.assign({}, state, {
			revealQuestion: !state.revealQuestion,
		});
	},

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
		const localPlayer = Object.assign({}, player, {
			score: player.score + (answer.score * (correct ? 1 : -1)),
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
