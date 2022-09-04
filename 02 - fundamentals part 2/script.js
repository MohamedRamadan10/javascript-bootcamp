"use strict";

// Functions
/*
    Parameters are optional
*/
function fruitPieces(num) {
   return num * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = fruitPieces(apples);
   const orangePieces = fruitPieces(oranges);
   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

   return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs. Expressions
// Declaration
function calcAgeOne(birthYear) {
   return new Date().getFullYear() - birthYear;
}
console.log(calcAgeOne(1993));

// Expression
const calcAgeTwo = function (birthYear) {
   // Anonymous function
   return new Date().getFullYear() - birthYear;
};
console.log(calcAgeTwo(2000));

// Arrow Function
const calcAgeThree = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calcAgeThree(2005));

const yearUntilRetirement = (birthYear, name) => {
   const age = new Date().getFullYear() - birthYear;
   const retirement = 65 - age;

   return `I'm ${name} and I'll retire in ${retirement} years`;
};
console.log(yearUntilRetirement(1993, "Mohamed"));

// Challenge #1
const calcAvg = (numOne, numTwo, numThree) => (numOne + numTwo + numThree) / 3;

let dolphinScore = calcAvg(44, 23, 71);
let koalaScore = calcAvg(65, 54, 49);

const checkWinner = (dolphinAvg, koalaAvg) => {
   if (dolphinAvg >= 2 * koalaAvg) {
      console.log(
         `Dolphins team scores ${dolphinAvg} higher than Koalas team scores ${koalaAvg}`
      );
   } else if (koalaAvg >= 2 * dolphinAvg) {
      console.log(
         `Koalas team scores ${koalaAvg} higher than Dolphins team scores ${dolphinAvg}`
      );
   } else {
      console.log(`No team win!!`);
   }
};

checkWinner(dolphinScore, koalaScore);

dolphinScore = calcAvg(85, 54, 41);
koalaScore = calcAvg(23, 34, 27);
checkWinner(dolphinScore, koalaScore);
