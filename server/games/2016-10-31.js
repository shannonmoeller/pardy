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
            answer: 'Spiderman',
            question: 'Who is Peter Parker?',
            score: 200,
            correct: null,
        },
        1: {
            answer: 'Superman',
            question: 'Who is Klark Kent?',
            score: 400,
            correct: null,
        },
        2: {
            answer: 'The Riddler',
            question: 'Who is Edward Nigma?',
            score: 600,
            correct: null,
        },
        3: {
            answer: 'Black Widow',
            question: 'Who is Natasha Romanova?',
            score: 800,
            correct: null,
        },
        4: {
            answer: 'Magneto',
            question: 'Who is Max Eisenhardt?',
            score: 1000,
            correct: null,
        },

        5: {
            answer: 'Frankenstein\'s Monster',
            question: 'Who is Mary Shelley?',
            score: 200,
            correct: null,
        },
        6: {
            answer: 'Mr. Hyde',
            question: 'Who is Robert Louis Stevenson?',
            score: 400,
            correct: null,
        },
        7: {
            answer: 'The Headless Horseman',
            question: 'Who is Washington Irving?',
            score: 600,
            correct: null,
        },
        8: {
            answer: 'Pennywise',
            question: 'Who is Stephen King?',
            score: 800,
            correct: null,
        },
        9: {
            answer: 'Dracula',
            question: 'Who is Bram Stoker?',
            score: 1000,
            correct: null,
        },

        10: {
            answer: 'This attribute is required for <img /> tags, even if it\'s value is empty.',
            question: 'What is the "alt" attribute?',
            score: 200,
            correct: null,
        },
        11: {
            answer: 'The <li> tag is the only vaild child of what two elements?',
            question: 'What are <ul> and <ol>?',
            score: 400,
            correct: null,
        },
        12: {
            answer: 'This child of <figure> is only valid when it\'s the first or last element.',
            question: 'What is <figcaption>?',
            score: 600,
            correct: null,
        },
        13: {
            answer: 'This is the shortest valid HTML 5 file.',
            question: '<!doctype html><title>a</title>',
            score: 800,
            correct: null,
            isDouble: true,
            isBetLockedIn: false
        },
        14: {
            answer: 'Placing this tag somewhere after the first 256 bytes can break sites for foreign users.',
            question: 'What is <meta charset="uft-8" />?',
            score: 1000,
            correct: null,
        },

        15: {
            answer: 'Jack-o-lanterns were first carved in this country.',
            question: 'What is Ireland?',
            score: 200,
            correct: null,
        },
        16: {
            answer: 'This equestrian has been depicted carrying a Jack-o-lantern in place of a missing portion of his body.',
            question: 'Who is The Headless Horseman?',
            score: 400,
            correct: null,
        },
        17: {
            answer: 'Jack-o-lanterns were originally created by carving a lantern from this tuber.',
            question: 'What is a turnip?',
            score: 600,
            correct: null,
        },
        18: {
            answer: 'This creative game allows you to grow pumpkins and wear one as a mask, turning yourself into a Jack-o-lantern.',
            question: 'What is Minecraft?',
            score: 800,
            correct: null,
        },
        19: {
            answer: 'Also known as this, Jack-o-lanterns are named after the phenomenon of a strange light flickering over peat bogs.',
            question: 'What is will-o-the-wisp?',
            score: 1000,
            correct: null,
        },

        20: {
            answer: 'Microsoft released IE6 in this year when IE 5.x had 80% marketshare.',
            question: 'What is 2001?',
            score: 200,
            correct: null,
        },
        21: {
            answer: 'IE6 introduced this mode to maximize compatibility with old or poorly-coded web pages.',
            question: 'What is quirks mode?',
            score: 400,
            correct: null,
        },
        22: {
            answer: 'Market share for this version of IE finally dropped below 1% in 2004.',
            question: 'What is IE4?',
            score: 600,
            correct: null,
        },
        23: {
            answer: 'The "star hack" allowed you to specify a CSS property targeting this version of IE and below.',
            question: 'What is IE7?',
            score: 800,
            correct: null,
        },
        24: {
            answer: 'Official support for IE 11 will expire along with Windows 10 in this year.',
            question: 'What is 2025?',
            score: 1000,
            correct: null,
        },

        25: {
            answer: 'Humans have been chewing this candy in some form for at least 100,000 years.',
            question: 'What is gum?',
            score: 200,
            correct: null,
        },
        26: {
            answer: 'This three-colored confection is also popular during Thanksgiving and tastes nothing like its namesake.',
            question: 'What is candy corn?',
            score: 400,
            correct: null,
        },
        27: {
            answer: 'People trick-or-treat in hoity-toity neighborhoods hoping to score full-sized versions of these.',
            question: 'What are candy bars?',
            score: 600,
            correct: null,
        },
        28: {
            answer: 'Still in mass production today, these were the first wrapped penny candy in America.',
            question: 'What are Toosie Rolls?',
            score: 800,
            correct: null,
        },
        29: {
            answer: 'The best way to loose Facebook friends is to invite them to play this match-three puzzle game.',
            question: 'What is Candy Crush Saga?',
            score: 1000,
            correct: null,
        },

        30: {
            answer: 'Bruce Banner',
            question: 'Who is The Hulk?',
            score: 400,
            correct: null,
        },
        31: {
            answer: 'Bruce Wane',
            question: 'Who is Batman?',
            score: 800,
            correct: null,
        },
        32: {
            answer: 'Harvey Dent',
            question: 'Who is Two Face?',
            score: 1200,
            correct: null,
        },
        33: {
            answer: 'Hank Pym',
            question: 'Who is Ant-Man?',
            score: 1600,
            correct: null,
        },
        34: {
            answer: 'Carol Danvers',
            question: 'Who is Captain Marvel?',
            score: 2000,
            correct: null,
        },

        35: {
            answer: 'Phobophobia',
            question: 'What is the fear of phobias?',
            score: 400,
            correct: null,
        },
        36: {
            answer: 'Triskaidekaphobia',
            question: 'What is the fear of the number 13?',
            score: 800,
            correct: null,
        },
        37: {
            answer: 'Barophobia',
            question: 'What is the fear of gravity?',
            score: 1200,
            correct: null,
        },
        38: {
            answer: 'Lygophobia',
            question: 'What is the fear of darkness?',
            score: 1600,
            correct: null,
        },
        39: {
            answer: 'Samhainopobia',
            question: 'What is the fear of Halloween?',
            score: 2000,
            correct: null,
        },

        40: {
            answer: 'The initial "display" value of a <div> element.',
            question: 'What is "block"?',
            score: 400,
            correct: null,
        },
        41: {
            answer: 'The initial "background-repeat" value.',
            question: 'What is "repeat"?',
            score: 800,
            correct: null,
        },
        42: {
            answer: 'The initial "animation-timing-function" value.',
            question: 'What is "ease"?',
            score: 1200,
            correct: null,
        },
        43: {
            answer: 'The initial "perspective-origin" value.',
            question: 'What is "50% 50%"?',
            score: 1600,
            correct: null,
        },
        44: {
            answer: 'The initial "left" value.',
            question: 'What is "auto"?',
            score: 2000,
            correct: null,
        },

        45: {
            answer: 'Na na na na na na na na na na na na na na na na...',
            question: 'What is Batman?',
            score: 400,
            correct: null,
        },
        46: {
            answer: 'They\'re creepy and they\'re kooky.',
            question: 'Who is the Addams Family?',
            score: 800,
            correct: null,
        },
        47: {
            answer: 'In this series, Samantha attempts to live life as a housewife without the use of her powers.',
            question: 'What is Bewitched?',
            score: 1200,
            correct: null,
        },
        48: {
            answer: 'Frankenstein played the father figure in this series.',
            question: 'What is The Munsters?',
            score: 1600,
            correct: null,
        },
        49: {
            answer: 'You are now entering...',
            question: 'What is The Twilight Zone?',
            score: 2000,
            correct: null,
        },

        50: {
            answer: '',
            question: '',
            score: 400,
            correct: null,
        },
        51: {
            answer: '',
            question: '',
            score: 800,
            correct: null,
        },
        52: {
            answer: '',
            question: '',
            score: 1200,
            correct: null,
        },
        53: {
            answer: '',
            question: '',
            score: 1600,
            correct: null,
        },
        54: {
            answer: '',
            question: '',
            score: 2000,
            correct: null,
        },

        55: {
            answer: 'This previously-useless reserved word is now a simpler way to implement inheritance.',
            question: 'What is "class"?',
            score: 400,
            correct: null,
        },
        56: {
            answer: 'These marks are used to indicate a new type of string literal that allows interpolation.',
            question: 'What are backticks?',
            score: 800,
            correct: null,
        },
        57: {
            answer: 'This new function syntax binds the value of `this` automatically.',
            question: 'What is fat-arrow syntax?',
            score: 1200,
            correct: null,
        },
        58: {
            answer: 'Microsoft was the first browser vendor to ship support for this keyword used to include one script from another.',
            question: 'What is "import"?',
            score: 1600,
            correct: null,
        },
        59: {
            answer: 'You may now destructure an array using these marks on the left hand of an assignment.',
            question: 'What are square brackets?',
            score: 2000,
            correct: null,
        },

        60: {
            answer: 'Dracula is based on this real-life 15th-century ruler of Wallachia.',
            question: 'Who is Vlad the Impaler?',
            score: 2000,
            correct: null,
        },
    },
    categories: [
        {
            label: 'Secret Identity',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Monstrous Authors',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'H-T-M-Hell',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'Jack-o-lanterns',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'IE',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'Candy',
            answerIds: [25, 26, 27, 28, 29],
            round: 0
        },
        {
            label: 'Alter Ego',
            answerIds: [30, 31, 32, 33, 34],
            round: 1
        },
        {
            label: 'Phobias',
            answerIds: [35, 36, 37, 38, 39],
            round: 1
        },
        {
            label: 'Initial CSS',
            answerIds: [40, 41, 42, 43, 44],
            round: 1
        },
        {
            label: '60\'s TV',
            answerIds: [45, 46, 47, 48, 49],
            round: 1
        },
        {
            label: 'Fast Click',
            answerIds: [50, 51, 52, 53, 54],
            round: 1
        },
        {
            label: 'JavaSugar',
            answerIds: [55, 56, 57, 58, 59],
            round: 1
        },
        {
            label: 'Vampire Lore',
            answerIds: [60],
            round: 2
        },
    ],
};
