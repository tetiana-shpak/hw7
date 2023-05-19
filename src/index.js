// let date = document.querySelector("p.date");
// let now = new Date();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let toDay = days[now.getDay()];
// date.innerHTML = `${toDay}  ${now.toLocaleTimeString()}`;

// 1;

// function weather(response) {
//   let name = document.querySelector(".city");
//   name.innerHTML = response.data.name;
//   let temperature = Math.round(response.data.main.temp);
//   let tempCelc = document.querySelector(".degree span");
//   tempCelc.innerHTML = temperature;
// }

function formatDate(timestemp) {
  let date = new Date(timestemp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function temp(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  let city = `${input.value}`;
  let apiKey = "a5bac64o95729tbfdbbf9236395b03aa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(weather);
}
let search = document.querySelector("img.search");
search.addEventListener("click", temp);

function weather(response) {
  console.log(response);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = response.data.condition.description;
  let temperatureElement = document.querySelector(".degree span");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let windElement = document.querySelector(".wind");
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity} %`;
  let dateElement = document.querySelector(".date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  let iconElement = document.querySelector(".icon");
  iconElement.setAttribute("src", `${response.data.condition.icon_url}`);
  iconElement.setAttribute("alt", `${response.data.condition.description}`);
}
