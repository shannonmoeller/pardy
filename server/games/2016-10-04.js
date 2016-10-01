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
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/steelers.png',
            question: 'What is Heinz Field – Pittsburgh, PA?',
            score: 200,
            correct: null,
        },
        1: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/packers.png',
            question: 'What is Lambeau Field – Green Bay, WI?',
            score: 400,
            correct: null,
        },
        2: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/patriots.gif',
            question: 'What is Gillette Stadium – Foxborough, MA?',
            score: 600,
            correct: null,
        },
        3: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/rams.png',
            question: 'What is LA Memorial Coliseum – Los Angeles, CA?',
            score: 800,
            correct: null,
        },
        4: {
            answer: '',
            answerImage: '../assets/media/images/nfl-team-logos/chiefs.png',
            question: 'What is Arrowhead Stadium – Kansas City, MO?',
            score: 1000,
            correct: null,
        },

        5: {
            answer: 'Known as "Ships of the desert."',
            question: 'What are camels?',
            score: 200,
            correct: null,
        },
        6: {
            answer: 'A "Bear" that has a diet of almost exclusively eucalyptus',
            question: 'What is a koala?',
            score: 400,
            correct: null,
        },
        7: {
            answer: 'A flock of these is called "a murder."',
            question: 'What are crows?',
            score: 600,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },
        8: {
            answer: 'This animal can fit through a hole as small as it\'s beak, but cannot fly.',
            question: 'What is an octopus?',
            score: 800,
            correct: null,
        },
        9: {
            answer: 'This animal has the fastest known metabolism.',
            question: 'What is a hummingbird?',
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'GIF',
            question: 'What is Graphic Interchange Format?',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'PHP',
            question: 'What is PHP: Hypertext Preprocessor?',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'AJAX',
            question: 'What is Asynchronous Javascript and XML?',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'SMTP',
            question: 'What is Simple Mail Transfer Protocol?',
            score: 800,
            correct: null,
        },
        14: {
            answer: 'DIV',
            question: 'What is Division?',
            score: 1000,
            correct: null,
        },

        15: {
            answer: 'The name of the dot on the letter "i"',
            question: 'What is a Tittle?',
            score: 200,
            correct: null,
        },
        16: {
            answer: 'The name of the negative space inside the letter "e"',
            question: 'What is a Counter?',
            score: 400,
            correct: null,
        },
        17: {
            answer: 'These type of letters got their name by being placed in the top drawer of a printer\'s desk.',
            question: 'What is Upper-Case?',
            score: 600,
            correct: null,
        },
        18: {
            answer: 'Adjusting spacing between two letters.',
            question: 'What is Kerning?',
            score: 800,
            correct: null,
        },
        19: {
            answer: 'The negative space in the upper-case letter "D"',
            question: 'What is a bowl?',
            score: 1000,
            correct: null,
        },

        20: {
            answer: 'The capital of Iowa',
            question: 'What is Des Moines?',
            score: 200,
            correct: null,
        },
        21: {
            answer: 'The capital of Georgia',
            question: 'What is Atlanta?',
            score: 400,
            correct: null,
        },
        22: {
            answer: 'The capital of Rhode Island',
            question: 'What is Providence?',
            score: 600,
            correct: null,
        },
        23: {
            answer: 'The capital of Utah',
            question: 'What is Salt Lake City?',
            score: 800,
            correct: null,
        },
        24: {
            answer: 'The capital of Montana',
            question: 'What is Helena?',
            score: 1000,
            correct: null,
        },

        25: {
            answer: 'Made with juniper or blackthorn berries',
            question: 'What is gin?',
            score: 200,
            correct: null,
        },
        26: {
            answer: 'V.S.O.P.',
            question: 'What is Very Special Old Pale?',
            score: 400,
            correct: null,
        },
        27: {
            answer: 'Japanese Rice Wine',
            question: 'What is Sake?',
            score: 600,
            correct: null,
        },
        28: {
            answer: 'Bacardi is made on this island.',
            question: 'What is Puerto Rico?',
            score: 800,
            correct: null,
        },
        29: {
            answer: 'Tequila, triple sec, and lime juice',
            question: 'What is a margarita?',
            score: 1000,
            correct: null,
        },

        30: {
            answer: 'Summa Cum Laude',
            question: 'What is "With Highest Honors?"',
            score: 400,
            correct: null,
        },

        31: {
            answer: 'Eureka',
            question: 'What is "I have found it?"',
            score: 800,
            correct: null,
        },

        32: {
            answer: 'E Plurbis Unum',
            question: 'What is "Out of many, one?"',
            score: 1200,
            correct: null,
        },

        33: {
            answer: 'Ad Infinitum',
            question: 'What is "To Infinity?"',
            score: 1600,
            correct: null,
        },

        34: {
            answer: 'Justitia Omnimbus',
            question: 'What is "Justice for all?"',
            score: 2000,
            correct: null,
        },

        35: {
            answer: 'First woman American Idol Winner',
            question: 'Who is Kelly Clarkson?',
            score: 400,
            correct: null,
        },

        36: {
            answer: 'First woman to win pole position in the Daytona 500',
            question: 'Who is Danica Patrick?',
            score: 800,
            correct: null,
        },

        37: {
            answer: 'First woman in America to be depicted on a coin',
            question: 'Who is Susan B Anthony?',
            score: 1200,
            correct: null,
        },

        38: {
            answer: 'First woman Speaker of the House',
            question: 'Who is Nancy Pelosi?',
            score: 1600,
            correct: null,
        },

        39: {
            answer: 'First woman winner of TWO Nobel Prizes',
            question: 'Who is Marie Curie?',
            score: 2000,
            correct: null,
        },

        40: {
            answer: 'School that Frenchy dropped out of in "Grease"',
            question: 'What is Rydell High?',
            score: 400,
            correct: null,
        },

        41: {
            answer: 'Based on the songs of ABBA',
            question: 'What is "Mamma Mia"?',
            score: 800,
            correct: null,
        },

        42: {
            answer: 'The most famous song from "Wicked!"',
            question: 'What is "Defying Gravity"?',
            score: 1200,
            correct: null,
        },

        43: {
            answer: 'Based on "La boheme", set in Manhattan\'s East Village',
            question: 'What is "RENT"?',
            score: 1600,
            correct: null,
        },

        44: {
            answer: 'Composer of "Phantom of the Opera" and "Jesus Christ Superstar"',
            question: 'Who is Andrew Lloyd Weber?',
            score: 2000,
            correct: null,
        },

        45: {
            answer: 'Romantic Comedy in which Tom Hanks and Meg Ryan inadvertantly fall in love while using an email marketing service.',
            question: 'What is "You\'ve got mailChimp"?',
            score: 400,
            correct: null,
        },

        46: {
            answer: 'Big Blue Ticket Electronic\'s Store, and what you do on Wheel of Fortune.',
            question: 'What is "Best Buy a vowel"?',
            score: 800,
            correct: null,
        },

        47: {
            answer: 'A team event of individual sports, made into a baseball movie starring Kevin Costner.',
            question: 'What is "Track and Field of Dreams"?',
            score: 1200,
            correct: null,
        },

        48: {
            answer: 'An online auction site that stormed the beaches of Cuba in 1961.',
            question: 'What is "E-bay of Pigs"?',
            score: 1600,
            correct: null,
        },

        49: {
            answer: 'An idiom for when things go wrong involving a fan, because you can\'t pay your student loans.',
            question: 'What is "When the shit hits the Fannie Mae"?',
            score: 2000,
            correct: null,
        },

        50: {
            answer: 'Bettina Nicholson',
            question: 'What is Development?',
            score: 400,
            correct: null,
        },

        51: {
            answer: 'Brad Amundson',
            question: 'What is Project Management?',
            score: 800,
            correct: null,
        },

        52: {
            answer: 'Perry Goy',
            question: 'What is QA?',
            score: 1200,
            correct: null,
        },

        53: {
            answer: 'Troy Cleland',
            question: 'What is IT/SYS?',
            score: 1600,
            correct: null,
        },

        54: {
            answer: 'Kristi Gloppen',
            question: 'What is Marketing?',
            score: 2000,
            correct: null,
        },

        55: {
            answer: 'This ball sport features a playing surface 9 by 5 feet raised 2.5 feet off the ground.',
            question: 'What is Ping Pong or Table Tennis?',
            score: 400,
            correct: null,
        },

        56: {
            answer: 'Featuring a bat and ball, this sport requires 2 teams of 11.',
            question: 'What is cricket?',
            score: 800,
            correct: null,
        },

        57: {
            answer: 'Most recent winner of the Triple Crown',
            question: 'Who is American Pharoah?',
            score: 1200,
            correct: null,
        },

        58: {
            answer: 'In cricket, the name of the wooden "statue" the batter protects.',
            question: 'What is a wicket?',
            score: 1600,
            correct: null,
        },

        59: {
            answer: 'In this sport, contestants roll down a hill in a clear cushioned sphere.',
            question: 'What is Zorbing?',
            score: 2000,
            correct: null,
        },

        60: {
            answer: 'At the beginning of Wayne\'s World, Wayne shows us around his house and points out that he has an extensive collection of these.',
            question: 'What are Name Tags and Hair Nets?',
            score: 2000,
            correct: null,
        },

    },
    categories: [
        {
            label: 'NFL Stadiums',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Animals',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'ABBR',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'Typography',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'State Capitals',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Potent Potables',
            answerIds: [25, 26, 27, 28, 29],
            round: 0
        },
        {
            label: 'Latin',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'FIRST! Women',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'Musical Theatre',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: 'Before & After',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        {
            label: 'Name My Job',
            answerIds: [50, 51, 52, 53, 54],
            round: 1
        },
        {
            label: 'Oddball Sports',
            answerIds: [55, 56, 57, 58, 59],
            round: 1
        },
        {
            label: 'Wayne\'s World',
            answerIds: [60],
            round: 2
        },
    ],
};
