'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	var categories = state.categories;
	var answers = state.answers;
	var players = state.players;

	return html`
		<div class="vr">
			${state.activeAnswer == null && html`
				<table class="tbl">
					<thead>
						<tr>
							${categories.map(function (category) {
								return html`<th>${category.label}</th>`;
							})}
						</tr>
					</thead>
					<tbody>
						${categories[0].answerIds.map(function (a, i) {
							return html`
								<tr>
									${categories.map(function (category) {
										return html`
											<td class="tbl-cell_fat">
												${answers[category.answerIds[i]].correct == null
													&& answers[category.answerIds[i]].score}
											</td>
										`;
									})}
								</tr>
							`;
						})}
					</tbody>
				</table>

				<table class="tbl">
					<thead>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`<th>${players[id].name}</th>`;
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`<td class="tbl-cell_fat">${players[id].score}</td>`;
							})}
						</tr>
					</tbody>
				</table>
			`}

			${state.activeAnswer != null && html`
				<div class="answer">
					${state.answers[state.activeAnswer].answer}
				</div>

				${state.revealQuestion && html`
					<div class="question">
						${state.answers[state.activeAnswer].question}
					</div>
				`}

				${state.activePlayer != null && html`
					<div class="player">
						${state.players[state.activePlayer].name}
					</div>
				`}
			`}
		</div>
	`;
}

function connectViewer(socket) {
	var el = document.querySelector('.js-pardy');
	var viewer = util.getUser('viewer');

	socket.on('update', function (state) {
		util.render(el, render(state));
	});

	socket.emit('action', {
		type: 'addViewer',
		id: viewer.id,
		name: viewer.name,
	});
}

module.exports = connectViewer;
