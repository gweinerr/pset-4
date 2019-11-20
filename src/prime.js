const readlineSync = require("readline-sync");

let MIN = 0;
let MAX = Number.MAX_SAFE_INTEGER;
let isPrime = true;

console.log();

do {
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger > MAX || nonNegativeInteger < MIN || Number.isNaN(nonNegativeInteger) || !Number.isInteger(nonNegativeInteger));

for (let i = 2; i < nonNegativeInteger; i++) {
  if (nonNegativeInteger % i == 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log("\nPrime.\n")
} else{
  console.log("\nNot prime.\n")
}
