const add = function(...numbers) {
    let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return Number (result);
};

const subtract = function(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
	let result = numbers [0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
};

const sum = function(array) {
	if (array.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array [i];
  }
  return result;
};

const multiply = function(array) {
	if (array.length === 0) return 0;
  let result = array [0];
  for (let i = 1; i < array.length; i++) {
    result *= array [i];
  }
  return result;
};

const power = function(number, power) {
	if (power === 0) return 1;
  let result = number;
  for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	if (number === 0 || number === 1) return 1;
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
