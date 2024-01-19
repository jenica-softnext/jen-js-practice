"use strict";

// player
let activePlayer = 0;
let player1 = document.querySelector("#score--0");
let player2 = document.querySelector("#score--1");


// scores
let currentScore = 0;
let finalScore = 0;
let scores = [0, 0];

// dice
const diceImage = document.querySelector(".dice");
// roll variable
const btnNew = document.querySelector(".btn--new");
// roll variable
const btnRoll = document.querySelector(".btn--roll");

// hold variable
const btnHold = document.querySelector(".btn--hold");


diceImage.classList.add("hidden");
player1.textContent = 0;
player2.textContent = 0;

const resetCurrentScore = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
}

const resetFinalScore = () => {
  finalScore = 0;
  document.querySelector(`#score--${activePlayer}`).textContent = finalScore;
}


btnRoll.addEventListener("click", function () {

  let dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove("hidden");
  diceImage.src = `dice-${dice}.png`;

  currentScore += dice;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

  if (dice === 1) {

    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

    resetCurrentScore();

    scores[activePlayer] += finalScore;

    // switch player
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);

    resetCurrentScore();
    resetFinalScore();

    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
  }
});

btnHold.addEventListener("click", function () {

  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =  scores[activePlayer];

  resetCurrentScore();
});

// new game

btnNew.addEventListener("click", () => {
  
  diceImage.classList.add("hidden");

  document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

  activePlayer = 0;

  document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);

  finalScore = 0;
  document.querySelector(`#score--0`).textContent = finalScore;
  document.querySelector(`#score--1`).textContent = finalScore;

  currentScore = 0;
  document.querySelector(`#current--0`).textContent = currentScore;
  document.querySelector(`#current--1`).textContent = currentScore;

  scores = [0,0];
});