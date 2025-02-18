const sumAll = function(number01, number02) {
    let result = 0;
    if (number01 < 0 || number02 < 0 || !Number.isInteger (number01) || !Number.isInteger (number02)) {
        return "ERROR"
    }
    if (number01 <= number02) {
        for (let i = number01; i <= number02; i++){
            result += i
        } return result
    } else {
        for (let i = number02; i <= number01; i++){
            result += i
        } return result
    }
};

// Do not edit below this line
module.exports = sumAll;
