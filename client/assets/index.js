'use strict';

//Client side routing

var socketIo = require('socket.io-client');

var io = socketIo();
var route = global.location.pathname.slice(1) || 'play';
var routes = {
	host: require('./js/host'),
	play: require('./js/play'),
	view: require('./js/view'),
};

if (route in routes) {
	routes[route](io);
}
