let questions = [
    {
        "question": "Pfingsten ist ein ..",
        "answer_1": "christlicher Feiertag",
        "answer_2": "deutscher Gedenktag",
        "answer_3": "internationaler Trauertag",
        "answer_4": "bayerischer Brauch",
        "right_answer": 1
    },
    {
        "question": "Die Volkshochschule in Deutschland ist eine Einrichtung ...",
        "answer_1": "nur für Rentner und Rentnerinnen.",
        "answer_2": "für den Religionsunterricht.",
        "answer_3": "zur Weiterbildung.",
        "answer_4": "nur für Jugendliche.",
        "right_answer": 3,
    },
    {
        "question": "Was ist in Deutschland ein Brauch zu Weihnachten?",
        "answer_1": "einen Tannenbaum schmücken",
        "answer_2": "sich mit Masken und Kostümen verkleiden",
        "answer_3": "bunte Eir verstecken",
        "answer_4": "Kürbisse vor die Tür stellen.",
        "right_answer": 1
    },
    {
        "question": "Bei Erziehungsproblemen gehen Sie in Deutschland ...",
        "answer_1": "Zun Gesundheitsamt.",
        "answer_2": "zum Jungendamt.",
        "answer_3": "zum Arz / zur Ärztin.",
        "answer_4": "zum Einwohnermeldeamt.",
        "right_answer": 2
    },
    {
        "question": "Bei welchem Amt in Deutschland muss man in der Regel seinen Hund anmelden?",
        "answer_1": "bei Einwohnermeldeamt.",
        "answer_2": "bei Gesundheitsamt.",
        "answer_3": "beim Finanzamt",
        "answer_4": "bei der Kommune (Stadt oder Gemeinde)",
        "right_answer": 4
    },
]





let cardBody = document.getElementById('card-body');
let allQuestion = document.getElementById('all-questions');
let currentNumber = document.getElementById('current-number');

let index = 0;

function init(){
    allQuestion.innerHTML = questions.length;
}

function nextNumber() {
    currentNumber.innerHTML = index + 1;
}
init();


function displayQuiz() {
    cardBody.innerHTML = '';
        //  index = 0 
        cardBody.innerHTML += `
        <h5 class="card-title">${questions[index].question}</h5>

                <div class="card mb-2">
                  <div class="card-body">
                    ${questions[index].answer_1}
                  </div>
                </div>
        
                <div class="card mb-2">
                  <div class="card-body">
                  ${questions[index].answer_2}
                  </div>
                </div>
        
                <div class="card mb-2">
                  <div class="card-body">
                  ${questions[index].answer_3}
                  </div>
                </div>
        
                <div class="card mb-2">
                  <div class="card-body">
                  ${questions[index].answer_4}
                  </div>
                </div>
        `
    
}
displayQuiz();


function nextQuestion(){
   index++;
   if(index > questions.length) return
   displayQuiz();
   nextNumber();
   
}