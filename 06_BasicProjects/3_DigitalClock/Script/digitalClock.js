function updateClock() {
    const clock = document.getElementById('clock')
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}

// Update the clock immediately and then every second

setInterval(updateClock, 1000);
