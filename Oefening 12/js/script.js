"use strict";
console.log("JS loaded", import.meta.url);

const secretNumber = 18;                
const guesses = [5, 12, 21, 18];        

let i = 0;
let hit = false;

do {
  const g = guesses[i++];
  if (g === undefined) {
    console.log("Geen pogingen meer.");
    break;
  }

  if (g === secretNumber) {
    console.log("Juist! 🎉");
    hit = true;
  } else if (g < secretNumber) {
    console.log(`${g} is te laag.`);
  } else {
    console.log(`${g} is te hoog.`);
  }
} while (!hit);
