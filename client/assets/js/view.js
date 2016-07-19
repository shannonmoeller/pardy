'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	const categories = state.categories;
	const activeRound = state.activeRound;
	const activeCategories = categories.filter(cat => cat.round === activeRound);
	const activeAnswer = state.activeAnswer;
	const answers = state.answers;
	const players = state.players;
	const isFinalStarted = state.isFinalStarted;
	const isFinalEnded = state.isFinalEnded;

	// If not final jeopardy
 	if (activeRound < 2) {
		return html`
		<div class="vr">
			${state.activeAnswer == null && html`
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
								${activeCategories.map(category => {
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
			return html`<td class="tbl-cell_fat">$${players[id].score || '0'}</td>`;
		})}
						</tr>
					</tbody>
				</table>
			`}

			${activeAnswer != null &&
				 (!(state.answers[activeAnswer].isDouble) || 
			     (state.answers[activeAnswer].isDouble && state.answers[activeAnswer].isBetLockedIn)) && 
				 html`
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
						$${state.players[state.activePlayer].name}
					</div>
				`}					
			`}
			${activeAnswer != null && 
		      state.answers[activeAnswer].isDouble && 
		      !state.answers[activeAnswer].isBetLockedIn && html`
				<div class="answer">
					Double Webpardy!<br/>
				</div>
			`}
			
		</div>
	`;
	} else {
		return html`
			
			<!-- answer has not been revealed yet, show round.  Players will be making bets.-->
			${!activeAnswer && html`
				<h1>Final Webpardy!</h1>
			`}
			
			<!--answer is revealed-->
			${activeAnswer != null &&
				!isFinalEnded && html`
				<div class="answer">
					${state.answers[state.activeAnswer].answer}
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
