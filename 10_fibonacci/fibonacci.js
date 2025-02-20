const fibonacci = function(number) {
    number = Number (number);
    if (number < 0) return "OOPS";
    if (!Number.isInteger (number)) return 0;
    if (number === 0) return 0;
    if (number === 1) return 1;
    let anterior = 0;
    let siguiente = 1;
    for (let i = 2; i <= number; i++) {
        let temp = anterior + siguiente;
        anterior = siguiente;
        siguiente = temp;
    }
    return siguiente;
};

// Do not edit below this line
module.exports = fibonacci;
