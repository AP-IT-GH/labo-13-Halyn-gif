"use strict";
console.log("JS loaded", import.meta.url);

const jaar=2000;
let isLeap=false;
 
if (jaar % 4 === 0){
  if (jaar % 100===0) isLeap = (jaar % 400 ===0)
    else isLeap = true;
}
console.log(isLeap ? `${jaar} is een schrikkeljaar`
                   : `${jaar} is geen schrikkeljaar`);