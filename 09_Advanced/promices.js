// 1. Simple Promise that resolves after 1 second
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 1 is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise One consumed");
});

// 2. Another simple Promise that resolves after 1 second
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise Two consumed");
});

// 3. Promise that resolves with an object
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("Promise Three resolved with:", user);
});

// 4. Promise that may reject depending on the error flag
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Change to true to see rejection
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("Promise Four resolved with:", user);
    return user.username;
  })
  .then((username) => {
    console.log("Extracted username:", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise Four is either resolved or rejected"));

// 5. Using async/await to consume a promise
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Change to true to trigger error
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("Promise Five resolved with:", response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// 6. Fetch API data from GitHub using promises
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json(); // Parsing the response as JSON
  })
  .then((data) => {
    console.log("Fetched GitHub user data:", data);
  })
  .catch((error) => console.log("Fetch error:", error));

// 7. Promise.all example: wait for multiple promises
Promise.all([promiseOne, promiseThree])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.log("One of the promises rejected:", error);
  });
