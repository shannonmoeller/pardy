/*
 * This is the view presented to the player on their mobile device.
 */

const util = require('./util');
const { html } = util;
var debounce = require('lodash');

function render(state) {
	const id = util.getUser('player').id;
	const player = state.players[id];
	const score = player.score;
	const isFinalBetLockedIn = player.isFinalBetLockedIn;
	const isFinalAnswerLockedIn = player.isFinalAnswerLockedIn;
	let finalAnswer = player.finalAnswer;
	const localAnswer = localStorage.getItem('pardy.finalAnswer');
	if(finalAnswer !== localAnswer && localAnswer !== undefined) {
		finalAnswer = localAnswer
	}

	let finalBet = player.finalBet;
	const localBet = localStorage.getItem('pardy.finalBet');
	if(finalBet !== localBet && localBet !== undefined) {
		finalBet = localBet;
	}

	if (!player) {
		return location.reload();
	}
	console.log(player);
	// If its final jeopardy
	if(state.activeRound === 2) {
		// if the player has a score of zero or less, the player is disqualified
		if(score <= 0) {
			return html`
				<h1>Sorry, you're going to have to sit this one out.</h1>
			`;

		// otherwise the player have the opportunity to lock in their final bet
		} else if (!state.isFinalStarted && !isFinalBetLockedIn) {
			return html`
				<label>Your Bet</label>
				<input name="changeFinalBet" id="Final_Bet" type="number"  value="${finalBet}" min="0" max="${player.score}" step="100" ${isFinalBetLockedIn && 'disabled'}>
				<button name="lockInFinalBet" data-playerid="${id}" ${isFinalBetLockedIn && 'disabled'}>Lock In Bet</button>
			 	<div>Current Score: $${player.score}
			`;
		// after the final bet is locked in, they are in limbo until the final answer countdown is started at which point
		// they can enter their answer into the text area provided
		} else if (!state.isFinalEnded && !isFinalAnswerLockedIn) {
			return html`
				<input type="text" name="changeFinalAnswer" id="Final_Answer" value="${finalAnswer}" ${!state.isFinalStarted && 'disabled'} />
				<button name="lockInFinalAnswer" ${!state.isFinalStarted && 'disabled'}>Lock in Final Answer</button>
				<h2 ${state.isFinalStarted && 'style="display:none"'}>Please Wait. Final Webpardy will be starting shortly.</h2>	
			`;
		// When the host conclude
		} else {
			return html`
				<h2>Final Webpardy has concluded! Good luck!</h2>
			`;
		}
	} else {
		return html`
			<div class="vr" >
				<button class="btn ${id === state.activePlayer && 'btn_yep'}" name="selectPlayer">
					$${player.name}<br />
					($${player.score || '0'})
				</button>
			</div>
	`;
	}
}

function connectPlayer(socket) {
	var el = document.querySelector('.js-pardy');
	var player = util.getUser('player');

	var actions = {
		lockInFinalBet() {
			socket.emit('action', {
				type: 'lockInFinalBet',
				id: player.id,
				finalBet: document.getElementById('Final_Bet').value
			});
		},
		lockInFinalAnswer() {
			socket.emit('action', {
				type: 'lockInFinalAnswer',
				id: player.id,
				finalAnswer: document.getElementById('Final_Answer').value
			});
		},
		changeFinalBet(ev) {
			localStorage.setItem('pardy.finalBet', ev.target.value);
		},
		changeFinalAnswer(ev) {
			localStorage.setItem('pardy.finalAnswer', ev.target.value);
		},
		selectPlayer(ev) {
			socket.emit('action', {
				type: 'selectPlayer',
				id: player.id,
			});

			ev.preventDefault();
			ev.stopImmediatePropagation();
		}
	};

	el.addEventListener('touchstart', function (ev) {
		var action = ev.target.name;
		actions[action](ev);
	});


	el.addEventListener('keyup', function (ev) {
		if(ev.target.name) {
			var action = ev.target.name;
			actions[action](ev);
		}
	});

	el.addEventListener('change', function (ev) {
		if(ev.target.name) {
			var action = ev.target.name;
			actions[action](ev);
		}
	});

	el.addEventListener('click', function (ev) {
		if(ev.target.name) {
			var action = ev.target.name;
			actions[action](ev);
		}
	});

	socket.on('update', function (state) {
		util.render(el, render(state));
	});

	socket.emit('action', {
		type: 'addPlayer',
		id: player.id,
		name: player.name,
	});

}

module.exports = connectPlayer;
