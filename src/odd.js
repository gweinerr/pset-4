const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;
let digit = 0;

while (Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger) || positiveInteger > MAX || positiveInteger < MIN) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

while (positiveInteger != 0) {
  digit = positiveInteger % 10;
  positiveInteger = Math.floor(positiveInteger / 10);
  if (digit % 2 != 0) {
    sum = sum + digit
  }
}

console.log("\n" + sum + ".\n");
