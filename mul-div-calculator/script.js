let num1El = document.querySelector("#num1");
let num2El = document.querySelector("#num2");
const numField = document.querySelector(".num-field");

let result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const btnMult = document.querySelector("#multiply");
const btnDiv = document.querySelector("#divide");

const checkNumField = function (answer) {
  if (!numField.value) {
    resultText.innerHTML = `PLEASE ENTER A NUMBER!`;
  } else {
    resultText.innerHTML = `The result is: <span class="result">${answer}</span>`;
  }
};

btnMult.addEventListener("click", function () {
  let num1 = num1El.value;
  let num2 = num2El.value;

  let product = Number(num1 * num2);

  checkNumField(product);
});

btnDiv.addEventListener("click", function () {
  let num1 = num1El.value;
  let num2 = num2El.value;

  let quotient = Number(num1 / num2);

  checkNumField(quotient);
});

numField.addEventListener("click", function () {
  num1El.value = "";
  num2El.value = "";
});
