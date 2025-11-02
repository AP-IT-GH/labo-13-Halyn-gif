"use strict";
function convertTemp(value, unit) {
  if (unit === "C") {
    return (value * 9/5) + 32;          
  } else if (unit === "F") {
    return (value - 32) * 5/9;         
  }
  return null;
}

const value = 25;
const unit  = "C"; 
const out   = convertTemp(value, unit);

if (out === null) {
  console.log("Ongeldige eenheid! Gebruik 'C' of 'F'.");
} else {
  console.log(unit === "C"
    ? `${value}°C = ${out.toFixed(1)}°F`
    : `${value}°F = ${out.toFixed(1)}°C`
  );
}