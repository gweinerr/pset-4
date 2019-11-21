const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let sum = 0;
let nonNegativeInteger = 0;
let numberOfValues = 0;

console.log();

while (nonNegativeInteger >= MIN && nonNegativeInteger <= MAX) {
    nonNegativeInteger = readlineSync.question("Non-negative integer: ");

if (nonNegativeInteger > 0 && nonNegativeInteger <= MAX) {
        sum = parseFloat(sum) + parseFloat(nonNegativeInteger);
        ++numberOfValues;

      } else if (nonNegativeInteger < 0 && numberOfValues == 0) {
        nonNegativeInteger = 0;
      } else if (nonNegativeInteger > MAX){
        nonNegativeInteger = 0
      }
}

let average = sum / numberOfValues;

average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".\n");
