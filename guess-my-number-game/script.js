'use strict';

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
console.log(hiddenNumber);
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");

let currentScore = 20;
let currentHighScore = 0;



checkBtn.addEventListener("click", () => {
    if (Number(guess.value) === hiddenNumber) {
        document.querySelector("body").style.background = "#60b347";
        document.querySelector(".number").style.width = "20rem";
        document.querySelector(".number").textContent = Math.trunc(Math.random() * 20) + 1;
        document.querySelector(".message").textContent = "You win!";

        currentHighScore = currentScore > currentHighScore ? currentScore : currentHighScore;
        document.querySelector(".highscore").textContent = currentHighScore;

    } else {
        currentScore -= 1;
        document.querySelector(".score").textContent = currentScore;
    }
});

againBtn.addEventListener("click", () => {
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(hiddenNumber);
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";

    guess.value = "";
    currentScore = 20;
    document.querySelector(".score").textContent = 20;

});

