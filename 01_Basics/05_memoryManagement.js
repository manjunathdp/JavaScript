let userOne = { email: "user@google.com", upi: "user@upi" };
let userTwo = userOne; // userTwo points to the same object in the heap

let myYouTubeName = "myChannel"; // Primitive value stored in stack
let anotherName = myYouTubeName; // Another stack variable with the same value

// Logging the values
console.log("userOne:", userOne);       // { email: "user@google.com", upi: "user@upi" }
console.log("userTwo:", userTwo);       // { email: "user@google.com", upi: "user@upi" }
console.log("myYouTubeName:", myYouTubeName); // "myChannel"
console.log("anotherName:", anotherName);     // "myChannel"

// Modifying the object through userTwo
userTwo.email = "newemail@google.com";

// Both userOne and userTwo reflect the change
console.log("After modifying userTwo:");
console.log("userOne:", userOne); // { email: "newemail@google.com", upi: "user@upi" }
console.log("userTwo:", userTwo); // { email: "newemail@google.com", upi: "user@upi" }

// Modifying the primitive variable myYouTubeName
anotherName = "newChannelName";

// Only anotherName is updated, myYouTubeName remains the same
console.log("After modifying anotherName:");
console.log("myYouTubeName:", myYouTubeName); // "myChannel"
console.log("anotherName:", anotherName);     // "newChannelName"
