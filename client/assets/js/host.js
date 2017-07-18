/*
 * The view for the host screen.
 */
var util = require('./util');
var { html } = util;

function render(state) {
	var categories = state.categories;
	var answers = state.answers;
	var players = state.players;
	var activeRound = state.activeRound;
	var activeCategories = categories.filter(function (cat) { return cat.round === activeRound; });
	var activeAnswer = state.activeAnswer;
	var dailyDoubleAnswerIds = state.dailyDoubleAnswerIds;
	var isFinalStarted = state.isFinalStarted;
	var isFinalEnded = state.isFinalEnded;
	var isFinalScored = state.isFinalScored;

	return html`
		<div class="hList">
			<!-- iterate over all categories and present buttons to activate the questions -->
			<ul>
				${!isFinalEnded && html`
					${activeCategories.map(function (category) {
						return html`
							<li>
								$${category.label}<br/>
								${category.answerIds.map(function (id, i) {
									if (activeRound < 2) {
										return html`
											<button name="answer" value="${id}"
												${answers[id].correct != null && 'disabled'}>
												$${answers[id].score || '0'}
												$${dailyDoubleAnswerIds.includes(id) && html`*`}
											</button>

											<!-- Show input and button for Daily Double Bet -->
											${id === activeAnswer && dailyDoubleAnswerIds.includes(id) && !state.isBetLockedIn &&
												html`
													<input name="changeDoubleBet" data-answerid="${id}" type="number" value="${answers[id].score}" min="0" step="100">
													<button name="lockInDoubleBet">Lock In Bet</button>
												`
											}
										`;
									} else {
										return html `
											<button name="answer" value="${id}" ${activeAnswer !== null && 'disabled'}>
												Show Final Answer
											</button>
											<button name="startFinal" ${(activeAnswer === null || isFinalStarted) && 'disabled'}>
												Start Final Webpardy
											</button>
											<button name="endFinal" ${(isFinalEnded || !isFinalStarted) && 'disabled'}>
												End Final Webpardy
											</button><br/>
										`
									}
								})}
							</li>
						`;
					})}
				`}
			</ul>

			<!-- Display Players and scores.-->
			<ul>
				${Object.keys(players).map(function (id) {
					return html`
						<li>
							$${players[id].name}: $${players[id].score || '0'}
							${id === state.activePlayer && html`&bull;`}<br/>
							<button name="kick" value="${id}">Kick</button>


							<!-- If final round, display bet status. Begin final round when all user's bets are locked in. -->
							${activeRound === 2 && players[id].score <= 0 && html`
								Does not qualify for Final.
							`}
							${activeRound === 2 &&
								players[id].score > 0 &&
								!isFinalStarted &&
								html`
								${!players[id].isFinalBetLockedIn && html`Final Bet is not locked in`}
								${players[id].isFinalBetLockedIn && html`Final Bet is locked in`}
							`}
							<!--Needs improvement!-->
							${activeRound === 2 && isFinalEnded && html`
								Final Answer:${players[id].finalAnswer}<br />
								${!players[id].finalQuestionScored && html`
									Final Bet:${players[id].finalBet}<br />
									<button name="addWager" value="${id}">Right</button> |
									<button name="subtractWager" value="${id}">Wrong</button><br />
								`}

							`}
					</li>
					`;
				})}
				<li>
					${activeRound === 2 && isFinalEnded && !isFinalScored && html`
						<button name="showFinalScores" value="0">Complete Scoring</button>
					`}
				</li>
			</ul>

			<!-- Host Controls -->
			<div>
				<button name="restart">Restart</button>
				<button name="decreaseRound" ${activeRound === 0 && 'disabled'}>
					Previous Round
				</button>
				<button name="increaseRound" ${activeRound === 2 && 'disabled'}>
					Next Round
				</button>

				${state.activeAnswer != null && html`
					${activeRound !== 2 && html`
						<div>
							<button name="question">Reveal Question</button>

							${state.activePlayer && html`
								<button name="correct" value="1">Right</button>
								<button name="correct" value="0">Wrong</button>
								<button name="deselectPlayer">Deselect Player</button>
							`}

							${!state.activePlayer && html`
								<button name="correct" value="0">Skip</button>
							`}
						</div>
					`}

					<div>
						${state.answers[state.activeAnswer].answerImage != null && html`
							<div><img width="200" src="$${state.answers[state.activeAnswer].answerImage}"></div>
						`}

						${state.answers[state.activeAnswer].answer != null && html`
							<div>$${state.answers[state.activeAnswer].answer}</div>
						`}

						<div>$${state.answers[state.activeAnswer].question}</div>
					</div>
				`}
			</div>
		</div>


	`;
}

function connectHost(socket) {
	var el = document.querySelector('.js-pardy');
	var host = util.getUser('host');

	var actions = {
		answer: function (ev) {
			socket.emit('action', {
				type: 'selectAnswer',
				id: Number(ev.target.value),
			});
		},
		question: function () {
			socket.emit('action', {
				type: 'revealQuestion',
			});
		},
		correct: function (ev) {
			socket.emit('action', {
				type: 'resolveAnswer',
				correct: Boolean(Number(ev.target.value)),
			});
		},
		kick: function (ev) {
			socket.emit('action', {
				type: 'removePlayer',
				id: ev.target.value,
			});
		},
		restart: function () {
			if (confirm('Are you sure you want to restart?')) {
				socket.emit('action', {
					type: 'restart',
				});
			}
		},
		increaseRound: function () {
			socket.emit('action', {
				type: 'increaseRound',
			});
		},
		decreaseRound: function () {
			socket.emit('action', {
				type: 'decreaseRound',
			});
		},
		changeDoubleBet: function (ev) {
			socket.emit('action', {
				type: 'changeDoubleBet',
				score: ev.target.value,
			});
		},
		lockInDoubleBet: function (ev) {
			socket.emit('action', {
				type: 'lockInDoubleBet',
			});
		},
		startFinal: function () {
			socket.emit('action', {
				type: 'startFinal',
			});
		},
		endFinal: function () {
			socket.emit('action', {
				type: 'endFinal',
			});
		},
		addWager: function (ev) {
			socket.emit('action', {
				type: 'addWager',
				id: ev.target.value,
			});
		},
		subtractWager: function (ev) {
			socket.emit('action', {
				type: 'subtractWager',
				id: ev.target.value,
			});
		},
		showFinalScores: function () {
			socket.emit('action', {
				type: 'showFinalScores',
			});
		},
		deselectPlayer: function () {
			socket.emit('action', {
				type: 'deselectPlayer',
			});
		},
	};

	el.addEventListener('change', function (ev) {
		var action = ev.target.name;
		actions[action](ev);
	});

	el.addEventListener('click', function (ev) {
		var action = ev.target.name;

		if (action in actions) {
			actions[action](ev);

			ev.preventDefault();
			ev.stopImmediatePropagation();
		}
	});

	socket.on('update', function (state) {
		util.render(el, render(state));
	});

	socket.emit('action', {
		type: 'addHost',
		id: host.id,
		name: host.name,
	});
}

module.exports = connectHost;
