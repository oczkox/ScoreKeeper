var p1 = document.getElementById("p1");
var p1D = document.getElementById("p1Displayed");
var p2 = document.getElementById("p2");
var p2D = document.getElementById("p2Displayed");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScore = document.querySelector("p span");
var gameover = false;
var win = 5;
var p1Score = 0;
var p2Score = 0;

p1.addEventListener("click", function(){
    if(!gameover){
        p1Score++;
        if(p1Score === win){
            p1D.classList.add("winner");
            gameover = true;
        }
        p1D.textContent = p1Score;
    }
});

p2.addEventListener("click", function(){
    if(!gameover){
        p2Score++;
        if(p2Score === win){
            p2D.classList.add("winner");
            gameover = true;
        }
        p2D.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1D.textContent = p1Score;
    p2D.textContent = p2Score;
    p1D.classList.remove("winner");
    p2D.classList.remove("winner");
    gameover = false;
}

numInput.addEventListener("change", function(){
winningScore.textContent = numInput.value;
win = Number(numInput.value);
reset();
});