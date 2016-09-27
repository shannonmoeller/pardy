module.exports = {
	host: null,

	activePlayer: null,
	players: {},

	revealQuestion: false,
	activeAnswer: null,
	activeRound: 0,
	isFinal: false,
	isFinalStarted: false,
	isFinalEnded: false,


	answers: {
		0: {
			answer: 'HTML',
			answerImage: '/images/myImage.jpg',
			question: 'What is HyperText Markup Language?',
			score: 200,
			correct: null,
		},
		1: {
			answer: 'W3C',
			question: 'What is the World Wide Web Consortium?',
			score: 400,
			correct: null,
		},
		2: {
			answer: 'CRUD',
			question: 'What is create, read, update, delete?',
			score: 600,
			correct: null,
		},
		3: {
			answer: 'ARIA',
			question: 'What is Accessible Rich Internet Application?',
			score: 800,
			correct: null,
			isDouble: true,
			isBetLockedIn: false
		},
		4: {
			answer: 'MIME',
			question: 'What is Multipurpose Internet Mail Extension?',
			score: 1000,
			correct: null,
		},

		5: {
			answer: 'a.foo',
			question: 'What is 0 0 1 1?',
			score: 200,
			correct: null,
		},
		6: {
			answer: '.foo#bar',
			question: 'What is 0 1 1 0?',
			score: 400,
			correct: null,
		},
		7: {
			answer: '.foo:hover',
			question: 'What is 0 0 2 0?',
			score: 600,
			correct: null,
		},
		8: {
			answer: '.foo:after',
			question: 'What is 0 0 1 1?',
			score: 800,
			correct: null,
		},
		9: {
			answer: 'a.foo#bar:after:hover',
			question: 'What is 0 1 2 2?',
			score: 1000,
			correct: null,
		},

		10: {
			answer: 'The ones who are crazy enough to think that they can change the world, are the ones who do.',
			question: 'Who is Steve Jobs?',
			score: 200,
			correct: null,
		},
		11: {
			answer: 'Young people are just smarter.',
			question: 'Who is Mark Zuckerberg?',
			score: 400,
			correct: null,
		},
		12: {
			answer: 'With artificial intelligence we are summoning the demon.',
			question: 'Who is Elon Musk?',
			score: 600,
			correct: null,
		},
		13: {
			answer: 'If you can\'t make it good, at least make it look good.',
			question: 'Who is Bill Gates?',
			score: 800,
			correct: null,
		},
		14: {
			answer: 'There\'s no chance that the iPhone is going to get any significant market share.  No chance.',
			question: 'Who is Steve Ballmer?',
			score: 1000,
			correct: null,
		},

		15: {
			answer: '<pre><code>function baz() {\r\n     foo = \'nerd\';\r\n}\r\nbaz();\r\nconsole.log(foo);<\/code><\/pre>',
			question: 'What is nerd?',
			score: 200,
			correct: null,
		},
		16: {
			answer: '<pre><code>\'use strict\'\r\nfunction bar() {\r\n     foo = \'nerd\';\r\n}\r\nbar();\r\nconsole.log(foo);<\/code><\/pre>',
			question: 'What is a ReferenceError?',
			score: 400,
			correct: null,
		},
		17: {
			answer: '<pre><code>function foo() {\r\n    console.log(this);\r\n}\r\nfoo.call(null);<\/code><\/pre>',
			question: 'What is null?',
			score: 600,
			correct: null,
		},
		18: {
			answer: '<pre><code>var foo = [];\r\nfor (var i = 0; i < 2; i++) {\r\n    foo.push(() => i);\r\n}\r\nconsole.log(foo.map(x => x()));</code></pre>',
			question: 'What is [2,2]?',
			score: 800,
			correct: null,
		},
		19: {
			answer: '<pre><code>let foo = [];\r\nfor (let i = 0; i < 2; i++) {\r\n    foo.push(() => i);\r\n}\r\nconsole.log(foo.map(x => x()));</code></pre>',
			question: 'What is [0,1]?',
			score: 1000,
			correct: null,
		},

		20: {
			answer: 'Badger badger badger badger badger badger badger badger badger badger badger badger…',
			question: 'What is mushroom mushroom?',
			score: 200,
			correct: null,
		},
		21: {
			answer: 'This is Jerperdy!',
			question: 'What is Ehrmagerd?',
			score: 400,
			correct: null,
		},
		22: {
			answer: 'so Bernoulli     much Assemble    wow',
			question: 'What is Doge?',
			score: 600,
			correct: null,
		},
		23: {
			answer: 'This man once kicked a horse in the chin.  Its descendants are known today as giraffes.',
			question: 'Who is Chuck Norris?',
			score: 800,
			correct: null,
		},
		24: {
			answer: 'In this place, Jeopardy plays you.',
			question: 'What is Soviet Russia?',
			score: 1000,
			correct: null,
		},

		25: {
			answer: 'The world\’s first computer programmer.',
			question: 'Who is Ada Lovelace?',
			score: 200,
			correct: null,
		},
		26: {
			answer: 'Formerly the CEO of Hewlett Packard, she recently made a run for the US Presidency.',
			question: 'Who is Carly Fiorina?',
			score: 400,
			correct: null,
		},
		27: {
			answer: 'The character of Laurie Bream on HBO\'s Silicon Valley is based on Marissa Mayer, CEO of this tech company.',
			question: 'What is Yahoo!?',
			score: 600,
			correct: null,
		},
		28: {
			answer: 'While working for the US Navy in 1947, Grace Hopper discovered this blocking an electrical circuit in the Mark II Computer and coined an everlasting programming term.',
			question: 'What is a bug?',
			score: 800,
			correct: null,
		},
		29: {
			answer: 'Margaret Hamilton\’s skills were especially timely in 1969 when her flight software, developed using this technique she pioneered, prevented an abort of the Apollo 11 Moon Landing.',
			question: 'What is asynchronous programming?',
			score: 1000,
			correct: null,
		},

		30: {
			answer: 'According to the supercomputer Deep Thought, it\'s the Ultimate Answer to Life, the Universe, and Everything.',
			question: 'What is 42?',
			score: 1000,
			correct: null,
		},
	},
	categories: [
		{
			label: 'Alphabet Soup',
			answerIds: [0, 1, 2, 3, 4],
			round: 0
		},
		{
			label: 'CSS Specificity',
			answerIds: [5, 6, 7, 8, 9],
			round: 0
		},
		{
			label: 'The Quotable Billionaire',
			answerIds: [10, 11, 12, 13, 14],
			round: 0
		},
		{
			label: 'What the "foo"ck?',
			answerIds: [15, 16, 17, 18, 19],
			round: 0
		},
		{
			label: 'Pick Meme',
			answerIds: [20, 21, 22, 23, 24],
			round: 0
		},
		{
			label: 'The XX Factor',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: '',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: '',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: '',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: '',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: 'Sci Fi Lit',
			answerIds: [30],
			round: 2
		},
	],
};
