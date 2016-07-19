/*
 * The view for the host screen.
 */
const util = require('./util');
const { html } = util;

function render(state) {

	const categories = state.categories;
	const answers = state.answers;
	const players = state.players;
	const activeRound = state.activeRound;
	const activeCategories = categories.filter(cat => cat.round === activeRound);
	const activeAnswer = state.activeAnswer;
	let isFinalStarted = state.isFinalStarted;
	const isFinalEnded = state.isFinalEnded;
	return html`
		<div class="vr">
			<div>
				<button name="restart">Restart</button>
				<button name="increaseRound" ${activeRound === 2 && 'disabled'}>
					Increase Round
				</button>
				<button name="decreaseRound" ${activeRound === 0 && 'disabled'}>
					Decrease Round
				</button>
			</div>
			
			<!-- iterate over all categories and present buttons to activate the questions -->
			<div class="vList">
				<ul>
					${!isFinalEnded && html`
						${activeCategories.map(function (category) {
							return html`
								<li>
									$${category.label}<br/>
									${category.answerIds.map(function (id, i) {
										if(activeRound < 2) {
											return html`
												<button name="answer" value="${id}"
													${answers[id].correct != null && 'disabled'}>
													$${answers[id].score || '0'}
													$${answers[id].isDouble && html`*`}
												</button>
												<!-- Show input and button for Daily Double Bet -->
												${id === activeAnswer && answers[id].isDouble && !answers[id].isBetLockedIn &&
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
												<audio ${(activeAnswer !== null || !isFinalStarted) && 'controls'}>
													<source src="assets/media/audio/song.mp3" type="audio/mp3">
												</audio>	
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
								$${players[id].name}
								($${players[id].score || '0'})
								${id === state.activePlayer && html`&bull;`}<br/>
								<button name="kick" value="${id}">Kick</button>
								
								
								<!-- If final round, display bet status. Begin final round when all user's bets are 
								locked in. -->
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
									Final Answer:${players[id].finalAnswer}<br>
									Final Bet:${players[id].finalBet}<br>
									Incorrect: ${Number(players[id].score) - Number(players[id].finalBet)}<br>
									Correct: ${Number(players[id].score) + Number(players[id].finalBet)}
								`}
						</li>
						`;
					})}
				</ul>
			</div>
			${activeRound !== 2 && html`
				${state.activeAnswer != null && html`
					<div>
						<button name="question">Reveal Question</button>
	
						${state.activePlayer && html`
							<button name="correct" value="1">Right</button>
							<button name="correct" value="0">Wrong</button>
						`}
	
						${!state.activePlayer && html`
							<button name="correct" value="0">Skip</button>
						`}
					</div>
				`}
			`}
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
