let now = new Date(); 
console.log("Current Date and Time:", now);

let specificDate = new Date(2024, 8, 5, 14, 45); // September 5, 2024, 14:45:00
console.log("Specific Date:", specificDate);

console.log("Year:", now.getFullYear()); // e.g., 2024
console.log("Month:", now.getMonth());   // e.g., 8 (September)
console.log("Day:", now.getDate());      // e.g., 5
console.log("Day of the Week:", now.getDay()); // e.g., 4 (Thursday)
console.log("Hours:", now.getHours());   // e.g., 14
console.log("Minutes:", now.getMinutes()); // e.g., 45

// Formatting examples:
console.log("Date String:", now.toDateString()); // e.g., "Thu Sep 05 2024"
console.log("Time String:", now.toTimeString()); // e.g., "14:45:00 GMT+0000 (UTC)"
console.log("Locale Date:", now.toLocaleDateString()); // e.g., "9/5/2024"
console.log("ISO String:", now.toISOString()); // e.g., "2024-09-05T14:45:00.000Z"
