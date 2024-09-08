
// JavaScript Functions Demonstration

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Function Expression
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(sayGoodbye("Bob")); // "Goodbye, Bob!"

// 3. Arrow Function
const add = (a, b) => a + b;
console.log("Addition using Arrow Function:", add(5, 3)); // 8

// 4. Default Parameters
function introduce(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(introduce()); // "Hello, Guest!"
console.log(introduce("Charlie")); // "Hello, Charlie!"

// 5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of numbers:", sum(1, 2, 3, 4)); // 10

// 6. Returning Values from Functions
function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 5);
console.log("Multiplication Result:", result); // 20

// 7. Anonymous Function
setTimeout(function() {
    console.log("This runs after 2 seconds (anonymous function).");
}, 2000);

// 8. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed immediately!");
})();

// 9. Function Scope
function showScope() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible inside the function
}
showScope();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// 10. Closures
function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter++;
        return counter;
    };
}
const incrementCounter = outerFunction();
console.log("Closure 1:", incrementCounter()); // 1
console.log("Closure 2:", incrementCounter()); // 2
console.log("Closure 3:", incrementCounter()); // 3

// 11. Higher-Order Functions
function greetSomeone(fn, name) {
    console.log(fn(name));
}
greetSomeone(greet, "Daisy"); // "Hello, Daisy!"

// 12. Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // "Data received" (after 1 second)

// 13. Arrow Function and "this" Context
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet(); // "Hello, John"

const personArrow = {
    name: "Emily",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
};
personArrow.greet(); // "Hello, undefined" (Arrow functions don't bind `this`)

// 14. Recursive Function - Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // 120

// 15. Function as a Constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log("Car Object using Constructor:", myCar);

// 16. Function Hoisting
hoistedFunction(); // This works because of hoisting

function hoistedFunction() {
    console.log("This function is hoisted!");
}

// 17. First-Class Functions: Storing in Data Structures
const functionArray = [
    greet,
    sayGoodbye,
    (name) => `Welcome, ${name}!`
];

console.log(functionArray[0]("Leo")); // "Hello, Leo!"
console.log(functionArray[1]("Mia")); // "Goodbye, Mia!"
console.log(functionArray[2]("Noah")); // "Welcome, Noah!"

// End of demonstration

