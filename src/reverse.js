const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let digit;
let order = "";



while (Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger) || positiveInteger > MAX || positiveInteger < MIN) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

while (positiveInteger > 0) {
  let digit = positiveInteger % 10
  positiveInteger = Math.floor(positiveInteger / 10);
  if (positiveInteger >= 1) {
    order = order + digit + ", "
  }
  else [
    order = order + digit + ".\n"
  ]
 }

 console.log("\n" + order);
