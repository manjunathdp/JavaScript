
// JavaScript Objects Demonstration

// 1. Creating Objects using Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ['Reading', 'Cycling', 'Hiking']
};

console.log("Person Object:", person);

// 2. Accessing Object Properties
console.log("First Name:", person.firstName);  // Using dot notation
console.log("Last Name:", person['lastName']); // Using bracket notation

// 3. Modifying Object Properties
person.age = 31; // Modifying existing property
person.occupation = "Software Developer"; // Adding a new property
console.log("Updated Person Object:", person);

// 4. Object Methods
person.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};
console.log("Full Name:", person.fullName());

// 5. Deleting Object Properties
delete person.hobbies; // Removing the hobbies property
console.log("After Deleting Hobbies:", person);

// 6. Iterating Over Object Properties using for...in Loop
console.log("Iterating over Person Object:");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// 7. Using Object.keys(), Object.values(), and Object.entries()
console.log("Object Keys:", Object.keys(person));
console.log("Object Values:", Object.values(person));
console.log("Object Entries:");
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// 8. Using Constructor Function to Create Objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
        return `${this.make} ${this.model} (${this.year})`;
    };
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log("Car Object:", myCar.displayInfo());

// 9. Using Object.create()
let proto = {
    describe: function() {
        return `A ${this.color} ${this.type}.`;
    }
};

let apple = Object.create(proto, {
    color: { value: 'red' },
    type: { value: 'apple' }
});

console.log("Apple Description:", apple.describe());

// 10. Object Spread Operator
let personClone = { ...person };
console.log("Cloned Person:", personClone);

let updatedPerson = { ...person, age: 32 };
console.log("Updated Person with Spread:", updatedPerson);

// Merging Objects using Object.assign()

// Initial objects
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let job = {
    occupation: "Software Developer",
    company: "TechCorp"
};

let contact = {
    email: "john.doe@example.com",
    phone: "123-456-7890"
};

// Merging objects into a new object
let mergedObject = Object.assign({}, person1, job, contact);
console.log("Merged Object:", mergedObject);

// Modifying the merged object won't affect the original objects
mergedObject.age = 31;
console.log("Modified Merged Object Age:", mergedObject.age);
console.log("Original Person Object Age:", person1.age);  // Unchanged

// You can also merge objects into one of the existing objects
Object.assign(person1, job, contact);
console.log("Person Object after Merging:", person1);

// Note that Object.assign performs a shallow copy.
let address = {
    homeAddress: {
        street: "123 Main St",
        city: "Metropolis",
        zip: "12345"
    }
};

let additionalInfo = {
    homeAddress: {
        state: "NY",
        country: "USA"
    }
};

// Merging address and additionalInfo (shallow copy)
let mergedAddress = Object.assign({}, address, additionalInfo);
console.log("Merged Address:", mergedAddress);

// Since it's a shallow copy, the inner objects are shared by reference
mergedAddress.homeAddress.street = "456 Elm St";
console.log("Updated Merged Address:", mergedAddress.homeAddress.street);
console.log("Original Address After Shallow Merge:", address.homeAddress.street);  // Also updated due to shallow copy

