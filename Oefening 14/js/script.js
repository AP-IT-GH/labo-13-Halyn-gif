"use strict";
console.log("JS loaded", import.meta.url);

const initialValue = 5;
let n = initialValue;

while (n >= 0) {
  console.log(n);
  n--;
}
console.log("Start!");
