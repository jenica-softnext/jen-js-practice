// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

const convertToFahrenhit = function (celcius) {
  let fahrenheit = (celcius / 5) * 9 + 32;

  return `${celcius}C is equal to ${fahrenheit}F`;
};

const convertToCelcius = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) / 9) * 5;

  return `${fahrenheit}F is equal to ${celcius}C`;
};

console.log(convertToFahrenhit(60));
console.log(convertToCelcius(140));
