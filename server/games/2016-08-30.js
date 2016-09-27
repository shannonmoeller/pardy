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
            answer: "The force that acts on an aircraft to allow it to fly...",
            question: "Lift",
            score: 100,
            correct: null
        },
        1: {
            answer: "The numbers of a runway represent its...",
            question: "Magnetic Heading",
            score: 200,
            correct: null
        },
        2: {
            answer: "This control surface allows an aircraft to pitch up and down",
            question: "Elevator",
            score: 300,
            correct: null
        },
        3: {
            answer: "The biggest passenger airliner currently in service is the...",
            question: "Airbus A380",
            score: 400,
            correct: null
        },
        4: {
            answer: "IFR stands for",
            question: "Instrument Flight Rules",
            score: 500,
            correct: null
        },

        5: {
            answer: "ABV stands for...",
            question: "Alcohol By Volume",
            score: 100,
            correct: null
        },
        6: {
            answer: "A climbing vine (Humulus lupulus) that produces flowers or \"cones\" which contribute bitterness and aroma in beer.",
            question: "Hops",
            score: 200,
            correct: null
        },
        7: {
            answer: "Anheuser-Busch (Budweiser) is largely owned by...",
            question: "Anheuser-Busch InBev in Belgium",
            score: 300,
            correct: null
        },
        8: {
            answer: "The addition of hops to beer after it has fermented. This is to give the beer a floral or aromatic quality.",
            question: "Dry Hopping",
            score: 400,
            correct: null
        },
        9: {
            answer: "A way of measuring the dissolved solids in a liquid.",
            question: "Original Gravity",
            score: 500,
            correct: null
        },

        10: {
            answer: "D-J-A-N-G-O... The D is silent.",
            question: "Django Unchained",
            score: 100,
            correct: null
        },
        11: {
            answer: "It\'s the one that says bad mother ****er on it!",
            question: "Pulp Fiction",
            score: 200,
            correct: null
        },
        12: {
            answer: "THAT\'S A BINGO!",
            question: "Inglorious Basterds",
            score: 300,
            correct: null
        },
        13: {
            answer: "Revenge is never a straight line. It\'s a forest. And like a forest it\'s easy to lose your way to get lost... to forget where you came in.",
            question: "Kill Bill Vol 1",
            score: 400,
            correct: null
        },
        14: {
            answer: "S**T... You shoot me in a dream, you better wake up and apologize.",
            question: "Reservior Dogs",
            score: 500,
            correct: null
        },

        15: {
            answer: "Estevez, Carlos Irwin",
            question: "Charlie Sheen",
            score: 100,
            correct: null
        },
        16: {
            answer: "Broadus, Calvin",
            question: "Snoop Dogg",
            score: 200,
            correct: null
        },
        17: {
            answer: "Ferguson, Stacy Ann",
            question: "Fergie",
            score: 300,
            correct: null
        },
        18: {
            answer: "Fernier, Vincent",
            question: "Alice Cooper",
            score: 400,
            correct: null
        },
        19: {
            answer: "Deutschendorf, Henry John, Jr",
            question: "John Denver",
            score: 500,
            correct: null
        },

        20: {
            answer: "Arachnophobia",
            question: "The fear of spiders",
            score: 100,
            correct: null
        },
        21: {
            answer: "Claustrophobia",
            question: "The fear of small spaces",
            score: 200,
            correct: null
        },
        22: {
            answer: "Aerophobia",
            question: "The fear of flying",
            score: 300,
            correct: null
        },
        23: {
            answer: "Mysophobia",
            question: "The fear of germs",
            score: 400,
            correct: null
        },
        24: {
            answer: "Hippopotomonstrosesquippedaliophobia",
            question: "The fear of long words",
            score: 500,
            correct: null
        },

        25: {
            answer: "Zach is holding up a certain amount of fingers (both hands) under the table (or howevers). What\'s your guess?",
            question: "(Zach reveals hands to show number of fingers up.)",
            score: 100,
            correct: null
        }
    },
    categories: [
        {
            label: 'Aviation',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Bier Knowledge',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'TarantinoFlix',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'Also Known As',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'Phobias',
            answerIds: [20, 21, 22, 23, 24],
            round: 0
        },
        {
            label: 'How Many Fingers Am I Holding Up',
            answerIds: [25],
            round: 2
        }
    ]
};
