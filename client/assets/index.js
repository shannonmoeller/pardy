'use strict';

var socketIo = require('socket.io-client');

var io = socketIo();
var route = global.location.pathname.slice(1) || 'play';
var routes = {
	host: require('./js/host'),
	play: require('./js/play'),
	view: require('./js/view'),
};

routes[route](io);
