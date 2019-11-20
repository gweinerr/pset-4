const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;
let answer;

console.log();

do {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger > MAX || positiveInteger < MIN || Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger));

if (positiveInteger == 0) {
  answer = 0;
} else if (positiveInteger == 1) {
  answer = 1;
} else if (positiveInteger == 2) {
  answer = 1;
} else {
  let numOne = 1;
  let numTwo = 1;
  for (let i = 3; i <= positiveInteger; i++) {
    answer = numOne + numTwo;
    numOne = numTwo;
    numTwo = answer;
  }
}

answer = answer.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 3});

console.log("\n" + answer + ".\n");
