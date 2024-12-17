const questions = [
    { 
        question: "Who is Candide's mentor?", 
        options: ["Voltaire", "Pangloss", "Martin", "Jacques"], 
        answer: "Pangloss" 
    },
    { 
        question: "Where does Candide find Eldorado?", 
        options: ["Germany", "Portugal", "South America", "France"], 
        answer: "South America" 
    },
    { 
        question: "Who is Candide in love with?", 
        options: ["Cunegonde", "Paquette", "The Old Woman", "Lisette"], 
        answer: "Cunegonde" 
    },
    { 
        question: "What lesson does Candide learn at the end of the book?", 
        options: [
            "Suffering is unavoidable",
            "We must cultivate our garden", 
            "Optimism solves everything",
            "Money brings happiness"
        ], 
        answer: "We must cultivate our garden" 
    }
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedbackContainer = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");

function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    feedbackContainer.textContent = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQuestion.answer);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "Correct! 🎉";
        feedbackContainer.style.color = "green";
    } else {
        feedbackContainer.textContent = "Wrong! Game Over 😢";
        feedbackContainer.style.color = "red";
        optionsContainer.innerHTML = ""; // Disable buttons
        return;
    }
    nextButton.style.display = "block";
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        questionText.textContent = "Congratulations! You are now a true philosopher! 🎓";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }
}

loadQuestion(currentQuestionIndex);
