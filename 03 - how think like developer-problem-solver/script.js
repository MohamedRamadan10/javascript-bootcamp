"use strict";

// Simple problem
/*
    We work for a company building a smart home thermometer.
    Our most recent task is this: "Given an array of temperatures of one day,
    calculate the temperature amplitude. Keep in mind that sometimes there
    might be a sensor error"
*/

const temperatures = [-3, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*
    (1) Understanding the problem
        - What's the temperature amplitude?
        - How to compute max and min temperatures?
        - What's sensor error? And what do do?

    (2) Breaking up into sub-problems
        - How to ignore errors?
        - Find max value in the temp array
        - Find min value in the temp array
        - Subtract min from max (amplitude) and return it 
*/

const calcAmplitude = function (temps) {
   let max = temps[0];
   let min = temps[0];

   for (let i = 0; i < temps.length; i++) {
      const currTemp = temps[i];
      if (typeof currTemp !== "number") continue;
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
   }

   return max - min;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

//  Function should return 2 arrays of temps
/*
    (1) Understanding the problem
        - With 2 arrays, should we implement functionality twice? No just merge them!

    (2) Breaking up into sub-problems
        - Merge two arrays?
*/
const calcAmplitudeNew = function (t1, t2) {
   const temps = t1.concat(t2);

   let max = temps[0];
   let min = temps[0];

   for (let i = 0; i < temps.length; i++) {
      const currTemp = temps[i];
      if (typeof currTemp !== "number") continue;
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
   }

   return max - min;
};

const amplitudeNew = calcAmplitudeNew(
   [-3, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5],
   [10, 15, 16]
);
console.log(amplitudeNew);

// Challenge
/*
    (1) Understanding the problem
        - Array transformed to string, separated by ...
        - Wha is the X days? index + 1

    (2) Breaking up into sub-problems
        - Transform array into string
        - Transform each element to string with C
        - String needs to contain day (index + 1)
        - Add ... between element and start end of String
        - Log string to console
*/
const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
   let str = "";
   for (let i = 0; i < arr.length; i++) {
      str += `${arr[i]} C in ${i + 1} days...`;
   }
   console.log("..." + str);
};

printForecast(dataOne);
