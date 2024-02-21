let array = [1, 2, 3, 4];
let number1 = 3;
let number2 = 2;

const removeFromArray = function (array, number1, number2) {
    const indexToRemove = array.indexOf(number1);
    const indexToRemove2 = array.indexOf(number2);
    array.splice(indexToRemove, 1);
    array.splice(indexToRemove2, 1);
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
