"use strict";
const a = 7;
const b = 0;
const op = "/"; // "+", "-", "*", "/"

let result;
switch (op) {
  case "+":
    result = a + b; break;
  case "-":
    result = a - b; break;
  case "*":
    result = a * b; break;
  case "/":
    if (b === 0) {
      console.log("Delen door 0 is niet toegelaten!");
    } else {
      result = a / b;
    }
    break;
  default:
    console.log("Ongeldige operator!");
}

if (result !== undefined) {
  console.log(`${a} ${op} ${b} = ${result}`);
}