"use strict";
console.log("JS loaded", import.meta.url);

const numberOfGeneratedNumbers = 10;

const fib = [];
for (let i = 0; i < numberOfGeneratedNumbers; i++) {
  if (i === 0) fib.push(0);
  else if (i === 1) fib.push(1);
  else fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(`Fibonacci (${numberOfGeneratedNumbers}):`, fib.join(", "));
