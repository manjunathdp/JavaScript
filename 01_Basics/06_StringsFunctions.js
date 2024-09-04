
let greeting = "  Hello, JavaScript!  ";

// Using various string methods
console.log(greeting.length);           // 21 (including leading/trailing spaces)
console.log(greeting.trim().length);    // 19 (after trimming spaces)
console.log(greeting.charAt(1));        // "H"
console.log(greeting.indexOf("Java"));  // 8
console.log(greeting.includes("Script")); // true
console.log(greeting.toUpperCase());    // "  HELLO, JAVASCRIPT!  "
console.log(greeting.toLowerCase());    // "  hello, javascript!  "
console.log(greeting.substring(8, 18)); // "JavaScript"
console.log(greeting.slice(-10, -1));   // "JavaScript"
console.log(greeting.split(", "));      // ["  Hello", "JavaScript!  "]
console.log(greeting.replace("Hello", "Hi")); // "  Hi, JavaScript!  "
console.log(greeting.trim().concat(" is great!")); // "Hello, JavaScript! is great!"
console.log(greeting.trim().repeat(2)); // "Hello, JavaScript!Hello, JavaScript!"

