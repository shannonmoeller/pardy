'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	var categories = state.categories;
	var activeRound = state.activeRound;
	var activeCategories = categories.filter(function (cat) { return cat.round === activeRound; });
	var activeAnswer = state.activeAnswer;
	var answers = state.answers;
	var players = state.players;

	var isFinalStarted = state.isFinalStarted;
	var isFinalEnded = state.isFinalEnded;
	var isFinalScored = state.isFinalScored;
	if (activeRound < 2) {
		return html`
		${console.log(state)}
			<div class="view">
				${activeAnswer == null && html`
					<table class="tbl">
						<thead>
							<tr>
							${activeCategories.map(function (category) {
								return html`<th>$${category.label}</th>`;
							})}
							</tr>
						</thead>
						<tbody>
							${categories[0].answerIds.map(function (a, i) {
								return html`
									<tr>
										${activeCategories.map(function (category) {
											return html`<td class="tbl-cell_fat">
												<span class="${answers[category.answerIds[i]].correct != null && 'hidden'}">
													$${answers[category.answerIds[i]].score || '0'}
												</span>
											</td>`;
										})}
									</tr>
								`;
							})}
						</tbody>
					</table>
				`}

				${activeAnswer != null
					&& (
						!state.dailyDoubleAnswerIds.includes(activeAnswer)
						|| (
							state.dailyDoubleAnswerIds.includes(activeAnswer)
							&& state.isBetLockedIn
						)
					)
					&& html`

					<div class="answer">
						${state.answers[state.activeAnswer].answerImage != null && html`
							<div><img class="answer-image" src="$${state.answers[state.activeAnswer].answerImage}"></div>
						`}

						${state.answers[state.activeAnswer].answer != null && html`
							<div>$${state.answers[state.activeAnswer].answer}</div>
						`}

						${state.revealQuestion && html`
							<div>$${state.answers[state.activeAnswer].question}</div>
							<!-- if there is no active player, time ran out.  Play the error noise -->
							${state.activePlayer === null && html`<audio autoplay>
								<source src="assets/media/audio/jtime.wav" type="audio/wav">
							</audio>`}
						`}
					</div>
				`}

				${activeAnswer != null
					&& state.dailyDoubleAnswerIds.includes(activeAnswer)
					&& !state.isBetLockedIn
					&& html`

					<div class="answer">
						<audio autoplay>
							<source src="assets/media/audio/daily-double.mp3" type="audio/mp3">
						</audio>
						<img src="assets/media/images/game/daily-double-1.png" class="dailyDoubleImg">
					</div>
				`}

				<table class="view-pinned tbl">
					<thead>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`<th>$${players[id].name}</th>`;
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`
									<td class="tbl-cell_fat ${id === state.activePlayer && 'tbl-cell_isActive'}">
										$${players[id].score || '0'}
									</td>
								`;
							})}
						</tr>
					</tbody>
				</table>

			</div>
		`;
	} else {
		return html`
			<!-- answer has not been revealed yet, show round.  Players will be making bets.-->
			${!activeAnswer && html`
				<h1>${activeCategories[0].label}</h1>
				<table class="tbl attach_bottom">
					<thead>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`<th>$${players[id].name}</th>`;
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							${Object.keys(players).map(function (id) {
								return html`<td class="tbl-cell_fat">$${players[id].score || '0'}</td>`;
							})}
						</tr>
					</tbody>
				</table>
			`}


			<!--answer is revealed-->
			${activeAnswer != null &&
				!isFinalEnded && html`
					<audio autoplay>
					<source src="assets/media/audio/jfinalj.wav" type="audio/wav">
				</audio>
				<div class="answer">
					${state.answers[state.activeAnswer].answer}
				</div>
			`}

			<!-- players bets are locked in, final is officially started -->
			${activeAnswer != null &&
				!isFinalEnded &&
				isFinalStarted && html`
				<audio autoplay>
					<source src="assets/media/audio/song.mp3" type="audio/mp3">
				</audio>
			`}

			<!-- Host is Scoring final round -->
			${!isFinalScored &&
				isFinalEnded && html`
				<h1>Please standby as the host scores the final round.</h1>
			`}

			<!--Game over: final scores displayed-->
			${isFinalScored && html`
				<div class="view">
					<div class="answer">
						${state.answers[state.activeAnswer].question}
					</div>
					<table class="tbl">
						<thead>
							<tr>
								${Object.keys(players).map(function (id) {
									return html`<th>$${players[id].name}</th>`;
								})}
							</tr>
						</thead>
						<tbody>
							<tr>
								${Object.keys(players).map(function (id) {
									return html`<td class="tbl-cell_tall answer-final">$${players[id].finalAnswer}</td>`;
								})}
							</tr>
							<tr>
								${Object.keys(players).map(function (id) {
									return html`<td class="tbl-cell_fat">$${players[id].score || '0'}</td>`;
								})}
							</tr>
						</tbody>
					</table>
				</div>
			`}
		`;
	}
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
