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
    Comparison => > < >= <= 
*/
let x = 10 + 15; // 25
x += 5; // 30
x++; // 31
x--; // 30
console.log(x);

// Challenge #1
let johnHeight = 1.95;
let johnMass = 92;
let markHeight = 1.69;
let markMass = 78;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
console.log(`John BMI: ${johnBMI} & Mark BMI: ${markBMI}`);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
