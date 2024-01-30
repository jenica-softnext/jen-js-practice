////////////////// return the sum of two numbers //////////////////////////
console.log(`////////////////// return the sum of two numbers //////////////////////////`);

// function declaration
function getSum(x, y) {
  return x + y;
}

console.log(getSum(8, 21));

// function expression
const getSum2 = function (x, y) {
  return x + y;
};

console.log(getSum2(8, 20));

// arrow function

const getSum3 = (x, y) => {
  return x + y;
};

console.log(getSum3(12, 78));

////////////////// convert minutes into seconds //////////////////////////
console.log(`////////////////// convert minutes into seconds //////////////////////////`);

function convertMinutes(min) {
  return min * 60;
}

console.log(convertMinutes(2));

////////////////// return the next number from the integer passed  //////////////////////////
console.log(`////////////////// convert minutes into seconds //////////////////////////`);

function getNextNum(num) {
  return num + 1;
}

console.log(getNextNum(42));

////////////////// display current day and time  //////////////////////////
console.log(`////////////////// display current day and time //////////////////////////`);

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const dayToday = days[date.getDay()];
const timeToday = `${date.getHours()} ${
  date.getHours() === date.getHours() >= 12 ? "PM" : "AM"
} : ${date.getMinutes()} : ${date.getSeconds()}`;

console.log(`Today is ${dayToday}, ${timeToday}.`);

console.log(`Today is: ${dayToday}`);
console.log(`Current time is: ${timeToday}`);

////////////////// area of triangle  //////////////////////////
console.log(`////////////////// area of triangle //////////////////////////`);

const a = 5;
const b = 6;
const c = 7;

const area = (a + b + c) / 2;

console.log(area);

////////////////// Write a JavaScript program to rotate the reverse 'w3resource'  //////////////////////////
console.log(
  `////////////////// Write a JavaScript program to rotate the string 'w3resource' //////////////////////////`
);

const string1 = "w3resource";
const string2 = string1.split("");

console.log(string2.reverse().join(""));

/*/////////////////
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John.
Log it to the console too.

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
/////////////////////////*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const higherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(higherBMI);

/*/////////////////  Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are. /////////////////////////*/

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}

/*/////////////////
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.  /////////////////////////*/
// const scoreDolphines = (96 + 108 + 89 ) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphines > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphines > scoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if (scoreDolphines === scoreKoalas) {
//     console.log("Both win the trophy");
// }

/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! */

const calcAverage = function (score1, score2, score3) {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430 */

const bill = 275;

let tip = bill > 50 && bill < 300 ? 0.15 : 0.2;

tip = bill * tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // if (bill >= 50 && bill <= 300) {
  //     return bill * .15;
  // } else {
  //     return bill * .20;
  // }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

// leap year (gregorian calendar)

const year = 2024;

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
const randomNumber = Math.trunc(Math.random() * 10) + 1;
console.log(`Random Number: ${randomNumber}`);
const guessNumber = Number(prompt("Guess the number. (Choose from 1 to 10)"));

if (randomNumber === guessNumber) {
  alert("Good Wrok! :)");
} else {
  alert("Not Matched! :(");
}

// Write a JavaScript program to calculate the days left before Christmas.

// Write a JavaScript program to get the website URL (loading page).
console.log(window.location.href);
