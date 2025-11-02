"use strict";
console.log("JS loaded", import.meta.url);
const answer = 7;              
const guess  = 5;              

if (guess === answer) {
  console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
} else {
  console.log(`Helaas, het juiste getal was ${answer}.`);
}