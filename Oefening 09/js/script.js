"use strict";
console.log("JS loaded", import.meta.url);
const min = 1, max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

const guess = 3; 

if (guess === answer) {
  console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
  console.log(`Helaas, het juiste getal was ${answer}.`);
}