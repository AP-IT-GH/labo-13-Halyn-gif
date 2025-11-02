"use strict";
const startHour = 23;
const startMin  = 50;
const addHours  = 2;
const addMins   = 35;


if (
  [startHour, startMin, addHours, addMins].some(v => v === undefined || v === null)
) {
  console.log("Vul alle velden in!");
} else {
  let totalMinutes = startHour * 60 + startMin + addHours * 60 + addMins;

  const days = Math.floor(totalMinutes / (24 * 60));
  totalMinutes = totalMinutes % (24 * 60);          

  const outHour = Math.floor(totalMinutes / 60);
  const outMin  = totalMinutes % 60;

  const pad = n => String(n).padStart(2, "0");
  console.log(`Nieuw tijdstip: ${pad(outHour)}:${pad(outMin)}`);

  if (days === 0) {
    console.log("Dit tijdstip valt nog op dezelfde dag.");
  } else if (days === 1) {
    console.log("Dit is het tijdstip 1 dag later.");
  } else {
    console.log(`Dit is het tijdstip ${days} dagen later.`);
  }
}