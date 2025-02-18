const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        for (let i = (array.length - 1); i >= 0; i--) {
            if (element === array [i]) {
                array.splice (i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
