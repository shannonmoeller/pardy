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
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round1/Michael-Hills.png',
            question: 'Who is Michael Hills?',
            score: 200,
            correct: null,
        },
        1: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round1/Tom-OConnor.png',
            question: 'Who is Tom O\'Connor?',
            score: 400,
            correct: null,
        },
        2: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round1/Patrick-Jannette.png',
            question: 'Who is Patrick Jannette?',
            score: 600,
            correct: null,
        },
        3: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round1/Gillian-Reynolds.png',
            question: 'Who is Gillian Reynolds?',
            score: 800,
            correct: null,
        },
        4: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round1/Fred-Beecher.png',
            question: 'Who is Fred Beecher?',
            score: 1000,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },

        5: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/minnesota-vikings.jpg',
            question: 'Who are the Minnesota Vikings?',
            score: 200,
            correct: null,
        },
        6: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/chicago-bears.jpg',
            question: 'Who are the Chicago Bears?',
            score: 400,
            correct: null,
        },
        7: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/jacksonville-jaguars.jpg',
            question: 'Who are the Jacksonville Jaguars?',
            score: 600,
            correct: null,
        },
        8: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/carolina-panthers.png',
            question: 'Who are the Carolina Panthers?',
            score: 800,
            correct: null,
        },
        9: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/cincinnati-bengals.jpg',
            question: 'Who are the Cincinnati Bengals',
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'MVC',
            question: 'What is Model View Controller?',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'SQL',
            question: 'What is Structured Query Language?',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'KISS',
            question: 'What is Keep It Simple Stupid?',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'IxD',
            question: 'What is Interaction Design?',
            score: 800,
            correct: null,
        },
        14: {
            answer: 'SasS',
            question: 'What is Software as a Service?',
            score: 1000,
            correct: null,
        },

        15: {
            answer: '',
            answerImage: '../assets/media/images/art-or-artist/Mona-Lisa.jpg',
            question: 'What is The Mona Lisa by Leonardo da Vinci?',
            score: 200,
            correct: null,
        },
        16: {
            answer: '',
            answerImage: '../assets/media/images/art-or-artist/Starry-Night.jpg',
            question: 'What Starry Night by Vincent van Gogh?',
            score: 400,
            correct: null,
        },
        17: {
            answer: '',
            answerImage: '../assets/media/images/art-or-artist/Rage-Bansky.jpg',
            question: 'What is Rage (the Flower Thrower) by Bansky?',
            score: 600,
            correct: null,
        },
        18: {
            answer: '',
            answerImage: '../assets/media/images/art-or-artist/Girl-with-a-Pearl-Earring.jpg',
            question: 'What is Girl With a Pearl Earring by Johannes Vermeer?',
            score: 800,
            correct: null,
        },
        19: {
            answer: '',
            answerImage: '../assets/media/images/art-or-artist/Autumn-Rythym-Jackson-Pollock.jpg',
            question: 'What is Autumn Rhythm (Number 30) by Jackson Pollack?',
            score: 1000,
            correct: null,
        },

        20: {
            answer: '',
            answerImage: '../assets/media/images/logos/nike.jpg',
            question: 'What is Nike?',
            score: 200,
            correct: null,
        },
        21: {
            answer: '',
            answerImage: '../assets/media/images/logos/opera.png',
            question: 'What is Opera?',
            score: 400,
            correct: null,
        },
        22: {
            answer: '',
            answerImage: '../assets/media/images/logos/web-storm.png',
            question: 'What is WebStorm?',
            score: 600,
            correct: null,
        },
        23: {
            answer: '',
            answerImage: '../assets/media/images/logos/ubuntu.png',
            question: 'What is Ubuntu?',
            score: 800,
            correct: null,
        },
        24: {
            answer: '',
            answerImage: '../assets/media/images/logos/sketch.png',
            question: 'What is Sketch?',
            score: 1000,
            correct: null,
        },

        25: {
            answer: '"I\'ll be back."',
            question: 'What is The Terminator?',
            score: 200,
            correct: null,
        },
        26: {
            answer: '"There\'s no place like home."',
            question: 'What is The Wizard of Oz?',
            score: 400,
            correct: null,
        },
        27: {
            answer: '"I love the smell of napalm in the morning."',
            question: 'What is Apocalypse Now?',
            score: 600,
            correct: null,
        },
        28: {
            answer: '"I’m here to kick ass and chew bubblegum and I’m all out of bubblegum."',
            question: 'What is They Live?',
            score: 800,
            correct: null,
        },
        29: {
            answer: '"Gentlemen, you can\'t fight in here! This is the war room!"',
            question: 'What is Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb?',
            score: 1000,
            correct: null,
        },

        30: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round2/Jane-Runyon.png',
            question: 'Who is Jane Runyon?',
            score: 400,
            correct: null,
        },

        31: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round2/Sherman-Bausch.png',
            question: 'Who is Sherman Bausch?',
            score: 800,
            correct: null,
        },

        32: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round2/Kai-Esbensen.png',
            question: 'Who is Kai Esbensen?',
            score: 1200,
            correct: null,
        },

        33: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round2/Corey-Stern.png',
            question: 'Who is Corey Stern?',
            score: 1600,
            correct: null,
        },

        34: {
            answer: '',
            answerImage: '../assets/media/images/name-that-nerd/round2/Ryan-Bailey.png',
            question: 'Who is Ryan Bailey?',
            score: 2000,
            correct: null,
        },

        35: {
            answer: 'Mario first appeared in this video game.',
            question: 'What is Donkey Kong?',
            score: 400,
            correct: null,
        },

        36: {
            answer: 'Luigi first appeared in this video game.',
            question: 'What is Super Mario Bros.?',
            score: 800,
            correct: null,
        },

        37: {
            answer: 'Mario’s original name in Japan.',
            question: 'Who is Jumpman?',
            score: 1200,
            correct: null,
        },

        38: {
            answer: 'Released in 1993, the genuine Super Mario Bros. 2 was finally released in the US on this game.',
            question: 'What is the Super Mario All-Stars Collection?',
            score: 1600,
            correct: null,
        },

        39: {
            answer: 'Also released in 1993, the Super Mario Bros movie starred these two well known actors.',
            question: 'Who are Dennis Hopper and Bob Hoskins?',
            score: 2000,
            correct: null,
        },

        40: {
            answer: 'Declared a saint on September 5th, 2016.',
            question: 'Who is Mother Teresa?',
            score: 400,
            correct: null,
        },

        41: {
            answer: 'She studied chimpanzees.',
            question: 'Who is Jane Goodall?',
            score: 800,
            correct: null,
        },

        42: {
            answer: 'The Queen of Soul.',
            question: 'Who is Aretha Franklin?',
            score: 1200,
            correct: null,
        },

        43: {
            answer: 'Known as the Southwestern Painter of Flowers and Skyscapes.',
            question: 'Who is Georgia O’Keefe?',
            score: 1600,
            correct: null,
        },

        44: {
            answer: 'The poet who spoke at Bill Clinton\'s presidental innaugration.',
            question: 'Who is Maya Angelou?',
            score: 2000,
            correct: null,
        },

        45: {
            answer: '"These go to eleven."',
            question: 'What is This Is Spinal Tap?',
            score: 400,
            correct: null,
        },

        46: {
            answer: '"You can\'t handle the truth!"',
            question: 'What is A Few Good Men?',
            score: 800,
            correct: null,
        },

        47: {
            answer: '"I drink your milkshake!"',
            question: 'What is There Will Be Blood?',
            score: 1200,
            correct: null,
        },

        48: {
            answer: 'You talkin\' to me?',
            question: 'What is Taxi Driver?',
            score: 1600,
            correct: null,
        },

        49: {
            answer: '"You\'re gonna need a bigger boat."',
            question: 'What is Jaws?',
            score: 2000,
            correct: null,
        },

        50: {
            answer: 'This 1984 game allows you to aim at the TV with a plastic gun.',
            question: 'What is Duck Hunt?',
            score: 400,
            correct: null,
        },

        51: {
            answer: 'The company that created Sonic\'s sidekick Tails.',
            question: 'Who is Sega?',
            score: 800,
            correct: null,
        },

        52: {
            answer: 'Master Chief\'s AI sidekick.',
            question: 'Who is Cortana?',
            score: 1200,
            correct: null,
        },

        53: {
            answer: 'Holds the record for the highest number of video game console sales of all time.',
            question: 'What is the PlayStation 2?',
            score: 1600,
            correct: null,
        },

        54: {
            answer: 'Markus Alexej Persson (aka _____) is famous for having created Minecraft.',
            question: 'Who is Notch?',
            score: 2000,
            correct: null,
        },

        55: {
            answer: 'Captain Picard was born in this country.',
            question: 'What is France?',
            score: 400,
            correct: null,
        },

        56: {
            answer: 'The collection of sacred business proverbs of this ultra-capitalist race.',
            question: 'Who are the Ferengi?',
            score: 800,
            correct: null,
        },

        57: {
            answer: 'The small crawlspace maintence shafts on the Enterprise.',
            question: 'What are Jefferies Tubes?',
            score: 1200,
            correct: null,
        },

        58: {
            answer: 'The name of Data\'s creator.',
            question: 'Who is Dr. Noonian Soong?',
            score: 1600,
            correct: null,
        },

        59: {
            answer: 'There are ____ lights.',
            question: 'What is four?',
            score: 2000,
            correct: null,
        },

        60: {
            answer: 'David Tennant starred in this BBC series.',
            question: 'What is Doctor Who?',
            score: 2000,
            correct: null,
        },

    },
    categories: [
        {
            label: 'Name that Nerd',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Name that NFL Team',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'Abbreviations & Acronyms',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'Art or Artist',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'Logos',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Movie Quotes',
            answerIds: [25, 26, 27, 28, 29],
            round: 0
        },
        {
            label: 'Name Moar Nerds',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'Super Mario Bros.',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'Famous Women',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: 'More Movie Quotes',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        {
            label: 'Video Games',
            answerIds: [50, 51, 52, 53, 54],
            round: 1
        },
        {
            label: 'Star Trek TNG',
            answerIds: [55, 56, 57, 58, 59],
            round: 1
        },
        {
            label: 'BBC Series',
            answerIds: [60],
            round: 2
        },
    ],
};
