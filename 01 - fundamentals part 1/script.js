"use strict";

/* Convenient names: camelCase => firstName, underscore => first_name, dollar sign => $firstname 
can't use word reserved by JS, start with uppercase or numbers, symbols */

// For cleaner code using descriptive variables
let prevJob = "UX/UI Designer";
let currentJob = "Front End Developer";
console.log("Prev Job: " + prevJob, "Current Job :" + currentJob);

// Data Types
/* Value => Object and Primitive
    7 Primitive
        Number          => Floating point number
        String          => Sequence of characters
        Boolean         => Logical type that can be only true or false
        Undefined       => Value taken by a variable that is not yet defined `Empty value`
        Null            => Also mean `Empty value`
        Symbol(ES2015)  => Value that is unique and cannot be changed
        BigIng(ES202)   => Larger integers than the number type can hold 
        
    "JS has dynamic typing"
*/

let javascript = true;
console.log(javascript);
console.log(typeof javascript);

// Dynamic typing
javascript = "Yes funny!!";
console.log(javascript);
console.log(typeof javascript);
console.log(typeof null); // Object => However this bug is never corrected for legacy reason, this should return null

// Declaring variables (var, let, const)
/*
    let   => can reassign
    const => can't reassign - declarations must be initialized 
*/

// Basic Operators
/*
    Math       => + - * / % ** 
    Assignment => += -= ++ -- ..etc
    Comparison => > < >= <= == != === !== 
*/
let x = 10 + 15; // 25
x += 5; // 30
x++; // 31
x--; // 30
console.log(x);

// Challenge #1
const johnHeight = 1.95;
const johnMass = 92;
const markHeight = 1.69;
const markMass = 78;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
console.log(`John BMI: ${johnBMI} & Mark BMI: ${markBMI}`);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Template literals
const birthYear = 1993;
const myInfo = `I'm an ${currentJob} and before an ${prevJob}. My current old is ${new Date().getFullYear()} - ${birthYear}
`;
console.log(myInfo);

// if / else statements
let century;
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);

// Challenge #2
if (johnBMI > markBMI) {
   console.log(
      `John BMI: ${Math.floor(johnBMI)} higher than Mark BMI: ${Math.floor(
         markBMI
      )}`
   );
} else {
   console.log(
      `Mark BMI: ${Math.floor(markBMI)} higher than John BMI: ${Math.floor(
         johnBMI
      )}`
   );
}

// Type conversion and coercion
/*
    Conversion
        => Number, String
        ex: console.log(Number('123'))

    Coercion
        => Js automatically convert type
        ex: console.log('20' - 15) // 5 -> number
            console.log('123' + 2) // 1232 -> string
*/

// Truthy & Falsely Values
/*
    5 false values => null, undefined, NaN, '', 0 

    Js using type coercion of Boolean only in the two case (Logical operator & Logical context)
*/

// Equality Operators: == vs. ===
/*
    == !=     => compare by value only (loose)
    === !==   => compare by value and type (strict) always use it
*/

// Boolean Logic & Logical Operators
/*
    => || true if one is true
    => && true if all true
    => !  inverts true/false
*/

// Challenge #3
const dolphinAverageScore = Math.floor((97 + 112 + 80) / 3);
const koalaAverageScore = Math.floor((109 + 95 + 50) / 3);
const minScore = 100;

console.log(
   `Dolphins team scores: ${dolphinAverageScore} and Koalas team scores: ${koalaAverageScore}`
);

if (
   dolphinAverageScore > koalaAverageScore &&
   dolphinAverageScore >= minScore
) {
   console.log(`Dolphins team scores: ${dolphinAverageScore} 🏆`);
} else if (
   koalaAverageScore > dolphinAverageScore &&
   koalaAverageScore >= minScore
) {
   console.log(`Koalas team scores: ${koalaAverageScore} 🏆`);
} else if (
   koalaAverageScore === dolphinAverageScore &&
   (koalaAverageScore && dolphinAverageScore) >= minScore
) {
   console.log("Draw!! Both teams score same average");
} else {
   console.log("No team win!!");
}

// The switch statement
const day = "Thursday";
switch (day) {
   case "Sunday":
      console.log("Go to gym");
      break;
   case "Monday":
   case "Tuesday":
   case "Wednesday":
      console.log("Coding");
   case "Thursday":
   case "Friday":
      console.log("Go to company to work");
      break;
   default:
      console.log("Invalid day");
      break;
}

// Ternary Operator
const ternaryOp = birthYear >= 1993 ? "Yes" : "No";
console.log(ternaryOp);

// Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
   `The bill was ${bill}, the tip was ${tip} and the total ${tip + bill}`
);
