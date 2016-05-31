'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	var categories = state.categories;
	var answers = state.answers;
	var players = state.players;

	return html`
		<div class="vr">
			<div>
				<button name="restart">Restart</button>
			</div>

			<div class="vList">
				<ul>
					${categories.map(function (category) {
						return html`
							<li>
								$${category.label}<br/>
								${category.answerIds.map(function (id, i) {
									return html`
										<button name="answer" value="${id}"
											${answers[id].correct != null && 'disabled'}>
											$${answers[id].score || '0'}
										</button>
									`;
								})}
							</li>
						`;
					})}
				</ul>

				<ul>
					${Object.keys(players).map(function (id) {
						return html`
							<li>
								$${players[id].name}
								($${players[id].score || '0'})
								${id === state.activePlayer && html`&bull;`}<br/>
								<button name="kick" value="${id}">Kick</button>
							</li>
						`;
					})}
				</ul>
			</div>

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
	};

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
