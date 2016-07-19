// Node native http server
const http = require('http');

// Node native operating-system related utility functions
const os = require('os');

// The path module provides utilities for working with file and directory paths.
const path = require('path');

// Node web app framework, including many HTTP utility apis
const express = require('express');

// middleware for single page apps with client side routing
const history = require('express-history-api-fallback');

// A JS framework for real-time bidirectional event-based communication.
// Socket.IO primarily uses the WebSocket protocol with polling as a fallback option.
const socketIo = require('socket.io');

// The express() function is a top-level function exported by the express module.
const app = express();

// top level function can be passed into http.Server to create a server?
const server = http.Server(app);

// configures io with the server object
const io = socketIo(server);

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// https://nodejs.org/api/path.html#path_path_resolve_path
const root = path.resolve('client');

// returns the hostname of the OS
const host = os.hostname();

// The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().  Sets the process to the current port or 3000 if null or undefined
const port = process.env.PORT || 3000;

// serve static
// .use Mounts the specified middleware function or functions at the specified path. If path is not specified, it defaults to “/”.
app.use(express.static(root));

// ???
app.use(history('index.html', { root }));

// manage users
io.on('connection', require('./server'));

// start listening
server.listen(port, () => {
	console.log('http://%s:%d', host, port);
});
