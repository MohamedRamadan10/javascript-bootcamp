"use strict";

function calcAge(birthYear) {
	const age = new Date().getFullYear() - birthYear;

	function printAge() {
		let output = `${firstName} is ${age} years old and born in ${birthYear}`;
		
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millennial = true;
			const firstName = "Ahmed";
			const str = `Oh, ${firstName} is a millennial`;
			
			console.log(str);

			function add(x, y) {
				return x + y;
			}

			output = "New Output!!";
		}
		console.log(millennial); // Run only out scope if var
		// console.log(add(10, 5)); // Run only in not stric mode
		console.log(output);
	}
	
	printAge();
	
	return age;
}

const firstName = "Mohamed";

calcAge(1993);
