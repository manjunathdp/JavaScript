let num = 4.7;

console.log("Math.round:", Math.round(num));  // 5
console.log("Math.ceil:", Math.ceil(num));    // 5
console.log("Math.floor:", Math.floor(num));  // 4
console.log("Math.abs:", Math.abs(-42));      // 42
console.log("Math.pow:", Math.pow(2, 3));     // 8
console.log("Math.sqrt:", Math.sqrt(16));     // 4
console.log("Math.max:", Math.max(10, 20, 30)); // 30
console.log("Math.min:", Math.min(10, 20, 30)); // 10
console.log("Math.random:", Math.random());     // Random number between 0 and 1
console.log("Math.PI:", Math.PI);             // 3.141592653589793
console.log("Math.log10:", Math.log10(100));  // 2
console.log("Math.sin(π/2):", Math.sin(Math.PI / 2)); // 1

//Range of random value
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1))+min);
