let string = "";
let num = 10;
let total = "";

const repeatString = function (string, num) {
    for (let i = 0; i < num; i++) {
        total = total + string;
    }
    if (num < 0) {
        return "ERROR";
    } else {
        return total;
    }

};


// Do not edit below this line
module.exports = repeatString;
