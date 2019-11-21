const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let factors = "\n";
let flag = 0;

console.log();
do {
    positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger < MIN || positiveInteger > MAX || !Number.isInteger(positiveInteger) || Number.isNaN(positiveInteger));

for (let i = 1; i <= positiveInteger/2; i++) {
  remainder = positiveInteger % i
  if (remainder == 0) {
    if (factors.includes(", " + i + ", ") == true) {
      break;
    }
    else {
      if (positiveInteger / i == i) {
        factors = factors + i + ".";
        flag = 1
      } else {
        factors = factors + i + ", " + (positiveInteger / i) + ", ";
      }
    }
  }
}

if(flag != 1) {
  maliciousComma = factors.lastIndexOf(",");
  factors = factors.slice(1, maliciousComma);
  factors = factors + ".";
}
 console.log();
console.log(factors + "\n");
