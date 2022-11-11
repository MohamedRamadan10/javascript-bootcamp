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

console.log(this); // window

const setName = function (name) {
	console.log(name);
	console.log(this); // undefinded
};

const setNameArr = (name) => {
	console.log(name);
	console.log(this); // widow
};

setName("Islam");
setNameArr("Mostafa");

const mohamed = {
	year: 1993,
	calcAge: function () {
		console.log(this);
		console.log(new Date().getFullYear() - this.year);
	},
};

mohamed.calcAge();

const ahmed = {
	year: 1980,
};

ahmed.calcAge = mohamed.calcAge;
ahmed.calcAge();

const ola = {
	firstName: "Ola",
	year: 1995,
	calcAge: function () {
		console.log(new Date().getFullYear() - this.year);
		console.log(this);

		const self = this;
		const isMillenial = function () {
			console.log(this);
			console.log(self);

			if (self.year >= 1981 && self.year <= 1996) {
				console.log(true);
			}
		};

		isMillenial();
	},
};

ola.calcAge();

const mohamedOne = {
	firstName: "Moahmed",
	lastName: "Ramadan",
	age: 29,
	family: ["Ola", "Shimaa"],
};

const mohamedTwo = mohamedOne;
const mohamedThree = Object.assign({}, mohamedTwo);

mohamedThree.firstName = "Ahmed";

console.log(mohamedTwo, mohamedThree);

mohamedThree.family.push("Malek");
mohamedThree.family.push("Youssef");

console.log(mohamedTwo, mohamedThree);
