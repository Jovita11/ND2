let currentTemperature = 10;

function updateTemperature() {
  const mercury = document.getElementById('mercury');
  const temperatureDisplay = document.getElementById('temperature');
  const body = document.body;

  mercury.style.height = `${(currentTemperature + 30) * 3.32}px`;
  temperatureDisplay.textContent = `${currentTemperature}°C`;

  if (currentTemperature < 0) {
    body.style.background = 'linear-gradient(45deg,#9fd8df,#2653EE)';
    document.getElementById('thermometer').style.backgroundColor = '#9fd8df';
    mercury.style.backgroundColor = '#3498db';
  } else {
    body.style.background = 'linear-gradient(45deg,#F47A08,#F06666)';
    document.getElementById('thermometer').style.backgroundColor = '#ccc';
    mercury.style.backgroundColor = 'red';
  }
}

function increaseTemperature() {
  if (currentTemperature < -30) {
    currentTemperature = 40;
  }
  currentTemperature += 2;
  updateTemperature();
}

function decreaseTemperature() {
  if (currentTemperature > 40) {
    currentTemperature = -30;
  }
  currentTemperature -= 2;
  updateTemperature();
}

updateTemperature();