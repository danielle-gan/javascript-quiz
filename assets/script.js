
//global variables
// variable to keep track of what question we're on
var questionNum = 1;

var quizScore = 0;

let duration = 0;
let seconds = 10;


//global arrays
//array for questions (currently placeholders)
let questions = ["1","2","3","4","5","6","7","8","9","10"];

//placeholder answer options
let option1 = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10"];
let option2 = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"];
let option3 = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10"];
let option4 = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10"];

//placeholder array for right questions
let correctAnswers = ["a1","c2","d3","a5","a6","b7","c8","c9","d10"]

//array to keep track of highscores to input into highscore table
let highScores = [];

//timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer);

        display.textContent = seconds;

        if (seconds < 1) {
            // endGame();
            console.log("end game");
        }

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

window.onload = function () {
    var hundredSec = 100,
        display = document.querySelector('#time');
    startTimer(hundredSec, display);
};

// function to handle clicking on an answer to a question
    // if answer is correct add points to quizScore, go to the next question and change "question-answer" --> for first question, "question-answer" should not be visible
    // if answer is wrong take time off of timer, go to next question, and change question answer

function guess(option) {
    console.log(questionNum);
    
    if (option == "1") {
        if (option1[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
        }
    }

    else if (option == "2") {
        if (option2[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
        }
    }

    else if (option == "3") {
        if (option3[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
        }
    }

    else if (option == "4") {
        if (option4[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
        }
    }

    questionNum++;
    
};

document.getElementById('A').onclick=function(e) {
    guess(1);
};

document.getElementById('B').onclick=function(e) {
    guess(2);
};

document.getElementById('C').onclick=function(e) {
    guess(3);
};

document.getElementById('D').onclick=function(e) {
    guess(4);
};


//play again function

//go to highscores function