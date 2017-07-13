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
            answer: "1 == true",
            question: 'true',
            score: 200,
            correct: null,
        },
        1: {
            answer: "\"1\" == true",
            question: 'true',
            score: 400,
            correct: null,
        },
        2: {
            answer: "\"1\" == \"true\"",
            question: 'false',
            score: 600,
            correct: null,
        },
        3: {
            answer: "1 == \"1\"",
            question: 'true',
            score: 800,
            correct: null,
        },
        4: {
            answer: "[1] == true",
            question: 'true',
            score: 1000,
            correct: null,
        },

        5: {
            answer: "",
			answerImage: "https://u1398656.dl.dropboxusercontent.com/u/1398656/napster.png",
			question: "Napster",
            score: 200,
            correct: null,
        },
        6: {
            answer: "",
			answerImage: "https://u1398656.dl.dropboxusercontent.com/u/1398656/7082504E-CBB2-4E57-B390-321EEBB49882.png",
            question: "Myspace",
            score: 400,
            correct: null,
        },
        7: {
            answer: "",
			answerImage: "https://u1398656.dl.dropboxusercontent.com/u/1398656/3271EBB7-AE97-4AE2-ABEB-0F873C0F2074.png",
            question: "Netscape",
            score: 600,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },
        8: {
			answer: "",
			answerImage: "https://u1398656.dl.dropboxusercontent.com/u/1398656/gateway.png",
            question: "Gateway",
            score: 800,
            correct: null,
        },
        9: {
            answer: "",
			answerImage: "https://u1398656.dl.dropboxusercontent.com/u/1398656/7FB3567C-5941-4E95-9E1C-AA723791F41D.png",
			question: "Original Firefox Logo",
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'Sam Adams',
            question: 'Massachussetts',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'Sierra Nevada',
            question: 'California',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'Bells',
            question: 'Michigan',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'Deschutes',
            question: 'Oregon',
            score: 800,
            correct: null,
        },
        14: {
            answer: 'New Glaurus',
            question: 'Wisconsin',
            score: 1000,
            correct: null,
        },


        15: {
            answer: "Yo, I'll tell you what I want, what I really, really want.\n So tell me what you want, what you really, really want",
            question: 'Wannabe by The Spice Girls',
            score: 200,
            correct: null,
        },
        16: {
            answer: "But did you know that when it snows.\n My eyes become large and the light that you shine can be seen?",
            question: 'Kiss from a Rose by Seal',
            score: 400,
            correct: null,
        },
        17: {
            answer: "Man, it's a hot one\n Like seven inches from the midday sun",
            question: 'Smooth by Santana',
            score: 600,
            correct: null,
        },
        18: {
            answer: "As I walk through the valley of the shadow of death.\n I take a look at my life and realize there's nothin' left",
            question: "Gangsta's Paradise by Coolio",
            score: 1000,
            correct: null,
        },
        19: {
            answer: "Chickity China the Chinese chicken.\n You have a drumstick and your brain stops tickin'",
            question: 'One Week by the Barenaked Ladies',
            score: 800,
            correct: null,
        },

        20: {
            answer: "\"Wonderfilled\" is a section of this sandwich cookie's website",
            question: "Oreos",
            score: 200,
            correct: null,
        },
        21: {
            answer: 'snackworks.com has a recipe for fluffy banana pudding parfaits, which use 40 of this wafer brand',
            question: 'Nilla Wafers',
            score: 400,
            correct: null,
        },
        22: {
            answer: "Learn all about these cookie baking elves who leave in the Hollow Tree® (aka the Fac-Tree) on this brand's website",
            question: 'Keebler',
            score: 600,
            correct: null,
        },
        23: {
            answer: 'Recipes on this fruit-filled cookie’s website include salads, smoothies and ham-and-cheese toppings',
            question: 'Fig Newtons',
            score: 800,
            correct: null,
        },
        24: {
            answer: "\"Homemade recipe, homemade taste\", says this chocolate chip brand with a name that rhymes",
            question: 'Famous Amos',
            score: 1000,
            correct: null,
        },

        25: {
            answer: "We're all at most 6 degrees from this man",
            question: 'Kevin Bacon',
            score: 200,
            correct: null,
        },
        26: {
            answer: "Hey girl… this guy got an Oscar nomination for La La Land",
            question: 'Ryan Gosling',
            score: 400,
            correct: null,
        },
        27: {
            answer: "King of the comic-book movies, he directed 300 and Superman",
            question: 'Zack Snyder',
            score: 600,
            correct: null,
        },
        28: {
            answer: "He's a Hall-of-fame tight-end and football commentator who once played for the Broncos and Ravens",
            question: 'Shannon Sharpe',
            score: 800,
            correct: null,
        },
        29: {
            answer: "He's known for for his role as Blaine Anderson on Glee",
            question: 'Darren Criss',
            score: 1000,
            correct: null,
        },

        30: {
            answer: 'Javascript has 6 primitive data types such as String or Boolean. All other data is this type.',
            question: 'Object',
            score: 400,
            correct: null,
        },
        31: {
            answer: 'You can look up values in this data type collection by an index',
            question: 'Array',
            score: 800,
            correct: null,
        },
        32: {
            answer: 'Instances of this data type are unique, useful for creating private object properties',
            question: 'Symbol',
            score: 1200,
            correct: null,
        },
        33: {
            answer: 'This new special object stores a collection of unique values',
            question: 'Set',
            score: 1600,
            correct: null,
        },
        34: {
            answer: 'This new special object allows you to use functions, objects, and primitives as keys',
            question: 'Map',
            score: 2000,
            correct: null,
        },



        35: {
            answer: '{} + {} = ?',
            question: 'NaN',
            score: 400,
            correct: null,
        },
        36: {
            answer: "[] + [] =",
            question: "\"\"",
            score: 800,
            correct: null,
        },
        37: {
            answer: '[] + {} = ?',
            question: "\"[object Object]\"",
            score: 1200,
            correct: null,
        },
        38: {
            answer: '{} + [] = ?',
            question: '0',
            score: 1600,
            correct: null,
        },
        39: {
            answer: "Array(8).join('wat' - 1) + ' Batman!'",
            question: "\"NaNNaNNaNNaNNaNNaNNaN Batman!\"",
            score: 2000,
            correct: null,
        },

        40: {
            answer: 'Shannon Moeller',
            question: 'New York',
            score: 400,
            correct: null,
        },

        41: {
            answer: 'Mike Sawicki',
            question: 'Ohio',
            score: 800,
            correct: null,
        },
        42: {
            answer: 'Justin Hendrickson',
            question: 'Wisconsin',
            score: 1200,
            correct: null,
        },
        43: {
            answer: "Tim Van Fosson",
            question: 'Iowa',
            score: 1600,
            correct: null,
        },
        44: {
            answer: "Toby Hurtubise",
            question: 'Michigan',
            score: 2000,
            correct: null,
        },


        45: {
            answer: 'Dogue De Bordeaux',
            question: 'Dog',
            score: 400,
            correct: null,
        },
        46: {
            answer: 'Canadian Hairless',
            question: 'Cat',
            score: 800,
            correct: null,
        },
        47: {
            answer: 'Jersey Wooly',
            question: 'Rabbit',
            score: 1200,
            correct: null,
        },
        48: {
            answer: 'Tennessee Walker',
            question: 'Horse',
            score: 1600,
            correct: null,
        },
        49: {
            answer: 'Ragamuffin',
            question: 'Cat',
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
            label: 'this == that?',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Old-School Cool',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'Breweries by State',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: '#1 Songs of the 90s',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'THIS WEBSITE USES COOKIES',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Famous Bernoullians',
            answerIds: [25, 26, 27, 28, 29],
            round: 1
        },
        {
            label: 'JS data types',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'Watman',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'Nerds by State',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: 'Find a Pet',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        // {
        //     label: '',
        //     answerIds: [50, 51, 52, 53, 54],
        //     round: 1
        // },
        // {
        //     label: '',
        //     answerIds: [55, 56, 57, 58, 59],
        //     round: 1
        // },
        {
            label: 'Final Yo',
            answerIds: [60],
            round: 2
        },
    ],
};
