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
			answer: "Apple",
			question: "Cupertino, CA",
			score: 100,
			correct: null
		},
		1: {
			answer: "Microsoft",
			question: "Redmond, WA",
			score: 200,
			correct: null
		},
		2: {
			answer: "Google",
			question: "Mountain View, CA",
			score: 300,
			correct: null
		},
		3: {
			answer: "Adobe",
			question: "San Jose, CA",
			score: 400,
			correct: null
		},
		4: {
			answer: "W3C (List one of the four 'host' institutions)",
			question: "Cambridge, MA; Sophia-Antipolis, France; Keio University, Tokyo, Japan; Beihang University, Beijing, China",
			score: 500,
			correct: null
		}

		5: {
			answer: "Don't go under a certain speed, again.",
			question: "Speed 2",
			score: 100,
			correct: null
		},
		6: {
			answer: "When an alien race called the Psyclos turns the Earth into a mining colony, it's up to rebel hero, Johnny Goodboy, to lead a revolt and save the planet from the giant alien species.",
			question: "Battlefield Earth",
			score: 200,
			correct: null
		},
		7: {
			answer: "Shaquille O'Neal is a genie.",
			question: "Kazaam",
			score: 300,
			correct: null
		},
		8: {
			answer: "Paul Rudd loves to prank Conan O'Brien with a clip from this E.T. rip-off.",
			question: "Mac and Me",
			score: 400,
			correct: null
		},
		9: {
			answer: "M. Night Shyamalan's attempt at an animation-to-live action blockbuster.",
			question: "The Last Airbender",
			score: 500,
			correct: null
		},

		10: {
			answer: "Mark Zuckerberg is giving away $4.5 million to Facebook users who share a 'thank you' message.",
			question: "FALSE",
			score: 100,
			correct: null
		},
		11: {
			answer: "A machine-shop worker tore his scrotum in a piece of machinery and then stapled it back together. ",
			question: "TRUE",
			score: 200,
			correct: null
		},
		12: {
			answer: "Pregnant woman tries to beat carpool lane ticket by asserting her fetus counts as a second person. ",
			question: "TRUE",
			score: 300,
			correct: null
		},
		13: {
			answer: "C++ designer Bjarne Stroustrup admitted in an interview that he developed the language solely to create high-paying jobs for programmers. ",
			question: "FALSE",
			score: 400,
			correct: null
		},
		14: {
			answer: "Nine people died in a beer flood in 1814. ",
			question: "TRUE",
			score: 500,
			correct: null
		},

		15: {
			answer: "*",
			question: "0 0 0 0",
			score: 100,
			correct: null;
		},
		16: {
			answer: "* > li",
			question: "0 0 0 1",
			score: 200,
			correct: null;
		},
		17: {
			answer: "li > div > .media + .media",
			question: "0 0 2 2",
			score: 300,
			correct: null;
		},
		18: {
			answer: "input[type='radio'] ~ .last:first-child",
			question: "0 0 3 1",
			score: 400,
			correct: null;
		},
		19: {
			answer: ".thisIs .against .our #standards #never.ever .do .this !important",
			question: "0 2 6 1",
			score: 500,
			correct: null;
		},

		20: {
			answer: "Where the cutest of the cute cuteness come to cute.",
			question: "r/aww",
			score: 100,
			correct: null
		},
		21: {
			answer: "If you have a question, you can ask it to the world.",
			question: "r/AskReddit",
			score: 200,
			correct: null
		},
		22: {
			answer: "If you are feeling too good about yourself, post a picture and the internet will destroy you.",
			question: "r/RoastMe",
			score: 300,
			correct: null
		},
		23: {
			answer: "You can see pictures of the world so beautiful, they are almost sexy.",
			question: "r/EarthPorn",
			score: 400,
			correct: null
		},
		24: {
			answer: "Last night my friend asked to use a USB port to charge his cigarette, but I was using it to charge my book. The future is stupid.",
			question: "r/ShowerThoughts",
			score: 500,
			correct: null
		},

		25: {
			answer: "Raster images",
			question: "Photoshop",
			score: 200,
			correct: null,
		},
		26: {
			answer: "Cinematic visual effect and motion graphics",
			question: "After Effects",
			score: 400,
			correct: null,
		},
		27: {
			answer: "Photo processing",
			question: "Lightroom",
			score: 600,
			correct: null,
		},
		28: {
			answer: "Dreamweaver without the burden of coding",
			question: "Muse",
			score: 800,
			correct: null,
		},
		29: {
			answer: "Collaborative screenwriting, reporting, and scheduling tools.",
			question: "Story",
			score: 100,
			correct: null,
		},

		30: {
			answer: "THE JavaScript Library",
			question: "jQuery",
			score: 200,
			correct: null
		},
		31: {
			answer: "Cascading grid layout library",
			question: "Masonry",
			score: 400,
			correct: null
		},
		32: {
			answer: "JavaScript 3D library",
			question: "Three",
			score: 600,
			correct: null
		},
		33: {
			answer: "Give your JS App some Models, Views, Collections, and Events",
			question: "Backbone",
			score: 800,
			correct: null
		},
		34: {
			answer: "Javascript audio library for the modern web",
			question: "Howler",
			score: 100,
			correct: null
		},

		35: {
			answer: "CEO",
			question: "Tom O'Neill",
			score: 200,
			correct: null
		},
		36: {
			answer: "DM of Group Bacon",
			question: "Sherman Bausch",
			score: 400,
			correct: null
		},
		37: {
			answer: "VP of Marketing",
			question: "Kristi Gloppen",
			score: 600,
			correct: null
		},
		38: {
			answer: "Manager, Compensation, Benefits, Total Rewards and Payroll",
			question: "Kate Shorba",
			score: 800,
			correct: null
		},
		39: {
			answer: "General Counsel",
			question: "Peter Carlson",
			score: 100,
			correct: null
		},

		40: {
			answer: "USB",
			question: "Universal Serial Bus",
			score: 200,
			correct: null
		},
		41: {
			answer: "IDE",
			question: "Integrated Development Environment",
			score: 400,
			correct: null
		},
		42: {
			answer: "DHCP",
			question: "Dynamic Host Configuration Protocol",
			score: 600,
			correct: null
		},
		43: {
			answer: "ASCII",
			question: "American Standard Code for Information Interchange",
			score: 800,
			correct: null
		},
		44: {
			answer: "JPEG",
			question: "Joint Photographic Experts Group",
			score: 100,
			correct: null
		},

		45: {
			answer: "A guy runs really fast.",
			question: "Flash",
			score: 200,
			correct: null
		},
		46: {
			answer: "A guy who shoots a bow.",
			question: "Arrow",
			score: 400,
			correct: null
		},
		47: {
			answer: "A girl who is really fast and strong and laser-eyes.",
			question: "Supergirl",
			score: 600,
			correct: null
		},
		48: {
			answer: "A group of time traveling do-gooders.",
			question: "Legens of Tomorrow.",
			score: 800,
			correct: null
		},
		49: {
			answer: "A group of spy-type do-gooders.",
			question: "Agents of SHIELD",
			score: 100,
			correct: null
		},

		50: {
			answer: "The official designation for the trooper who yells 'Traitor' in The Force Awakens. ",
			question: "FN-2199",
			score: ,
			correct: null
		},
	},
	categories: [
		{
			label: 'HQ',
			answerIds: [0, 1, 2, 3, 4],
			round: 0
		},
		{
			label: 'Really Bad Movies',
			answerIds: [5, 6, 7, 8, 9],
			round: 0
		},
		{
			label: 'Snopes',
			answerIds: [10, 11, 12, 13, 14],
			round: 0
		},
		{
			label: 'Specificity?',
			answerIds: [15, 16, 17, 18, 19],
			round: 0
		},
		{
			label: 'Subreddits',
			answerIds: [20, 21, 22, 23, 24],
			round: 0
		},
		{
			label: 'Adobe Products',
			answerIds: [25, 26, 27, 28, 29],
			round: 1
		},
		{
			label: '.js',
			answerIds: [30, 31, 32, 33, 34],
			round: 1
		},
		{
			label: 'Nerds',
			answerIds: [35, 36, 37, 38, 39],
			round: 1
		},
		{
			label: 'Acronyms',
			answerIds: [40, 41, 42, 43, 44],
			round: 1
		},
		{
			label: 'Superhero TV',
			answerIds: [45, 46, 47, 48, 49],
			round: 1
		},
		{
			label: 'Star Wars',
			answerIds: [50],
			round: 2
		}
	]
};