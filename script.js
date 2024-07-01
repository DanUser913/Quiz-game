const questions = [
    {
      question: "Qual a capital do Brasil?",
      answers: ["São Paulo", "Rio de Janeiro", "Brasília"],
      correctAnswer: 2,
    },
    {
      question: "Quem descobriu o Brasil?",
      answers: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães"],
      correctAnswer: 0,
    },
    {
      question: "Quem é o cantor da música metamorfose ambulante?",
      answers: ["Cazuza", "Raul seixas", "Renato russo"],
      correctAnswer: 1,
    },
    {
      question: "Quantos anos tem o Brasil?",
      answers: ["100 anos", "500 anos", "200 anos"],
      correctAnswer: 1,
    },
    {
      question: "Atual presidente do Brasil?",
      answers: ["Jair Bolsonaro", "Luiz Inácio Lula da Silva", "Dilma Rousseff"],
      correctAnswer: 1,
    },
    {
      question: "Qual a raiz quadrada de 300?",
      answers: ["10", "17", "20"],
      correctAnswer: 1,
    },
    {
      question: "Quanto é 60+80-30?",
      answers: ["110", "100", "120"],
      correctAnswer: 0,
    },
  ];



let currentQuestion = 0;
let score = 0;
let errors = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const errorsElement = document.getElementById("errors");
const resultMessageElement = document.getElementById("result-message");

function loadQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  answersElement.innerHTML = "";

  questions[currentQuestion].answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("answer");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
    feedbackElement.textContent = "Correto!";
    feedbackElement.style.color = "#27ae60";
  } else {
    errors++;
    feedbackElement.textContent = "Errou! Resposta correta: " + questions[currentQuestion].answers[questions[currentQuestion].correctAnswer];
    feedbackElement.style.color = "#e74c3c";
  }

  updateScore();

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz concluído!";
    answersElement.innerHTML = "";
    moreButton.style.display = "block";
    showResultMessage();
  }
}

function updateScore() {
  scoreElement.textContent = score;
  errorsElement.textContent = errors;
}

function showResultMessage() {
  resultMessageElement.style.display = "block";
  if (score > errors) {
    resultMessageElement.textContent = "Parabéns! Você acertou várias perguntas 🔥 👏 😊";
  } else if (score < errors) {
    resultMessageElement.textContent = "Você está errando muito. Erros: " + errors;
  } else {
    resultMessageElement.textContent = "Acertos e erros iguais.";
  }
}

const moreButton = document.getElementById("more-button");

function loadMoreQuestions() {
  feedbackElement.textContent = "";
  resultMessageElement.textContent = "";
  moreButton.style.display = "none";

  startRandomQuiz();
}

function startRandomQuiz() {
  currentQuestion = 0;
  feedbackElement.textContent = "";
  moreButton.style.display = "none";

  questions.sort(() => Math.random() - 0.5);

  loadQuestion();
}

moreButton.addEventListener("click", loadMoreQuestions);

startRandomQuiz();
