let date = document.querySelector("p.date");
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
let toDay = days[now.getDay()];
date.innerHTML = `${toDay}  ${now.toLocaleTimeString()}`;

//1

// function weather(response) {
//   let name = document.querySelector(".city");
//   name.innerHTML = response.data.name;
//   let temperature = Math.round(response.data.main.temp);
//   let tempCelc = document.querySelector(".degree span");
//   tempCelc.innerHTML = temperature;
// }

// function temp(event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let city = `${input.value}`;
//   let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//   axios.get(apiUrl).then(weather);
// }
// let search = document.querySelector("img.search");
// search.addEventListener("click", temp);

//2
let currentButton = document.querySelector(".current-temp");
currentButton.addEventListener("click", getCurrentPosition);
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(api);
}

function api(position) {
  let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=daily&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let city = document.querySelector(".city");
  city.innerHTML = response.data.timezone;
  let temperature = Math.round(response.data.current.temp);
  let tempCelc = document.querySelector(".degree span");
  tempCelc.innerHTML = temperature;
  console.log(response);
}
