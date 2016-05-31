module.exports = {
	host: null,

	activePlayer: null,
	players: {},

	revealQuestion: false,
	activeAnswer: null,
	answers: {
		0: {
			answer: 'Creator of CSS Tricks and Codepen',
			question: 'Who is Chris Coyer?',
			score: 200,
			correct: null,
		},
		1: {
			answer: 'Created JavaScript in just 10 days while working for Netscape',
			question: 'Who is Brendan Eich?',
			score: 400,
			correct: null,
		},
		2: {
			answer: 'The discoverer of JSON and creator of the original jslint.',
			question: 'Who is Douglas Crockford?',
			score: 600,
			correct: null,
		},
		3: {
			answer: 'Creator of HTML and the<br/>internet as we know it.',
			question: 'Who is Tim Berners-Lee?',
			score: 800,
			correct: null,
		},
		4: {
			answer: 'Proposed the original CSS specification on October 10, 1994',
			question: 'Who is Håkon Wium Lie?',
			score: 1000,
			correct: null,
		},

		5: {
			answer: 'typeof \'Foo\'',
			question: 'What is \'string\'?',
			score: 200,
			correct: null,
		},
		6: {
			answer: 'typeof false',
			question: 'What is \'boolean\'?',
			score: 400,
			correct: null,
		},
		7: {
			answer: 'typeof { foo: bar }',
			question: 'What is \'object\'?',
			score: 600,
			correct: null,
		},
		8: {
			answer: 'typeof ["foo"]',
			question: 'What is \'object\'?',
			score: 800,
			correct: null,
		},
		9: {
			answer: 'typeof null',
			question: 'What is \'object\'?',
			score: 1000,
			correct: null,
		},

		10: {
			answer: 'The CSS name for #000',
			question: 'What is black?',
			score: 200,
			correct: null,
		},
		11: {
			answer: 'The CSS name for #f00',
			question: 'What is red?',
			score: 300,
			correct: null,
		},
		12: {
			answer: 'The CSS name for #00f',
			question: 'What is blue?',
			score: 600,
			correct: null,
		},
		13: {
			answer: 'The CSS name for a color added to the standard after the death of Eric Myer\'s daughter.',
			question: 'What is rebeccapurple?',
			score: 800,
			correct: null,
		},
		14: {
			answer: 'The CSS name for #fafad2',
			question: 'What is goldenrodyellow?',
			score: 1000,
			correct: null,
		},

		15: {
			answer: 'Method used to display a value in the console.',
			question: 'What is .log() ?',
			score: 200,
			correct: null,
		},
		16: {
			answer: 'Method used to display an error in the console.',
			question: 'What is .error() ?',
			score: 400,
			correct: null,
		},
		17: {
			answer: 'Method used to display a stack trace in the console.',
			question: 'What is .trace() ?',
			score: 600,
			correct: null,
		},
		18: {
			answer: 'These two methods may be used together to test performance.',
			question: 'What is .time() and .timeEnd() ?',
			score: 800,
			correct: null,
		},
		19: {
			answer: 'Method used to force a node to be logged as an object.',
			question: 'What is .dir() ?',
			score: 1000,
			correct: null,
		},

		20: {
			answer: 'A film about a not-so-orphan boy with "delusions of grandeur".',
			question: 'What is Star Wars?',
			score: 200,
			correct: null,
		},
		21: {
			answer: 'KHAAAAAAAAANNNNN!!!',
			question: 'What is Star Trek?',
			score: 400,
			correct: null,
		},
		22: {
			answer: 'Based on a novel by Robert A. Heinlein, this futuristic war film is an arachnophobic\'s nightmare.',
			question: 'What is Starship Toopers?',
			score: 600,
			correct: null,
		},
		23: {
			answer: 'Robert De Niro portraied a cross-dressing hair stylist in this fantasy adventure.',
			question: 'What is Stardust?',
			score: 800,
			correct: null,
		},
		24: {
			answer: 'Jeff Bridges played an Arizona-bound alien in this 1984 film.',
			question: 'What is Starman?',
			score: 1000,
			correct: null,
		},
	},

	categories: [
		{
			label: 'Famous Developers',
			answerIds: [0, 1, 2, 3, 4],
		},
		{
			label: 'typeof',
			answerIds: [5, 6, 7, 8, 9],
		},
		{
			label: 'CSS Colors',
			answerIds: [10, 11, 12, 13, 14],
		},
		{
			label: 'console',
			answerIds: [15, 16, 17, 18, 19],
		},
		{
			label: '"Star..." Movies',
			answerIds: [20, 21, 22, 23, 24],
		},
	],
};
