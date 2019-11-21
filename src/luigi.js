const readlineSync = require("readline-sync");

let MIN = 1;
let MAX = 24;

console.log();
do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height))
