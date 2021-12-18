
//global variables
// variable to keep track of what question we're on
var questionNum = 1;

var quizScore = 0;

seconds=100;

//global arrays
//array for questions (currently placeholders)
let questions = ["1","2","3","4","5","6","7","8","9","10"];

//placeholder answer options
let option1 = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10"];
let option2 = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"];
let option3 = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10"];
let option4 = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10"];

//placeholder array for right questions
let correctAnswers = ["a1","c2","d3","b4","a5","a6","b7","c8","c9","d10"]

//array to keep track of highscores to input into highscore table
let highScores = [];
let scorers = [];

if (window.location.href == "./questions.html") {
    //display the first question and options
    document.getElementById('question').innerHTML=questions[questionNum-1];
    document.getElementById('A').innerHTML=option1[questionNum-1];
    document.getElementById('B').innerHTML=option2[questionNum-1];
    document.getElementById('C').innerHTML=option3[questionNum-1];
    document.getElementById('D').innerHTML=option4[questionNum-1];

    //timer
    var time = setInterval(timer, 1000);

    function timer() {
        seconds--;
        document.getElementById('time').innerHTML = seconds;

        if (seconds < 0) {
            clearInterval(time);
            alert("your time... has finished");
            return window.location.assign('./end.html');
        }
    }

    // function checks if answer is correct and does cool shit
    function guess(option) {
        console.log(questionNum);
        
        if (option == "1") {
            if (option1[questionNum-1] == correctAnswers[questionNum-1]) {
                quizScore+= 10;
                console.log(quizScore)
                document.getElementById('q-answer').innerHTML = "Correct!"
            }
            else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
        }

        else if (option == "2") {
            if (option2[questionNum-1] == correctAnswers[questionNum-1]) {
                quizScore+= 10;
                console.log(quizScore)
                document.getElementById('q-answer').innerHTML = "Correct!"
            }
            else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
        }

        else if (option == "3") {
            if (option3[questionNum-1] == correctAnswers[questionNum-1]) {
                quizScore+= 10;
                console.log(quizScore)
                document.getElementById('q-answer').innerHTML = "Correct!"
            }
            else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
        }

        else if (option == "4") {
            if (option4[questionNum-1] == correctAnswers[questionNum-1]) {
                quizScore+= 10;
                console.log(quizScore)
                document.getElementById('q-answer').innerHTML = "Correct!"
            }
            else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
        }

        questionNum++;
        if (questionNum > 10) {
            alert("Nice job!");
            highScores.push(quizScore);
            return window.location.assign('./end.html');
        }

        document.getElementById('question').innerHTML=questions[questionNum-1];
        document.getElementById('A').innerHTML=option1[questionNum-1];
        document.getElementById('B').innerHTML=option2[questionNum-1];
        document.getElementById('C').innerHTML=option3[questionNum-1];
        document.getElementById('D').innerHTML=option4[questionNum-1];
        
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
};