const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let newString = string.split("").reverse().join("");
    if (newString === string) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
