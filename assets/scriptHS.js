// pull items from local storage
var scores = JSON.parse(localStorage.getItem("newScore")) || [];
var scorers = JSON.parse(localStorage.getItem("name")) || [];

let score = scores.at(-1); 
let scorer = scorers.at(-1);

console.log(score); 
console.log(scorer);

//this function is going to rank the highscores
function orderScores() {
    for (let i = scores.length; i > scores.length; i--) {
        if (score[i] < scores[i]) {
            console.log("you lost to " + scorers[i]);
        };
    };
};

orderScores();