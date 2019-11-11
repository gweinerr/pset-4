const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const lowerBound = Number(readlineSync.question("\nLower bound: "));
const upperBound = Number(readlineSync.question("Upper bound: "));
const lowerBound2 = Number(readlineSync.question("Lower bound: "));
const upperBound2 = Number(readlineSync.question("Upper bound: "));
