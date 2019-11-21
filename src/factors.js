const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let factors;
let display = "";

console.log();

do {
    positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger < MIN || positiveInteger > MAX || !Number.isInteger(positiveInteger) || Number.isNaN(positiveInteger));

for (let i = 1; i <= (positiveInteger/2); i++) {
  if (positiveInteger % i == 0) {
    factors = String(positiveInteger/i);
    i = String(i);


    if (Math.pow(i, 2) == positiveInteger) {
      display = display + i + ".";
      i = positiveInteger;
    } else {
  //  factors = factors + ", "
  //  display = display + i + ", " + factors + ".";
    }
  }
}

console.log("\n" + display + "\n");
