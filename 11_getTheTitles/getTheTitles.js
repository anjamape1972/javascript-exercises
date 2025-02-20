const getTheTitles = function(array) {
    const arrayTitles = [];
    for (let i = 0; i < array.length; i++) {
        arrayTitles.push (array[i].title);
    }
    return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
