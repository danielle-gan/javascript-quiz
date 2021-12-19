//global arrays
let scorers = [];
let submittedScores = [];

// this script is going to handle pulling scores from local storage, saving people's names, and then pushing them to the highscore page if they press the submit button

function store(){
    var inputName = document.getElementById("name");
    scorers=JSON.parse(localStorage.getItem("name")) || [];
    scorers.push(inputName.value);
    localStorage.setItem("name",JSON.stringify(scorers));
    
    //get last item from scores and put it into submittedScores array
    score=JSON.parse(localStorage.getItem("score")) || [];
    console.log(score);
    submittedScores = JSON.parse(localStorage.getItem("newScore")) || [];
    submittedScores.push(score.at(-1));
    localStorage.setItem("newScore",JSON.stringify(submittedScores));
    console.log(submittedScores);
    alert("your score has been submitted");
    return location.assign('./highscores.html');
};
