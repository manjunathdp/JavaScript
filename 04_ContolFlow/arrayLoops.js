// Array Loops Demonstration

const fruits = ["Apple", "Banana", "Mango", "Orange"];

// 1. Standard for Loop
console.log("Standard for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. for...of Loop
console.log("for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. forEach Loop
console.log("forEach loop:");
fruits.forEach(function (fruit, index) {
  console.log(`Index ${index}: ${fruit}`);
});

// 4. while Loop
console.log("while loop:");
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// 5. do...while Loop
console.log("do...while loop:");
let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// 6. for...in Loop (Not Recommended for Arrays)
console.log("for...in loop:");
for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

// 7. Using map() to Loop and Transform Array
console.log("map() loop (creates a new array):");
const uppercasedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits); // ["APPLE", "BANANA", "MANGO", "ORANGE"]

// 8. Using filter() to Loop and Filter Array
console.log("filter() loop (creates a filtered array):");
const filteredFruits = fruits.filter(function (fruit) {
  return fruit.startsWith("M");
});
console.log(filteredFruits); // ["Mango"]

// 9. Using reduce() to Accumulate Array Values
console.log("reduce() loop (accumulates values):");
const fruitString = fruits.reduce(function (acc, fruit) {
  return acc + fruit + ", ";
}, "Fruits: ");
console.log(fruitString); // "Fruits: Apple, Banana, Mango, Orange, "
