"use strict";
const grade = 8; // 0..10

let text;
switch (true) {
  case (grade >= 0 && grade <= 2):  text = "Zeer slecht";    break;
  case (grade >= 3 && grade <= 4):  text = "Onvoldoende";    break;
  case (grade >= 5 && grade <= 6):  text = "Voldoende";      break;
  case (grade >= 7 && grade <= 8):  text = "Goed";           break;
  case (grade >= 9 && grade <= 10): text = "Uitstekend";     break;
  default:                          text = "Ongeldig cijfer";
}

console.log(text);