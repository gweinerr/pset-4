const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let sum = 0;
let nonNegativeInteger = 0;
let numberOfValues = 0;

console.log("\n");

while (nonNegativeInteger >= MIN && nonNegativeInteger <= MAX) {
    nonNegativeInteger = readlineSync.question("Non-negative integer: ");

    if (nonNegativeInteger >= MIN && nonNegativeInteger <= MAX) {
        sum = parseFloat(sum) + parseFloat(nonNegativeInteger);
        ++numberOfValues
        
    } else if (numberOfValues == 0 && nonNegativeInteger < 0){
      nonNegativeInteger = readlineSync.question("Non-negative integer: ");
    } else if (numberOfValues > 1 && nonNegativeInteger > MAX) {
      nonNegativeInteger = readlineSync.question("Non-negative integer: ");
    } else {

    }
}

let average = sum / numberOfValues;

average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".\n");
