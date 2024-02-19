let message = "";
let result = "";


const reverseString = function (message) {
    for (let i = message.length - 1; i >= 0; i--) {
        result = result + message.charAt(i);
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
