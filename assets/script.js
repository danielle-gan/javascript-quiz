
//global variables
// variable to keep track of what question we're on
var questionNum = 1;
// variable to keep track of user's quiz score
var quizScore = 0;
// variable to set duration of timer to 100 seconds
var seconds=100;

//global arrays
//array for questions (currently placeholders)
let questions = ["Inside which HTML element do we put the Javascript?","What is the correct JavaScript syntax to write 'Hello World'?","Where is the correct place to insert a JavaScript?","How do you create a function?","How do you call myFunction?","How does a for loop start?","How do you add a comment in JavaScript?","How do you round a number to the nearest whole number?","Which HTML attribute is used to define inline styles?","How do you write 'hello world' in an alert box?"];

//placeholder answer options
let option1 = ["javascript","response.write('hello world')","outside of the html tags","function:myFunction()","call myFunction","for(i=0; i<=5)","//this is a comment","Math.round()","style","msgBox('hello world'"];
let option2 = ["js","'Hello World'","the <body> section","function=myFunction()","myFunction()","for(i=0;i<=5; i++)","This is a comment","Math.rnd()","font","alert('Hello World')"];
let option3 = ["script","document.write('Hello World')","the head section","function myFunction()","call function myFunction()","for i=1 to 5","!!This is a comment","round()","class","alertBox='hello world'"];
let option4 = ["scripting","('Hello World')","either the head or the body section","myFunction():function","Call.myFunction()","for (i<=5; i++)","#this is a comment","rnd()","styles","alertBox('hello world')"];

//placeholder array for right questions
let correctAnswers = ["script","document.write('Hello World')","either the head or the body section","function myFunction()","myFunction()","for(i=0;i<=5; i++)","//this is a comment","Math.round()","style","alert('Hello World')"]

//arrays to keep track of scores
var scores = [];

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
};

// function checks if answer is correct and acts accordingly
function guess(option) {
    console.log(questionNum);
    
    if (option == "1") {
        if (option1[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
            document.getElementById('q-answer').innerHTML = "Correct!"
            document.getElementById('score').innerHTML=quizScore;
        }
        else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
    }

    else if (option == "2") {
        if (option2[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
            document.getElementById('q-answer').innerHTML = "Correct!"
            document.getElementById('score').innerHTML=quizScore;
        }
        else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
    }

    else if (option == "3") {
        if (option3[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
            document.getElementById('q-answer').innerHTML = "Correct!"
            document.getElementById('score').innerHTML=quizScore;
        }
        else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
    }

    else if (option == "4") {
        if (option4[questionNum-1] == correctAnswers[questionNum-1]) {
            quizScore+= 10;
            console.log(quizScore)
            document.getElementById('q-answer').innerHTML = "Correct!"
            document.getElementById('score').innerHTML=quizScore;
        }
        else (seconds -= 5, document.getElementById('q-answer').innerHTML = "Incorrect!");
    }

    questionNum++;
    if (questionNum > 10) {
        alert("Nice job!");
        scores=JSON.parse(localStorage.getItem('score')) || [];
        scores.push(quizScore);
        console.log(scores);
        localStorage.setItem('score',JSON.stringify(scores));
        return location.assign('./end.html');
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
