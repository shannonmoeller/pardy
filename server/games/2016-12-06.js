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
            answer: "Melts in Your Mouth, Not in Your Hands.",
            question: 'What is M&Ms?',
            score: 200,
            correct: null,
        },
        1: {
            answer: "Maybe she's born with it. Maybe it's ___________.",
            question: 'What is Maybelline?',
            score: 400,
            correct: null,
        },
        2: {
            answer: "I'm Lovin' it.",
            question: 'What is McDonald\'s?',
            score: 600,
            correct: null,
        },
        3: {
            answer: "Save money. Live Better.",
            question: 'What is Walmart?',
            score: 800,
            correct: null,
        },
        4: {
            answer: "American by birth. Rebel by choice.",
            question: 'What is Harley Davidson?',
            score: 1000,
            correct: null,
        },

        5: {
            answer: 'The living room of the Simpsons.',
            question: 'What is Springfield?',
            score: 200,
            correct: null,
        },
        6: {
            answer: 'One does not simply walk in this room.',
            question: 'What is Mordor?',
            score: 400,
            correct: null,
        },
        7: {
            answer: 'Everything is awesome with Legos in this room.',
            question: 'What is Brickhouse?',
            score: 600,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },
        8: {
            answer: 'This room features the first appearance of a certain plumber.',
            question: 'What is Dankey Kang?',
            score: 800,
            correct: null,
        },
        9: {
            answer: 'You can park your Millenium Falcon up by the front door off 9555.',
            question: 'What is Docking Bay 94?',
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'The Big Apple',
            question: 'What is New York City?',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'The City of Lights',
            question: 'What is Paris?',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'The City by the Bay',
            question: 'What is San Francisco?',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'The Old Smoke',
            question: 'What is London?',
            score: 800,
            correct: null,
        },
        14: {
            answer: 'The Eternal City',
            question: 'What is Rome?',
            score: 1000,
            correct: null,
        },


        15: {
            answer: 'Sue Storm (Invisible Woman) and Johnny Storm (Human Torch)',
            question: 'What are silings?',
            score: 200,
            correct: null,
        },
        16: {
            answer: 'Martha and Thomas Wayne',
            question: 'What are wife and husband?',
            score: 400,
            correct: null,
        },
        17: {
            answer: 'Franklin and Valeria Richards',
            question: 'What are siblings?',
            score: 600,
            correct: null,
        },
        18: {
            answer: 'Bruce Banner (Hulk) and Jennifer Walters (She-Hulk)',
            question: 'What arec ousins?',
            score: 1000,
            correct: null,
        },
        19: {
            answer: 'Betty Ross (Red She-Hulk) and General Thaddeus "Thunderbolt" Ross (Red Hulk)',
            question: 'What is daughter/father?',
            score: 800,
            correct: null,
        },

        20: {
            answer: '',
            answerImage: '../assets/media/images/dogs/corgi.png',
            question: 'What is a Corgi?',
            score: 200,
            correct: null,
        },
        21: {
            answer: '',
            answerImage: '../assets/media/images/dogs/german.jpg',
            question: 'What is a German Shepherd?',
            score: 400,
            correct: null,
        },
        22: {
            answer: '',
            answerImage: '../assets/media/images/dogs/doodle.jpg',
            question: 'What is Labradoodle?',
            score: 600,
            correct: null,
        },
        23: {
            answer: '',
            answerImage: '../assets/media/images/dogs/shiba.jpg',
            question: 'What is a Shiba Inu?',
            score: 800,
            correct: null,
        },
        24: {
            answer: '',
            answerImage: '../assets/media/images/dogs/wolfhound.jpg',
            question: 'What is an Irish Wolfhound?',
            score: 1000,
            correct: null,
        },

        25: {
            answer: 'I just met you, and this is crazy',
            question: 'What is Call Me Mabye?',
            score: 200,
            correct: null,
        },
        26: {
            answer: 'So we sailed up to the sun, Till we found the sea of green, And we lived beneath the waves...',
            question: 'What is Yellow Submarine?',
            score: 400,
            correct: null,
        },
        27: {
            answer: 'I went down, down, down as the flames were rising higher',
            question: 'What is Ring of Fire?',
            score: 600,
            correct: null,
        },
        28: {
            answer: 'You float like a feather, In a beautiful world, I wish I was special, You\'re so %!*&$ special',
            question: 'What is Creep?',
            score: 800,
            correct: null,
        },
        29: {
            answer: 'Blue birds fly, And the dreams that you dreamed of, Dreams really do come true ooh oh',
            question: 'What is Somewhere Over the Rainbow?',
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
            answer: '',
            question: '',
            score: 1600,
            correct: null,
        },
        34: {
            answer: 'The villain in Rogue One',
            question: 'Director Krennic',
            score: 2000,
            correct: null,
        },



        35: {
            answer: 'Ryan\'s preferred Mexican restaurant',
            question: 'Zantigo',
            score: 400,
            correct: null,
        },
        36: {
            answer: 'Chris has this many children',
            question: '2',
            score: 800,
            correct: null,
        },
        37: {
            answer: 'This is Kevin\'s dog\'s name.',
            question: 'Panda',
            score: 1200,
            correct: null,
        },
        38: {
            answer: 'Before moving to Minnesota, Noah lived here.',
            question: 'Michigan',
            score: 1600,
            correct: null,
        },
        39: {
            answer: 'Shannon lives in this city.',
            question: 'Hamburg, NY',
            score: 2000,
            correct: null,
        },


        40: {
            answer: 'Ms Plum did it in the Library with the Rope.',
            question: 'Clue',
            score: 400,
            correct: null,
        },
        41: {
            answer: 'This game lets you take over the world, but maybe just Australia.',
            question: 'Risk',
            score: 800,
            correct: null,
        },
        42: {
            answer: 'This forgiving game requires a race around the board for four of your pieces.',
            question: 'Sorry',
            score: 1200,
            correct: null,
        },
        43: {
            answer: 'Race to the longest road, largest army, or most settlements in this game.',
            question: 'Settlers of Catan',
            score: 1600,
            correct: null,
        },
        44: {
            answer: 'Draw one, play one is the only rule at the start of this game.',
            question: 'Fluxx',
            score: 2000,
            correct: null,
        },


        45: {
            answer: 'Every year the president gives a pardon to this bird on death row.',
            question: 'Turkey',
            score: 400,
            correct: null,
        },
        46: {
            answer: '"Black Friday" was coined in the 50s for the day after Thanksgiving because workers would do this.',
            question: 'Call in sick',
            score: 800,
            correct: null,
        },
        47: {
            answer: 'The oldest Thanksgiving Day Parade is held in this brotherly city.',
            question: 'Philadelphia',
            score: 1200,
            correct: null,
        },
        48: {
            answer: 'Pumpkin is native to this continent.',
            question: 'North America',
            score: 1600,
            correct: null,
        },
        49: {
            answer: 'This famous American president determined Thanksgiving would be on the last Thursday of November.',
            question: 'Abraham Lincoln',
            score: 2000,
            correct: null,
        },


        50: {
            answer: 'This small electric appliance was invented in Scotland to precisely burn your bread.',
            question: 'Toaster',
            score: 400,
            correct: null,
        },
        51: {
            answer: 'This is the largest manmade structure in the world, and cannot actually be seen from space.',
            question: 'The Great Wall of China',
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
            answer: 'The capital of the Philippines',
            question: 'Manila',
            score: 1600,
            correct: null,
        },
        54: {
            answer: 'This is the actual shape of Earth.',
            question: 'Oblate Spheroid',
            score: 2000,
            correct: null,
        },


        55: {
            answer: 'Trump was born in this state.',
            question: 'New York',
            score: 400,
            correct: null,
        },
        56: {
            answer: 'Trump has this many children.',
            question: '5',
            score: 800,
            correct: null,
        },
        57: {
            answer: 'This comedian does a "terrible impression", according to the president-elect\'s Twitter handle.',
            question: 'Alec Baldwin',
            score: 1200,
            correct: null,
        },
        58: {
            answer: 'In 2014, Trump purchased the Turnberry hotel and golf resort in this country.',
            question: 'Scotland',
            score: 1600,
            correct: null,
        },
        59: {
            answer: 'This is Trump\'s first wife\'s name.',
            question: 'Ivana Zelníčková',
            score: 2000,
            correct: null,
        },



        60: {
            answer: 'Lee Harvey Oswald was suspected to have fired the shots that killed Kennedy from this buildling.',
            question: 'What is the Texas School Book Depository?',
            score: 2000,
            correct: null,
        },
    },
    categories: [
        {
            label: 'Slogans',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Conference Rooms',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'City Nicknames',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'Superhero Relationships',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'Dog Breeds',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Song Lyrics',
            answerIds: [25, 26, 27, 28, 29],
            round: 0
        },
        {
            label: 'Fast Click or Star Wars Trivia',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'Team Quiz',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'Board Games',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: 'Thanksgiving',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        {
            label: 'Potpourri',
            answerIds: [50, 51, 52, 53, 54],
            round: 1
        },
        {
            label: 'President-Elect',
            answerIds: [55, 56, 57, 58, 59],
            round: 1
        },
        {
            label: 'JFK Trivia',
            answerIds: [60],
            round: 2
        },
    ],
};
