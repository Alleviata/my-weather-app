function showTemperature(response) {
  console.log(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.main.temp;
}

function showPosition(position) {
  console.log(position.coords.latitude + " " + position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7b6082b8fe526faa7a3e5f9d6dae8769";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

getCurrentPosition();
