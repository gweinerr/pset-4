const readlineSync = require("readline-sync");

let MIN = 1000000000000;
let MAX = 9999999999999999;
let sum = 0;
let current;
let shrinkNumber = 1;
let count = 0;
let creditNum;
let digit = 0;
let checksum = 0;
let current1 = 0;
let current2 = 0;
let firstNum;

console.log();
do {
  creditNum = Number(readlineSync.question("Number: "));
} while (creditNum < MIN || creditNum > MAX || Number.isNaN(creditNum) || !Number.isInteger(creditNum))

shrinkNumber = creditNum;
do {
  current = shrinkNumber % 10;
  current2 = current1;
  current1 = current;
  shrinkNumber = Math.floor(shrinkNumber/10);
  count++
  if (count % 2 == 0) {
    current = current * 2;
    if (current > 9){
      checksum += 1 + (current % 10);
    } else {
       checksum = current + checksum
    }
  } else {
    digit = digit + current;
  }
} while (shrinkNumber > 0)
checksum = checksum + digit;

if (current1 == 3 || current1 == 5) {
  firstNum = (current1 * 10) + current2;
} else {
  firstNum = current1;
}

if (checksum % 10 == 0) {
  if (count == 15 && (firstNum == 34 || firstNum == 37)) {
    console.log("\nAmex.\n");
  } else if (count == 16 && (firstNum == 51 || firstNum == 52 || firstNum == 53 || firstNum == 54 || firstNum == 55)) {
    console.log("\nMastercard.\n")
  } else if (firstNum == 4 && (count == 13 || count == 16)) {
    console.log("\nVisa.\n")
  } else {
    console.log("\nInvalid.\n");
  }
} else {
  console.log("\nInvalid.\n");
}
