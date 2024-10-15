const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedColor = button.getAttribute("colorValue");
    document.body.style.backgroundColor = selectedColor;
  });
});
