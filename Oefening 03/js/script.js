"use strict";
console.log("JS loaded", import.meta.url);

const a = 12;
const b = 4;
const op = "/"; // "+", "-", "*", "/"

let result;

if (op === "+") {
  result = a + b;
} else if (op === "-") {
  result = a - b;
} else if (op === "*") {
  result = a * b;
} else if (op === "/") {
  if (b === 0) {
    console.log("Delen door 0 is niet toegelaten!");
  } else {
    result = a / b;
  }
} else {
  console.log("Ongeldige operator!");
}

if (result !== undefined) {
  console.log(`${a} ${op} ${b} = ${result}`);
}
