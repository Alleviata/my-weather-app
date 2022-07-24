let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let dayOfMonth = now.getDate();
let year = now.getFullYear();
let hours = ("0" + now.getHours()).substr(-2);
let minutes = ("0" + now.getMinutes()).substr(-2);
let formatDate = `${day}, ${month} ${dayOfMonth}  ${year}, ${hours}:${minutes}`;
let currentDate = document.querySelector("#currDate");
currentDate.innerHTML = formatDate;

function showTemperature(response) {
  let currTemp = document.querySelector("#currTemp");
  currTemp.innerHTML = response.data.main.temp;
  let currHum = document.querySelector("#currHumidity");
  currHum.innerHTML = "Humidity " + response.data.main.humidity + "%";
  let currWind = document.querySelector("#currWindSpeed");
  currWind.innerHTML = "Wind " + response.data.wind.speed + " m/s";
}
function showTemperatureAndCity(response) {
  let currCity = response.data.name;
  let city = document.querySelector("#currCity");
  city.innerHTML = currCity;
  let currTemp = document.querySelector("#currTemp");
  currTemp.innerHTML = response.data.main.temp;
  let currHum = document.querySelector("#currHumidity");
  currHum.innerHTML = "Humidity " + response.data.main.humidity + "%";
  let currWind = document.querySelector("#currWindSpeed");
  currWind.innerHTML = "Wind " + response.data.wind.speed + " m/s";
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#currCity");
  let input = document.querySelector("#city-input");
  city.innerHTML = input.value;
  let apiKey = "7b6082b8fe526faa7a3e5f9d6dae8769";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  console.log(position.coords.latitude + " " + position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7b6082b8fe526faa7a3e5f9d6dae8769";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperatureAndCity);
}

function changeLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", changeCity);

let currLocBtn = document.querySelector("#currButton");
currLocBtn.addEventListener("click", changeLoc);
/*function changeToCelcius(event) {
  event.preventDefault();
  let currTemp = document.querySelector("#currTemp");
  currTemp.innerHTML = "19";
}

function changeToFahren(event) {
  event.preventDefault();
  let currTemp = document.querySelector("#currTemp");
  currTemp.innerHTML = "60";
}

let celsiusUnit = document.querySelector("#celsiusUnit");
celsiusUnit.addEventListener("click", changeToCelcius);

let fahrenUnit = document.querySelector("#fahrenUnit");
fahrenUnit.addEventListener("click", changeToFahren);*/
