// pull items from local storage
var scores = JSON.parse(localStorage.getItem("newScore")) || [];
var scorers = JSON.parse(localStorage.getItem("name")) || [];

let score = scores.at(-1); 
let scorer = scorers.at(-1);

let highScores=[];
let highScorers=[];

console.log(score); 
console.log(scorer);

//this function is going to rank the highscores
function orderScores() {
    for (var i = highScores.length; i >= highScores.length; i--) {
        if (score[i] < scores[i]) {
            console.log("you lost to " + scorers[i]);
            score.push(highScores);
            scorer.push(highScorers)
        }
        else (console.log("you beat" + scorers[i]), console.log(highScores, highScorers));
    };
};

orderScores();

function displayScores() {
    document.getElementById("name1").innerHTML = scorers[0];
    document.getElementById("score1").innerHTML = scores[0];
    document.getElementById("name2").innerHTML = scorers[1];
    document.getElementById("score2").innerHTML = scores[1];
    document.getElementById("name3").innerHTML = scorers[2];
    document.getElementById("score3").innerHTML = scores[2];
    document.getElementById("name4").innerHTML = scorers[3];
    document.getElementById("score4").innerHTML = scores[3];
    document.getElementById("name5").innerHTML = scorers[4];
    document.getElementById("score5").innerHTML = scores[4];
};

displayScores();