const readlineSync = require("readline-sync");

let MIN = 1000000000000;
let MAX = 9999999999999999;
let sum = 0;

console.log();
do {
  creditNum = Number(readlineSync.question("Number: "));
} while (creditNum < MIN || creditNum > MAX || Number.isNaN(creditNum) || !Number.isInteger(creditNum))


// step one
//check to see if it is invalid or not (LONG PART)

creditNum = String(creditNum);
let length = creditNum.length;

if (length == 15 && (charAtIndex(0, 1) == (3, 4) || charAtIndex(0, 1) == (3, 7)))
