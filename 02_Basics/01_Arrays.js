
// Demonstrating Arrays in JavaScript

// 1. Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log("Initial Fruits Array:", fruits);

// 2. Accessing Array Elements
console.log("First Fruit:", fruits[0]); 

// 3. Array Properties
console.log("Array Length:", fruits.length); 

// 4. Adding and Removing Elements
// Adding elements to the end using push()
fruits.push("Orange");
console.log("After Push (Adding Orange):", fruits);

// Removing the last element using pop()
let lastFruit = fruits.pop();
console.log("After Pop (Removed):", lastFruit);
console.log("After Pop (Fruits):", fruits);

// Adding elements to the beginning using unshift()
fruits.unshift("Strawberry");
console.log("After Unshift (Adding Strawberry):", fruits);

// Removing the first element using shift()
let firstFruit = fruits.shift();
console.log("After Shift (Removed):", firstFruit);
console.log("After Shift (Fruits):", fruits);

// 5. Modifying Arrays
// Using splice to remove elements
fruits.splice(1, 1); // Remove 1 element from index 1
console.log("After Splice (Remove Banana):", fruits);

// Using splice to add elements
fruits.splice(1, 0, "Pineapple", "Grapes");
console.log("After Splice (Add Pineapple, Grapes):", fruits);

// 6. Concatenating Arrays
let moreFruits = ["Pear", "Peach"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated Fruits Array:", allFruits);

// 7. Slicing Arrays
let slicedFruits = allFruits.slice(1, 4); // From index 1 to 3
console.log("Sliced Fruits (1 to 4):", slicedFruits);

// 8. Searching Arrays
// Using indexOf to find an element's position
let mangoIndex = allFruits.indexOf("Mango");
console.log("Index of Mango:", mangoIndex);

// Using includes to check if an element exists
let hasPeach = allFruits.includes("Peach");
console.log("Has Peach:", hasPeach);

// 9. Sorting and Reversing Arrays
allFruits.sort();
console.log("Sorted Fruits:", allFruits);

allFruits.reverse();
console.log("Reversed Fruits:", allFruits);

// 10. Iterating Arrays
// Using forEach to iterate over array
console.log("Using forEach:");
allFruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}:`, fruit);
});

// 11. Mapping Arrays
let fruitLengths = allFruits.map(fruit => fruit.length);
console.log("Fruit Lengths (using map):", fruitLengths);

// 12. Filtering Arrays
let longNamedFruits = allFruits.filter(fruit => fruit.length > 5);
console.log("Long Named Fruits (more than 5 chars):", longNamedFruits);

// 13. Reducing Arrays
let totalLength = allFruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log("Total Length of All Fruits Names:", totalLength);

// 14. Joining Arrays into Strings
let fruitsString = allFruits.join(", ");
console.log("Fruits as String:", fruitsString);

// 15. 2D Arrays (Multidimensional Arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array (Matrix):", matrix);
console.log("Element at Row 1, Column 2:", matrix[1][2]);

// End of demonstration

