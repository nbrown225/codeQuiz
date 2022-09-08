// LINK DOM 
    //- intro card
var intro = document.querySelector('#intro');
    
    //- buttons
var start = document.querySelector('#start');
    
    //- questions / answers
var questionBox = document.querySelector('#question-box');
var questionTitle = document.querySelector('#question-title');

// ------------ TIMER -----------------------
var timerEl = document.querySelector('#timer');
var timeLeft = 10;
// var questionNumber = 0;
var questionCount = 1;
function startTimer(){
    var time = setInterval(() => {
        timeLeft--;
        timerEl.textContent = 'TIME: ' + timeLeft;  
        
        // stop quiz at 0
        if (timeLeft <= 0) {
            clearInterval(time)
            timerEl.textContent = "OUT OF TIME!"
            
        }
    }, 1000);
}
function startQuiz() {
    startTimer();
}

start.addEventListener('click', startQuiz)