"use strict";
console.log("JS loaded", import.meta.url);

const baseNumber        = 7;   
const numberOfIterations = 10; 

let line = "";
for (let i = 1; i <= numberOfIterations; i++) {
  line += `${baseNumber * i}`;
  if (i < numberOfIterations) line += ", ";
}
console.log(`Tafel van ${baseNumber}: ${line}`);