const wrapper = document.getElementById("wrapper");
const scoreText = document.getElementById("score");
const newQuestionButton = document.getElementById("newQuestion");

let correctCount = 0;
let totalAnswered = 0;

const questions = [
    {
        question: "What planet is known as the Red Planet?",
        correct_answer: "Mars",
        incorrect_answers: ["Venus", "Jupiter", "Saturn"]
    },
    {
        question: "How many sides does a hexagon have?",
        correct_answer: "6",
        incorrect_answers: ["5", "7", "8"]
    },
    {
        question: "What is the capital of Japan?",
        correct_answer: "Tokyo",
        incorrect_answers: ["Osaka", "Kyoto", "Seoul"]
    },
    {
        question: "Which ocean is the largest?",
        correct_answer: "Pacific",
        incorrect_answers: ["Atlantic", "Indian", "Arctic"]
    },
    {
        question: "What gas do plants absorb from the air?",
        correct_answer: "Carbon dioxide",
        incorrect_answers: ["Oxygen", "Nitrogen", "Helium"]
    },
    {
        question: "How many players are on a soccer team on the field?",
        correct_answer: "11",
        incorrect_answers: ["9", "10", "12"]
    },
    {
        question: "What is the hardest natural substance?",
        correct_answer: "Diamond",
        incorrect_answers: ["Gold", "Iron", "Quartz"]
    },
    {
        question: "Which instrument has 88 keys?",
        correct_answer: "Piano",
        incorrect_answers: ["Guitar", "Violin", "Flute"]
    }
];

function getRandomQuestion() {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
}

function renderQuestion(question) {
    wrapper.innerHTML = "";

    const questionText = document.createElement("h2");
    questionText.innerHTML = question.question;
    wrapper.appendChild(questionText);

    const answers = [];
    question.incorrect_answers.forEach((answer) => {
        answers.push(answer);
    });
    answers.push(question.correct_answer);

    const result = document.createElement("p");
    const answerButtons = [];

    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        answerButtons.push(button);

        button.addEventListener("click", () => {
            if (answer === question.correct_answer) {
                result.innerHTML = "Correct!";
                correctCount = correctCount + 1;
            } else {
                result.innerHTML = question.correct_answer;
            }

            answerButtons.forEach((btn) => {
                btn.disabled = true;
            });

            totalAnswered = totalAnswered + 1;
            updateScore();
        });

        wrapper.appendChild(button);
    });

    wrapper.appendChild(result);
}

function updateScore() {
    scoreText.innerHTML = "Score: " + correctCount + " correct out of " + totalAnswered;
}

newQuestionButton.addEventListener("click", () => {
    renderQuestion(getRandomQuestion());
});
