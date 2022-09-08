// ------------ LINK DOM ------------------------
var intro = document.querySelector("#intro");
var start = document.querySelector("#start-button");

var optionNumber = 0;
var Score = 0;
var optCount = 1;
// ----- BUTTONS


// ----- LINK QUESTIONS / ANSWERS
var choiceButtons = document.querySelectorAll("#options");
var optA = document.querySelector("#option-a");
var optB = document.querySelector("#option-b");
var optC = document.querySelector("#option-c");
var optD = document.querySelector("#option-d");
var check = document.querySelector("#check");

// ----- question box
var questionBox = document.querySelector("#question-box");

// ----- question title
var questionTitle = document.querySelector("#question-title");
// ----- QUESTIONS ARRAY
var questionArr = [
    {
      question: 'What is 4 - 3',
      options: [
        'A. 1',
        'C. 44',
        'C. 34',
        'D. 2',
      ],
      answer: 'a',
    },
    {
        question: 'What color is the sky?',
        options: [
            'A. green',
            'B. yellow',
            'C. blue',
            'D. purple',
        ],
        answer: 'c',
    }
  ];
// ------------ TIMER -------------------------
var timerEl = document.getElementById("timer");
var timeLeft = 3;
function startTimer() {
    var time = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(time);
        timerEl.textContent = "Out of time!";
      }
    }, 1000);
  }

// ------------ SHOW QUESTIONS ------------------------
function showQuestion(n) {
    questionTitle.textContent = questionArr[n].question;
    optA.textContent = questionArr[n].options[0];
    optB.textContent = questionArr[n].options[1];
    optC.textContent = questionArr[n].options[2];
    optD.textContent = questionArr[n].options[3];
    optionNumber = n;
  }
// ------------ START QUIZ ---------------------

// ------------ SORT QUESTIONS

// ------------ CHECK ANSWERS
// ----- event listener for options

// ------------ NEXT QUESTION

// ------------ STOP QUIZ








// STEP 2 (A):  As soon as the user starts the quiz the timer starts to run down


function startQuiz() {
    intro.style.display = "none";
    questionBox.style.display = "block";
    optionNumber = 0;
    startTimer();
    showQuestion(optionNumber);
}

start.addEventListener("click", startQuiz);