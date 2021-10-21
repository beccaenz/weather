// coded temperature
let apiKey = "eb13a97a3a23c49ef779ad1af428c680";
let city = "singapore";
let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;

function showTemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°F`;
}

axios.get(`${apiLink}&appid=${apiKey}`).then(showTemp);
// end coded temperature

//coded humidity

function showHumidity(response) {
  console.log(response.data);
  let humidityDisplay = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidityDisplay");
  humidityElement.innerHTML = `${humidityDisplay}%`;
}

axios.get(`${apiLink}&appid=${apiKey}`).then(showHumidity);

// end coded humidity

// coded wind

function showWind(response) {
  console.log(response.data);
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}%`;
}

axios.get(`${apiLink}&appid=${apiKey}`).then(showWind);

// end coded wind

// coded city

function showCity(response) {
  console.log(response.data);
  let city = response.data.name;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${city}`;
}

axios.get(`${apiLink}&appid=${apiKey}`).then(showCity);

// end coded city
