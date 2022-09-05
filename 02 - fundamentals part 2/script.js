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

// Array
const friends = ["Mohamed", "Ahmed", "Brahmi", "Reata"];
// Another assign
// const friends = new Array("Mohamed", "Ahmed", "Brahmi", "Reata");
console.log(friends);
console.log(friends[friends.length - 1]);

friends[2] = "Mastaba";
console.log(friends);

const calcBirthAge = (years) => new Date().getFullYear() - years;
const years = [1993, 2000, 2005, 2010];

const ages = [
   calcBirthAge(years[0]),
   calcBirthAge(years[2]),
   calcBirthAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Methods
const newLength = friends.push("Racy");
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Add element to the begin of array
console.log(friends);

const popped = friends.pop(); // Remove the last element
console.log(popped);
console.log(friends);

friends.shift(); // Remove the first element
console.log(friends);

console.log(friends.indexOf("ss")); // return index number and if not found return -1

console.log(friends.includes("Ahmed")); // return true / false and using Equality strict

// Challenge #2
const calcTips = (bill) =>
   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 444];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

// Objects
const myInfo = {
   name: "Mohamed Ramadan",
   age: new Date().getFullYear() - 1993,
   job: "Front End Developer",
   friends: ["Ahmed", "Rama", "Sosa"],
};
// Dot vs. Bracket Notation

