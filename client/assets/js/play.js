'use strict';

var util = require('./util');
var { html } = util;

function render(state) {
	var id = util.getUser('player').id;
	var player = state.players[id];

	if (!player) {
		return location.reload();
	}

	return html`
		<div class="vr">
			<button class="btn ${id === state.activePlayer && 'btn_yep'}">
				${player.name}<br />
				(${player.score || 0})
			</button>
		</div>
	`;
}

function connectPlayer(socket) {
	var el = document.querySelector('.js-pardy');
	var player = util.getUser('player');

	function selectPlayer(ev) {
		socket.emit('action', {
			type: 'selectPlayer',
			id: player.id,
		});

		ev.preventDefault();
		ev.stopImmediatePropagation();
	}

	el.addEventListener('touchstart', selectPlayer);
	el.addEventListener('click', selectPlayer);

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
