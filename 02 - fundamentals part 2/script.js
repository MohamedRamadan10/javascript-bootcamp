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
const currentYear = new Date().getFullYear();
function calcAgeOne(birthYear) {
   return currentYear - birthYear;
}
console.log(calcAgeOne(1993));

// Expression
const calcAgeTwo = function (birthYear) {
   // Anonymous function
   return currentYear - birthYear;
};
console.log(calcAgeTwo(2000));

// Arrow Function
const calcAgeThree = (birthYear) => currentYear - birthYear;
console.log(calcAgeThree(2005));

const yearUntilRetirement = (birthYear, name) => {
   const age = currentYear - birthYear;
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

const calcBirthAge = (years) => currentYear - years;
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
   birthYear: 1993,
   job: "Front End Developer",
   friends: ["Ahmed", "Rama", "Sosa"],
   hasDriverLicense: true,
   calcAge: (birthYear) => currentYear - birthYear,
   calcAgeV1: function () {
      // console.log(this);
      return currentYear - this.birthYear;
   },
   calcAgeV2: function () {
      this.age = currentYear - this.birthYear;
      return this.age;
   },
   getSummary: function () {
      return `${this.name} is a ${this.calcAgeV1()} years old, he is ${
         this.job
      } and ${
         this.hasDriverLicense
            ? "has a driver license"
            : "hasn't a driver license"
      }`;
   },
};

// Dot vs. Bracket Notation
console.log(myInfo.name); // if not found return undefined
console.log(myInfo["job"]);

// const interestedIn = prompt(
//    "What do you know about me? Choose between name, age, job and friends"
// );
// if (myInfo[interestedIn]) {
//    console.log(myInfo[interestedIn]); // if use dot return undefined, use bracket notation because it is expression
// } else {
//    console.log("Wrong request!! Choose between name, age, job and friends");
// }

myInfo.location = "Egypt";
myInfo["email"] = "mr.uiux.dev@gmail.com";
console.log(
   `${myInfo.name} has ${myInfo.friends.length} friend and his best friend is called ${myInfo.friends[2]}`
);

// Object Methods
// console.log(myInfo["calcAge"]());
console.log(myInfo.calcAge(1993));
console.log(myInfo.calcAgeV1());
console.log(myInfo.calcAgeV2());
console.log(myInfo.getSummary());

// Challenge #3
const markInfo = {
   fullName: "Mark Miller",
   mass: 78,
   height: 1.69,
   calcBMI: function () {
      return this.mass / this.height ** 2;
   },
};
const JohnInfo = {
   fullName: "John Smith",
   mass: 92,
   height: 1.95,
   calcBMI: function () {
      return this.mass / this.height ** 2;
   },
};
const bmiHigher = () => {
   if (JohnInfo.calcBMI() > markInfo.calcBMI()) {
      return `${
         JohnInfo.fullName
      } BMI is ${JohnInfo.calcBMI()} higher than ${markInfo.calcBMI()} BMI is ${markInfo.calcBMI()}`;
   } else {
      return `${markInfo.fullName} BMI is ${markInfo.calcBMI()} higher than ${
         JohnInfo.fullName
      } BMI is ${JohnInfo.calcBMI()}`;
   }
};
console.log(bmiHigher());

// Iterate the for loop
for (let rep = 1; rep <= 10; rep++) {
   console.log(`Lifting weights repetitions ${rep} 🏋️‍♀️`);
}

// Looping Arrays, Breaking and Continuing
const infoArray = [
   "Mohamed",
   true,
   currentYear - 1993,
   "Front End",
   ["Ahmed", "Islam"],
];
const types = [];
for (let i = 0; i < infoArray.length; i++) {
   console.log(infoArray[i], typeof infoArray[i]);
   // types[i] = typeof infoArray[i];
   types.push(typeof infoArray[i]);
}
console.log(types);

let totalBillTips = [];
for (let i = 0; i < bills.length; i++) {
   totalBillTips.push(bills[i] + tips[i]);
}
console.log(totalBillTips);

// Continue and break
for (let i = 0; i < infoArray.length; i++) {
   if (typeof infoArray[i] !== "string") continue;
   console.log(infoArray[i]);
}

for (let i = 0; i < infoArray.length; i++) {
   if (typeof infoArray[i] === "number") break;
   console.log(infoArray[i]);
}

// Looping Backwards and Loops in Loops
console.log("<!-- Backwards -->");
for (let i = infoArray.length - 1; i >= 0; i--) {
   console.log(i, infoArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
   console.log(`--> Starting exercise ${exercise}`);

   for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
   }
}
