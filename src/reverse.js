const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

positiveInteger = Number(readlineSync.question("\nPositive integer: "));

while (Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger) || positiveInteger > MAX || positiveInteger < MIN) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

while (positiveInteger > 0) {
  let digit = positiveInteger % 10
  positiveInteger = Math.floor(positiveInteger / 10);

console.log(digit)
}
