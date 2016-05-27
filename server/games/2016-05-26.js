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
			answer: 'Creator of HTML and the internet as we know it.',
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
			answer: 'typeof { foo: bar }',
			question: 'What is \'object\'?',
			score: 400,
			correct: null,
		},
		7: {
			answer: 'typeof ["foo"]',
			question: 'What is \'object\'?',
			score: 600,
			correct: null,
		},
		8: {
			answer: 'typeof null',
			question: 'What is \'object\'?',
			score: 800,
			correct: null,
		},
		9: {
			answer: 'typeof false',
			question: 'What is \'boolean\'?',
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
			question: 'What is rebbecapurple?',
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
			question: 'What is .log() ?',
			answer: 'Method used to display a value in the console.',
			score: 200,
			correct: null,
		},
		16: {
			question: 'What is .error() ?',
			answer: 'Method used to display an error in the console.',
			score: 400,
			correct: null,
		},
		17: {
			question: 'What is .trace() ?',
			answer: 'Method used to display a stack trace in the console.',
			score: 600,
			correct: null,
		},
		18: {
			question: 'What is .time() and .timeEnd()',
			answer: 'These two methods may be used together to test performance.',
			score: 800,
			correct: null,
		},
		19: {
			question: 'What is .dir() ?',
			answer: 'Method used to force a node to be logged as an object.',
			score: 1000,
			correct: null,
		},

		20: {
			question: 'What is Star Wars?',
			answer: 'A film about a not-so-orphan boy with "delusions of grandeur".',
			score: 200,
			correct: null,
		},
		21: {
			question: 'What is Star Trek?',
			answer: 'KHAAAAAAAAANNNNN!!!',
			score: 400,
			correct: null,
		},
		22: {
			question: 'What is Starship Toopers?',
			answer: 'Based on a novel by Robert A. Heinlein, this futuristic war film was an arachnophobics nightmare.',
			score: 600,
			correct: null,
		},
		23: {
			question: 'What is Stardust?',
			answer: 'Robert De Niro portraied a cross-dressing hair stylist in this fantasy adventure.',
			score: 800,
			correct: null,
		},
		24: {
			question: 'What is Starman?',
			answer: 'Jeff Bridges played an Arizona-bound alien in this 1984 film.',
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
