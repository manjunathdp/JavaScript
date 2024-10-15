const form = document.querySelector(".container");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.getElementById("result");
  if (isNaN(height) || height === "" || height <= 0) {
    result.innerHTML = `Invalid input check Height: ${height} and Weight: ${weight}`;
  } else if (isNaN(weight) || weight === "" || weight <= 0) {
    result.innerHTML = `Invalid input check Height: ${height} and Weight: ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000);
    result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  }
});
