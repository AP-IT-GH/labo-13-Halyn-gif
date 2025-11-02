"use strict";
console.log("JS loaded", import.meta.url);

const columns = 5;
const rows    = 3;

for (let r = 0; r < rows; r++) {
  let row = "";
  for (let c = 0; c < columns; c++) {
    row += "X";
    if (c < columns - 1) row += " ";
  }
  console.log(row);
}