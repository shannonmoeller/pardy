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
            answer: "A yellow guy eats dots",
            question: "Pac-Man",
            score: 100,
            correct: null
        },
        1: {
            answer: "Motor vehicles and alligators are your enemies",
            question: "Frogger",
            score: 200,
            correct: null
        },
        2: {
            answer: "Kill your enemies by pumping them up",
            question: "Dig Dug",
            score: 300,
            correct: null
        },
        3: {
            answer: "Rescue captured ship for duel ships",
            question: "Galaga",
            score: 400,
            correct: null
        },
        4: {
            answer: "Your mission is to stop the ________s and save the last human family",
            question: "Robotron",
            score: 500,
            correct: null
        },

        5: {
            answer: "Co-pilot from Kashyyyk",
            question: "Chewbacca",
            score: 100,
            correct: null
        },
        6: {
            answer: "Half-human science officer for the NCC-1701",
            question: "Spock",
            score: 200,
            correct: null
        },
        7: {
            answer: "Pilot of the Planet Express Ship",
            question: "Turanga Leela",
            score: 300,
            correct: null
        },
        8: {
            answer: "Mechanic for a ship named after an insect",
            question: "Kaylee",
            score: 400,
            correct: null
        },
        9: {
            answer: "Honesty parameter at ninety-five percent",
            question: "TARS",
            score: 500,
            correct: null
        },

        10: {
            answer: "Electric mouse",
            question: "Pikachu",
            score: 100,
            correct: null
        },
        11: {
            answer: "Only mostly racist",
            question: "Jynx",
            score: 200,
            correct: null
        },
        12: {
            answer: "low poly count",
            question: "Porygon",
            score: 300,
            correct: null
        },
        13: {
            answer: "Waterfowl with a headache",
            question: "Psyduck",
            score: 400,
            correct: null
        },
        14: {
            answer: "This Mongol lives in Australia",
            question: "kangaskhan",
            score: 500,
            correct: null
        },

        15: {
            answer: "9.58 seconds",
            question: "100 meter dash",
            score: 100,
            correct: null
        },
        16: {
            answer: "20.2 feet high",
            question: "Pole vault",
            score: 200,
            correct: null
        },
        17: {
            answer: "2:02:57",
            question: "Marathon",
            score: 300,
            correct: null
        },
        18: {
            answer: "104.80 meters",
            question: "Javelin throw",
            score: 400,
            correct: null
        },
        19: {
            answer: "Wayde Van Niekerk",
            question: "400 meter dash",
            score: 500,
            correct: null
        },

        20: {
            answer: "This supposedly omnipotent character makes appearances in the first and last episodes of Next Gen",
            question: "Q",
            score: 100,
            correct: null
        }
    },
    categories: [
        {
            label: 'Retro Arcade',
            answerIds: [0, 1, 2, 3, 4],
            round: 0
        },
        {
            label: 'Crew Members',
            answerIds: [5, 6, 7, 8, 9],
            round: 0
        },
        {
            label: 'Pokemon',
            answerIds: [10, 11, 12, 13, 14],
            round: 0
        },
        {
            label: 'World Record Events',
            answerIds: [15, 16, 17, 18, 19],
            round: 0
        },
        {
            label: 'Star Trek',
            answerIds: [20],
            round: 2
        }
    ]
};