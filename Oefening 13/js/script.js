"use strict";
console.log("JS loaded", import.meta.url);

const limit = 20;
let sum = 0;

for (let n = 0; n <= limit; n++) {
  if (n % 2 === 0) sum += n;
}
console.log(`Som van alle even getallen tot en met ${limit} = ${sum}`);