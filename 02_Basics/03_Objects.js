// JavaScript Object Functions Demonstration

// 1. Object.assign() - Merging objects
let person = { name: "Alice", age: 25 };
let job = { title: "Developer", company: "TechCorp" };
let contact = { email: "alice@example.com", phone: "123-456-7890" };

let mergedPerson = Object.assign({}, person, job, contact);
console.log("Merged Object:", mergedPerson);

// 2. Object.keys() - Get an array of object keys
console.log("Keys of Merged Person:", Object.keys(mergedPerson));

// 3. Object.values() - Get an array of object values
console.log("Values of Merged Person:", Object.values(mergedPerson));

// 4. Object.entries() - Get key-value pairs as an array
console.log("Entries of Merged Person:", Object.entries(mergedPerson));

// 5. Object.fromEntries() - Convert an array of key-value pairs into an object
let entries = [['city', 'New York'], ['country', 'USA']];
let location = Object.fromEntries(entries);
console.log("Object from Entries:", location);

// 6. Object.hasOwnProperty() - Check if object has a specific property
console.log("Has 'name' property?", mergedPerson.hasOwnProperty('name'));
console.log("Has 'salary' property?", mergedPerson.hasOwnProperty('salary'));

// 7. Object.freeze() - Freezing the object to prevent modifications
Object.freeze(mergedPerson);
mergedPerson.age = 30; // This will not modify the object since it's frozen
console.log("After Freezing, Age:", mergedPerson.age); // Still 25

// 8. Object.seal() - Sealing the object to prevent adding/removing properties but allow modifications
let car = { brand: "Toyota", year: 2020 };
Object.seal(car);
car.year = 2021; // This modification is allowed
delete car.brand; // This deletion is not allowed
console.log("After Sealing:", car); // { brand: "Toyota", year: 2021 }

// 9. Object.is() - Comparing values
console.log("Is 25 equal to 25?", Object.is(25, 25)); // true
console.log("Is NaN equal to NaN?", Object.is(NaN, NaN)); // true
console.log("Is 0 equal to -0?", Object.is(0, -0)); // false

// 10. Object.defineProperty() - Define a non-writable property
let book = {};
Object.defineProperty(book, 'title', {
    value: 'JavaScript Guide',
    writable: false
});
console.log("Book Title:", book.title);
book.title = "New Title"; // This won't change the title since writable is false
console.log("After Trying to Modify Title:", book.title);

// 11. Object.defineProperties() - Define multiple properties with different descriptors
Object.defineProperties(book, {
    author: {
        value: 'John Doe',
        writable: true
    },
    pages: {
        value: 300,
        enumerable: true
    }
});
console.log("Book with Multiple Properties:", book);

// 12. Object.getPrototypeOf() - Get the prototype of an object
let prototypeOfPerson = Object.getPrototypeOf(person);
console.log("Prototype of Person Object:", prototypeOfPerson);

// 13. Object.setPrototypeOf() - Set the prototype of an object
let animal = { speak() { console.log("Animal sound"); } };
Object.setPrototypeOf(person, animal);
person.speak(); // Person now has the speak method from the animal prototype

// 14. Object.preventExtensions() - Prevent new properties from being added
let user = { name: "Bob" };
Object.preventExtensions(user);
user.age = 30; // Cannot add new property since it's non-extensible
console.log("After Preventing Extensions:", user);

// 15. Checking object mutability
console.log("Is Merged Person Frozen?", Object.isFrozen(mergedPerson)); // true
console.log("Is Car Sealed?", Object.isSealed(car)); // true
console.log("Is User Extensible?", Object.isExtensible(user)); // false

