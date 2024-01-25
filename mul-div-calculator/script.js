let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const btnMult = document.querySelector("#multiply");

btnMult.addEventListener("click", function () {
  num1 = num1.value;
  num2 = num2.value;

  if (num1 && num2) {
    result.textContent = num1 * num2;
  } else {
    resultText.textContent = "ENTER A NUMBER...";
    resultText.style.textAlign = "center";
    resultText.style.fontSize = "20px";
  }
});
