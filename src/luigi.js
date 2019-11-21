const readlineSync = require("readline-sync");

let MIN = 1;
let MAX = 24;

console.log();
do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height))

console.log();
rowLength = height + 1;
let output = "";

for (let i = 2; i <= rowLength; i++) {
  for (let j = rowLength - i; j > 0; j -= 1) {
    output += " ";
  }
  for (let k = i; k > 0; k -= 1) {
    output += "#";
  }
  output += "  ";
  for (let k = i; k > 0; k -= 1) {
    output += "#";
  }
  output += "\n";
}

console.log(output);
