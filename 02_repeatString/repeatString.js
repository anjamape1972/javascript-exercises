const repeatString = function(word, number) {
    if (number < 0) return "ERROR";
    let resultWord = "";
    for (let i = 0; i < number; i++) {
        resultWord += word;
    }
    return resultWord;
}

// Do not edit below this line
module.exports = repeatString;
