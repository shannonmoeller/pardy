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
    isFinalScored: false,

    answers: {
        0: {
            answer: "The current Governor of Minnesota",
            question: 'Who is Mark Dayton?',
            score: 200,
            correct: null,
        },
        1: {
            answer: "Minnesota's State Flower",
            question: 'What is the Pink Lady Slipper?',
            score: 400,
            correct: null,
        },
        2: {
            answer: "A toy company named after Minnesota's 9th largest lake.",
            question: 'What is Tonka?',
            score: 600,
            correct: null,
        },
        3: {
            answer: "",
            answerImage: '../assets/media/images/dogs/wolfhound.jpg',
            question: 'What is Spoonbridge and Cherry?',
            score: 800,
            correct: null,
        },
        4: {
            answer: "A city that claims the largest ball of twine built by a single person.",
            question: 'What is Darwin, Minnesota?',
            score: 1000,
            correct: null,
        },

        5: {
            answer: "Run the command after this operator even if the previous command failed.",
            question: "What is ';' (The Semi-Colon)?",
            score: 200,
            correct: null,
        },
        6: {
            answer: "Feeds the output of a process to the input of another.",
            question: "What is a Unix Pipeline '|'?",
            score: 400,
            correct: null,
        },
        7: {
            answer: "ls argument that lists just the names of a directory's contents, in rows, exluding '.' and '..'",
            question: "What is ls -1?",
            score: 600,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },
        8: {
            answer: "Search for a given string in a file.",
            question: "What is grep?",
            score: 800,
            correct: null,
        },
        9: {
            answer: "Create a file or directory, appending a uniquely random suffix to the name, using '.XXXX' as a template.",
            question: "What is mktemp?",
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'Minimal syntax. Dynamic typing. Multi-paradigm. Named after a British comedy.',
            question: 'What is Python?',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'Dynamic, object-oriented, created by Yukihiro Matsumoto with ease of use in mind.',
            question: 'What is Ruby',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'A dialect of Smalltalk that pioneered prototype-based languages like JavaScript',
            question: 'What is Self?',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'Lisp on JVM. Created by Rich Hickey.',
            question: 'What is Clojure?',
            score: 800,
            correct: null,
        },
        14: {
            answer: 'A concurrent, functional language developed by the telecommunications company Ericsson. Used to power the worlds most popular chat and SMS services.',
            question: 'What is Erlang?',
            score: 1000,
            correct: null,
        },


        15: {
            answer: 'This Swedish gamer/vlogger holds the record for the most subscribers (aka his Bro Army)',
            question: 'Who is Pewdiepie?',
            score: 200,
            correct: null,
        },
        16: {
            answer: '"Hey ______, Michael here"',
            question: 'Who is Vsauce?',
            score: 400,
            correct: null,
        },
        17: {
            answer: 'Watch an anonymous man make disturbing messes in his kitchen.',
            question: 'Who is HowToBasic?',
            score: 600,
            correct: null,
        },
        18: {
            answer: "Two brothers send each other videos and call their fans nerdfighters",
            question: 'Who are the Vlogbrothers?',
            score: 1000,
            correct: null,
        },
        19: {
            answer: "How To Trick People Into Thinking You're Good Looking (65m views)",
            question: 'Who is Jenna Marbles?',
            score: 800,
            correct: null,
        },

        20: {
            answer: '',
            answerImage: '../assets/media/images/2017-01-10/wendy.png',
            question: "What is Wendys?",
            score: 200,
            correct: null,
        },
        21: {
            answer: '',
            answerImage: '../assets/media/images/2017-01-10/mcd.jpg',
            question: 'What is McDonalds?',
            score: 400,
            correct: null,
        },
        22: {
            answer: '',
            answerImage: '../assets/media/images/2017-01-10/bk.jpg',
            question: 'What is Burger King?',
            score: 600,
            correct: null,
        },
        23: {
            answer: '',
            answerImage: '../assets/media/images/2017-01-10/inout.jpg',
            question: 'What is In-N-Out Burger?',
            score: 800,
            correct: null,
        },
        24: {
            answer: '',
            answerImage: '../assets/media/images/2017-01-10/sonic.jpg',
            question: 'What is Sonic?',
            score: 1000,
            correct: null,
        },

        25: {
            answer: 'The Republic',
            question: 'Who is Playdough™?',
            score: 200,
            correct: null,
        },
        26: {
            answer: '"God is dead. God remains dead. And we have killed him. How shall we comfort ourselves, the murderers of all murderers?"',
            question: 'Who is Friedrich Nietzsche?',
            score: 400,
            correct: null,
        },
        27: {
            answer: 'Regarded as the first existentialist philosopher',
            question: 'Who is Søren Kierkegaard?',
            score: 600,
            correct: null,
        },
        28: {
            answer: 'You float like a feather, In a beautiful world, I wish I was special, You\'re so %!*&$ special',
            question: 'Who is Marshall McLuhan?',
            score: 800,
            correct: null,
        },
        29: {
            answer: 'A student of Plato who founded a school in Athens known as the “Lyceum”.',
            question: 'Who is Aristotle?',
            score: 1000,
            correct: null,
        },

        30: {
            answer: '',
            question: '',
            score: 400,
            correct: null,
        },
        31: {
            answer: '',
            question: '',
            score: 800,
            correct: null,
        },
        32: {
            answer: '',
            question: '',
            score: 1200,
            correct: null,
        },
        33: {
            answer: 'The number of tacos you ate for taco day',
            question: 'Correct',
            score: 1600,
            correct: null,
        },
        34: {
            answer: '',
            question: '',
            score: 2000,
            correct: null,
        },



        35: {
            answer: 'Jon Skinner left Google to build a better text editor. Written in Python.',
            question: 'What is Sublime Text?',
            score: 400,
            correct: null,
        },
        36: {
            answer: "Built on Electron",
            question: 'What is Atom?',
            score: 800,
            correct: null,
        },
        37: {
            answer: 'Mode based editing. Keeps your fingers on home row.',
            question: 'What is Vim?',
            score: 1200,
            correct: null,
        },
        38: {
            answer: 'Gives you carpel tunnel in your pinky.',
            question: 'What is Emacs?',
            score: 1600,
            correct: null,
        },
        39: {
            answer: 'Originally called "Multi-Tool W___ for Xenix systems."',
            question: 'What is Microsoft Word?',
            score: 2000,
            correct: null,
        },


        40: {
            answer: 'Moo Moo Farm',
            question: 'What is Mario Kart?',
            score: 400,
            correct: null,
        },
        41: {
            answer: '"Break the Targets!"',
            question: 'What is Super Smash Brothers?',
            score: 800,
            correct: null,
        },
        42: {
            answer: "Split screen, first person shooter. You're a spy."
            question: 'What is GoldenEye 007?',
            score: 1200,
            correct: null,
        },
        43: {
            answer: "The N64's original selling price in the US (+/- $10)",
            question: '$199.99',
            score: 1600,
            correct: null,
        },
        44: {
            answer: "The launch title of the N64 that was also it's best selling game.",
            question: 'What is Super Mario 64?',
            score: 2000,
            correct: null,
        },


        45: {
            answer: 'Sierra Mist',
            question: '0',
            score: 400,
            correct: null,
        },
        46: {
            answer: 'Red Bull',
            question: '80',
            score: 800,
            correct: null,
        },
        47: {
            answer: 'Coffee (drip)',
            question: '115-175',
            score: 1200,
            correct: null,
        },
        48: {
            answer: 'Coca-Cola Classic',
            question: '34',
            score: 1600,
            correct: null,
        },
        49: {
            answer: 'Green Tea',
            question: '15',
            score: 2000,
            correct: null,
        },


        50: {
            answer: 'Tinky Winky',
            question: 'Telletubies',
            score: 400,
            correct: null,
        },
        51: {
            answer: 'Features an 8-foot 2-inch tall yellow Canary',
            question: 'Sesame Street',
            score: 800,
            correct: null,
        },
        52: {
            answer: 'This sport originally played with such things as inflated pig bladder.',
            question: 'Football',
            score: 1200,
            correct: null,
        },
        53: {
            answer: "Having fun isn't hard, when you have a library card",
            question: 'Arthur',
            score: 1600,
            correct: null,
        },
        54: {
            answer: 'Two brothers with a very, very messy closet',
            question: 'Zoboomafoo or Kratt Brothers',
            score: 2000,
            correct: null,
        },


        55: {
            answer: '',
            question: 'Papyrus',
            answerImage: '../assets/media/images/2017-01-10/papyrus.png',
            score: 400,
            correct: null,
        },
        56: {
            answer: '',
            question: 'Chalkboard',
            answerImage: '../assets/media/images/2017-01-10/chalkboard.jpg',
            score: 800,
            correct: null,
        },
        57: {
            answer: '',
            question: 'Curlz MT',
            answerImage: '../assets/media/images/2017-01-10/CurlzMT.gif',
            score: 1200,
            correct: null,
        },
        58: {
            answer: '',
            question: 'Trojan',
            answerImage: '../assets/media/images/2017-01-10/trojan.png',
            score: 1600,
            correct: null,
        },
        59: {
            answer: '',
            question: 'Copperplate Gothic',
            answerImage: '../assets/media/images/2017-01-10/CopperplateGothic.png',
            score: 2000,
            correct: null,
        },



        60: {
            answer: "Jacob Bernoulli's most important contribution was in this field",
            question: 'Probability (law of large numbers)',
            score: 2000,
            correct: null,
        },
    },
    categories: [
        {
            label: 'All about Minnesnowta',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Shell Commands',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'Programming Languages',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'YouTube Channels',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'Drive Thru',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Philosophers',
            answerIds: [25, 26, 27, 28, 29],
            round: 0
        },
        {
            label: 'Fast Click',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'Text Editors',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'NINTENDO SIXTY FOUR!!!',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: 'Caffeine Content',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        {
            label: 'Kids Shows',
            answerIds: [50, 51, 52, 53, 54],
            round: 1
        },
        {
            label: 'Bad Fonts',
            answerIds: [55, 56, 57, 58, 59],
            round: 1
        },
        {
            label: '',
            answerIds: [60],
            round: 2
        },
    ],
};
