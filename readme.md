# pardy

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Websocket-based trivia game.

# Requirements

- Node 6+
- NPM 3+
- Evergreen Browser

# Installation

    $ git clone https://github.com/shannonmoeller/pardy.git
    $ cd pardy
    $ npm install
    $ npm start

# Usage

- Play: http://localhost:3000
- Host: http://localhost:3000/host
- View: http://localhost:3000/view

# Deployment

I recommend deploying with [Heroku](https://www.heroku.com). I'd rather use [now.sh](https://now.sh), but that has had some serious performance issues with deploying and websockets (as of 2016-01-31).

1. Create a [Heroku](https://www.heroku.com) account (the free tier works great).
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
2. Clone this repo.
3. From within the repo directory, [deploy the app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/pardy.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/pardy.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/pardy
