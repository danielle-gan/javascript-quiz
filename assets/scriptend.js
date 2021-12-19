// global variables



//global arrays
let scorers = [];


// this script is going to handle pulling scores from local storage, saving people's names, and then pushing them to the highscore page if they press the submit button

function store(){
    var inputName = document.getElementById("name");
    console.log(inputName.value)
    scorers=JSON.parse(localStorage.getItem("name")) || [];
    scorers.push(inputName.value);
    localStorage.setItem("name",JSON.stringify(scorers));
    alert("your score has been submitted");
    return location.assign('./highscores.html');
}
