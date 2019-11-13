const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = 1;
let upperBound = 0;

console.log();

while (lowerBound > upperBound || upperBound > MAX || upperBound < MIN || lowerBound < MIN || lowerBound > MAX ||
       Number.isNaN(upperBound) || !Number.isInteger(upperBound) || Number.isNaN(lowerBound) || !Number.isInteger(lowerBound)) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

let sum = 0;
let i = 0;

console.log();

if (upperBound % 2 === 0) {
for (let i = lowerBound; i <= upperBound; i = i + 2)
  sum = sum + i
}

sum = sum.toLocaleString(2);

console.log(sum + ".");
