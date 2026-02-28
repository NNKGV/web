const quizData = [
    {
        question: "Thủ đô Việt Nam là gì?",
        answers: ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"],
        correct: 1
    },
    {
        question: "2 + 2 = ?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("div");
        btn.classList.add("answer-btn");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").textContent =
        `Bạn được ${score}/${quizData.length} điểm`;

    localStorage.setItem("lastScore", score);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    loadQuestion();
}

loadQuestion();
