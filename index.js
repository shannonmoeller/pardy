const http = require('http');
const os = require('os');
const path = require('path');

const express = require('express');
const history = require('express-history-api-fallback');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

const root = path.resolve('client');
const host = os.hostname();
const port = process.env.PORT || 3000;

// serve static
app.use(express.static(root));
app.use(history('index.html', { root }));

// manage users
io.on('connection', require('./server'));

// start listening
server.listen(port, () => {
	console.log('http://%s:%d', host, port);
});
