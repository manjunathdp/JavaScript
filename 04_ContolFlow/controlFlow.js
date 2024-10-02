// control Statements Demonstration

// 1. if, else if, and else Conditional Statement
let age = 20;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

// 2. Ternary Operator
let canVote =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(canVote);

// 3. switch Statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// 4. for Loop
console.log("Numbers from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. while Loop
console.log("Numbers from 1 to 5 using while loop:");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 6. do...while Loop
console.log("Numbers from 1 to 5 using do...while loop:");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// 7. for...in Loop (for objects)
const person = { name: "Alice", age: 25, city: "New York" };
console.log("Person details using for...in loop:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 8. for...of Loop (for arrays)
const numbers = [10, 20, 30, 40];
console.log("Array elements using for...of loop:");
for (let num of numbers) {
  console.log(num);
}

// 9. break Statement (stops at number 3)
console.log("Break statement (stops at 3):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// 10. continue Statement (skips number 3)
console.log("Continue statement (skips 3):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// 11. try...catch for Exception Handling
try {
  let result = 10 / 0; // This won't throw an error, but shows infinity
  console.log("Result of division:", result);
  // Manually throwing an error
  throw new Error("Manual error thrown");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs no matter what.");
}

// 12. throw Statement Example
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  return "You are eligible.";
}

try {
  console.log(checkAge(16)); // Will throw an error
} catch (error) {
  console.log("Caught an error:", error.message);
}

// End of control statement demonstration
