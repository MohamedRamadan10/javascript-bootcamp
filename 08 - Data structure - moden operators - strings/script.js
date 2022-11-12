"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
	orderDelivery: function ({
		starterIndex = 0,
		mainIndex = 0,
		time = "12:00",
		address,
	}) {
		console.log(
			`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},
	orderPizza: function (ings, ...otherIngs) {
		console.log(ings);
		console.log(otherIngs);
	},
};

// Destructing array
let [main, secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [mainMenu, starterMenu] = restaurant.order(2, 0);
console.log(mainMenu, starterMenu);

// Nested arrays
const nested = [2, 4, [5, 6]];
const [x, , [y, z]] = nested;
console.log(x, y, z);

const [a = 3, b = 10, c] = [, 4, 50];
console.log(a, b, c);

// Destructiong object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: resturantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 1991,
	f = 1993;
const obj = { d: 4, f: 5, c: 10 };
console.log(obj);
({ d, f } = obj);
console.log(obj);

// Nested Objects
const {
	fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
	time: "22:30",
	address: "10th of ramadan, district 1",
	mainIndex: 2,
	starterIndex: 2,
});
restaurant.orderDelivery({
	address: "10th of ramadan, district 1",
});

// Spread Operator because on right side of =
const arr = [1, 2];
const badArr = [arr[0], arr[1], 3, 4];
console.log(badArr);

const newArr = [...arr, 3, 4];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Goncci"];
console.log(restaurant.mainMenu);
console.log(newMenu);

// Copy array and merge
const mainMenuCopy = [...restaurant.mainMenu];
const newMenuArr = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(newMenuArr);

// Iterables: arrays, strings, maps, sets. Not objects
const str = "Mohamed";
const letters = [...str, "-R", " ", "10"];
console.log(letters);

// const ingredients = [
// 	prompt(`let's make pasta! Ingredint 1?`),
// 	prompt(`Ingredint 2?`),
// 	prompt(`Ingredint 3?`),
// ];

// restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, ceo: "Ahmed Mohamed", founedIn: 1990 };
console.log(newRestaurant);

// Rest Pattern and Parameters because on left side of =
const [q, w, ...others] = [1, 2, 3, 4, 5, 6];
console.log(q, w, others);

const [pizza, risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const add = (...numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	console.log(sum);
};
add(2, 5);
add(2, 5, 5, 10);

const s = [100, 200, 300];
add(...s);

restaurant.orderPizza("mushrooms", "onion", "olives");

// Short Circuiting (&& and ||)
// || returns the first trutly value
// && returns the first fasley value
restaurant.guests = 20;

const guest1 = restaurant.guests ? restaurant.guests : 10;
console.log(guest1);

const guest2 = restaurant.guests || 5;
console.log(guest2);

if (restaurant.orderPizza) restaurant.orderPizza("mushrooms", "spinach");

restaurant.orderPasta && restaurant.orderPizza("mushrooms", "spinach");
