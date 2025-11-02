"use strict";
console.log("JS loaded", import.meta.url);
const firstName = "Alyna";
const lastName  = "Dolyna";
const age       = 18;

if (!firstName || !lastName) {
  console.log("Vul zowel voornaam als achternaam in!");
} else if (age < 12 || age > 60) {
  console.log("U behoort niet tot de gezochte leeftijdsklasse!");
} else {
  console.log(`Welkom, ${firstName} ${lastName} (${age} jaar).`);
}