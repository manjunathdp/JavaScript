/*

function to convert to number => "33"

Number("33") 	value will be 33

Number("33abc") value will be NaN (Not a Number)

Number(true) => 1

Number(undefined) => NaN

Number(null) => 0



to Boolean()

1 => true; 

0 => false;

"" =>false;

"value" =>true



to String()

String(123) => "123"


*/ 





let a = "417"

console.log(a);

console.log(typeof(a));

console.log(typeof Number(a));

console.log(Number(true));

console.log(Boolean(0));

console.log(Boolean(""));

console.log(null);

// *****************Oprations*****************
// Arithmetic Operations
console.log("Arithmetic Operations:");
console.log("2 + 2 =", 2 + 2);           // Addition: 4
console.log("2 - 2 =", 2 - 2);           // Subtraction: 0
console.log("2 * 2 =", 2 * 2);           // Multiplication: 4
console.log("2 / 2 =", 2 / 2);           // Division: 1
console.log("2 % 2 =", 2 % 2);           // Modulus (remainder): 0
console.log("2 ** 3 =", 2 ** 3);         // Exponentiation (power): 8

// String Concatenation
console.log("\nString Concatenation:");
let str1 = "abc";
let str2 = "def";
let str3 = str1 + str2;
console.log("str1 + str2 =", str3);      // Concatenation: "abcdef"

// Type Coercion
console.log("\nType Coercion:");
console.log('"1" + 2 =', "1" + 2);       // "12" (String concatenation)
console.log('1 + "2" =', 1 + "2");       // "12" (String concatenation)
console.log('"1" + 2 + 2 =', "1" + 2 + 2); // "122" (First "1" + 2 results in "12", then "12" + 2 results in "122")
console.log('1 + 2 + "2" =', 1 + 2 + "2"); // "32" (First 1 + 2 results in 3, then 3 + "2" results in "32")

// Increment Operations
console.log("\nIncrement Operations:");
let incr = 5;
console.log("Initial incr:", incr);

console.log("Prefix Increment (++incr):", ++incr);  // Prefix Increment: 6
console.log("Postfix Increment (incr++):", incr++);  // Postfix Increment: 6
console.log("Value after Postfix Increment:", incr); // Value after Postfix Increment: 7





