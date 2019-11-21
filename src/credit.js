const readlineSync = require("readline-sync");

let MIN = 1000000000000;
let MAX = 9999999999999999;

console.log();
do {
  creditNum = Number(readlineSync.question("Number: "));
} while (creditNum < MIN || creditNum > MAX || Number.isNaN(creditNum) || !Number.isInteger(creditNum))
