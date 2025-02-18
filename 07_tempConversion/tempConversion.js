const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5/9);
  return Number (tempCelsius.toFixed (1));
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (tempCelsius * (9/5)) + 32;
  return Number (tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
