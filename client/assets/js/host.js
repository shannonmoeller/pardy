'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	var categories = state.categories;
	var answers = state.answers;
	var players = state.players;

	return html`
		<div class="vr">
			<ul>
				${categories.map(function (category) {
					return html`
						<li>
							${category.label}<br/>
							${category.answerIds.map(function (id, i) {
								if (answers[id].correct == null) {
									return html`
										<button name="answer" value="${id}">
											${answers[id].score}
										</button>
									`;
								}
							})}
						</li>
					`;
				})}
			</ul>

			<ul>
				${Object.keys(players).map(function (id) {
					return html`
						<li>
							${players[id].name}
							(${players[id].score})
						</li>
					`;
				})}
			</ul>

			${state.activeAnswer != null && state.activePlayer && html`
				<button name="correct" value="1">Right</button>
				<button name="correct" value="0">Wrong</button>
				<button name="question">Reveal Question</button>
			`}
		</div>
	`;
}

function connectHost(socket) {
	var el = document.querySelector('.js-pardy');
	var host = util.getUser('host');

	el.addEventListener('click', function (ev) {
		if (ev.target.name === 'answer') {
			socket.emit('action', {
				type: 'selectAnswer',
				id: Number(ev.target.value),
			});

			ev.preventDefault();
			ev.stopImmediatePropagation();

			return;
		}

		if (ev.target.name === 'question') {
			socket.emit('action', {
				type: 'revealQuestion',
			});

			ev.preventDefault();
			ev.stopImmediatePropagation();

			return;
		}

		if (ev.target.name === 'correct') {
			socket.emit('action', {
				type: 'resolveAnswer',
				correct: Boolean(Number(ev.target.value)),
			});

			ev.preventDefault();
			ev.stopImmediatePropagation();

			return;
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
