let questions = [
  {
    question: "Pfingsten ist ein ..",
    answer_1: "christlicher Feiertag",
    answer_2: "deutscher Gedenktag",
    answer_3: "internationaler Trauertag",
    answer_4: "bayerischer Brauch",
    right_answer: 1,
  },
  {
    question: "Die Volkshochschule in Deutschland ist eine Einrichtung ...",
    answer_1: "nur für Rentner und Rentnerinnen.",
    answer_2: "für den Religionsunterricht.",
    answer_3: "zur Weiterbildung.",
    answer_4: "nur für Jugendliche.",
    right_answer: 3,
  },
  {
    question: "Was ist in Deutschland ein Brauch zu Weihnachten?",
    answer_1: "einen Tannenbaum schmücken",
    answer_2: "sich mit Masken und Kostümen verkleiden",
    answer_3: "bunte Eir verstecken",
    answer_4: "Kürbisse vor die Tür stellen.",
    right_answer: 1,
  },
  {
    question: "Bei Erziehungsproblemen gehen Sie in Deutschland ...",
    answer_1: "Zun Gesundheitsamt.",
    answer_2: "zum Jungendamt.",
    answer_3: "zum Arz / zur Ärztin.",
    answer_4: "zum Einwohnermeldeamt.",
    right_answer: 2,
  },
  {
    question:
      "Bei welchem Amt in Deutschland muss man in der Regel seinen Hund anmelden?",
    answer_1: "bei Einwohnermeldeamt.",
    answer_2: "bei Gesundheitsamt.",
    answer_3: "beim Finanzamt",
    answer_4: "bei der Kommune (Stadt oder Gemeinde)",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;
let question = questions[currentQuestion];

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showEndscreen() {
  document.getElementById("endscreen").style.display = "";
  document.getElementById("questionbody").style.display = "none";
  document.getElementById("correctAnswer").innerHTML = rightAnswers;
  document.getElementById("totalQuestion").innerHTML = questions.length;
  document.getElementById("header-image").src = "img/trophy-1674911_640.png";
}

function updateNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question.question;
  document.getElementById("answer_1").innerHTML = question.answer_1;
  document.getElementById("answer_2").innerHTML = question.answer_2;
  document.getElementById("answer_3").innerHTML = question.answer_3;
  document.getElementById("answer_4").innerHTML = question.answer_4;
  document.getElementById("currentNum").innerHTML = currentQuestion + 1; // increases the current question
}

function updateProgressBar() {
  let percent = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showQuestion() {
  if (gameIsOver()) {
    // Show end screen
    showEndscreen();
  } else {
    // Show next question
    updateNextQuestion();
    updateProgressBar();
  }
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  document.getElementById("next-button").disabled = true;
  removeClasses();
}

//to remove the background color when it moves to the next question
function removeClass(card) {
  card.classList.remove("bg-danger");
  card.classList.remove("bg-success");
}

function removeClasses() {
  let card = document.querySelectorAll(".card-body");
  let cardBody = document.querySelectorAll(".card");
  card.forEach((card) => {
    removeClass(card);
  });
  cardBody.forEach((card) => {
    removeClass(card);
  });
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedAnswer = selection.slice(-1);
  let idOfRightAnswer = `answer_${question.right_answer}`;

  if (selectedAnswer == question.right_answer) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightAnswers++;
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(selectedAnswer) {
  return selectedAnswer == question.right_answer;
}

function restartQuiz() {
  document.getElementById("header-image").src = "img/pencil-5726923_640.jpg";
  document.getElementById("endscreen").style.display = "none";
  document.getElementById("questionbody").style.display = "";
  rightAnswers = 0;
  currentQuestion = 0;
  init();
}
