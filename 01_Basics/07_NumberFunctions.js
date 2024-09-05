let num = 123.456;

// Using number functions
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString(16)); // "7b" (hexadecimal representation)
console.log(parseInt("1010", 2)); // 10 (binary to decimal)
console.log(parseFloat("123.45abc")); // 123.45
console.log(isNaN("abc")); // true
console.log(isFinite(123)); // true
console.log(Number.isInteger(10)); // true
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
