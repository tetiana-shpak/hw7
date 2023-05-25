function formatDate(timestemp) {
  let date = new Date(timestemp);
  console.log(date);
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

function search(city) {
  let apiKey = "a5bac64o95729tbfdbbf9236395b03aa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weatherDisplay);
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  search(input.value);
}

function weatherDisplay(response) {
  console.log(response);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = response.data.condition.description;
  let temperatureElement = document.querySelector(".degree .temp");
  celsiusTemperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
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

function calculateFahrenheit(event) {
  event.preventDefault();
  celsiusElement.classList.remove("active");
  fahrenheitElement.classList.add("active");
  let temperatureElement = document.querySelector(".degree .temp");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsius(event) {
  event.preventDefault();
  celsiusElement.classList.add("active");
  fahrenheitElement.classList.remove("active");
  let temperatureElement = document.querySelector(".degree .temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let searchElement = document.querySelector("img.search");
searchElement.addEventListener("click", handleSubmit);

let fahrenheitElement = document.querySelector(".fahrenheit");
fahrenheitElement.addEventListener("click", calculateFahrenheit);

let celsiusElement = document.querySelector(".celsius");
celsiusElement.addEventListener("click", showCelsius);

let celsiusTemperature = null;
