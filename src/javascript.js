//goals
// create a search
// add in the full week with upated data
//f or c option - create link

//ideas
// night theme when current location geo location is after a certain time
// use spans instead of divs??

// need to get search engine, finish hw 4 and hw 5, icon working, geolocation??

// moon cycles??

//watch hw 5 solution

//if statement for the current temperature vs searched temp

//country sys - sunrise and sunset

//forecast api

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "eb13a97a3a23c49ef779ad1af428c680";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayForecast);
}

//forecast api

//search form
function displayWeather(response) {
  let tempElement = document.querySelector("#searchTemp");
  let humidityElement = document.querySelector("#humidityDisplay");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let descriptionWeatherElement = document.querySelector("#descriptionWeather");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");

  temperature = response.data.main.temp;
  fahrenheitTemp = response.data.main.temp;

  tempElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionWeatherElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  countryElement.innerHTML = response.data.sys.country;
  console.log(response);
  //log coordinates
  getForecast(response.data.coord);
  //log coordinates
}

function search(city) {
  let apiKey = "eb13a97a3a23c49ef779ad1af428c680";
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiLink).then(displayWeather);
}

function submitTemp(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-text-input");
  search(cityElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitTemp);

// geo location
function showTempGeo(response) {
  let tempGeo = Math.round(response.data.main.temp);
  let h5 = document.querySelector("h5");
  h5.innerHTML = `The temp of your current location is ${tempGeo}... creepy`;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "eb13a97a3a23c49ef779ad1af428c680";
  let h4 = document.querySelector("h4");
  h4.innerHTML = `your latitude is ${latitude} and your longitude is ${longitude}`;
  let apiUrlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrlGeo).then(showTempGeo);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

//geo

//degree conversion
function showCelsiusTemp(event) {
  event.preventDefault();
  let searchTempElement = document.querySelector("#searchTemp");
  fahrenheitBlueLink.classList.remove("activeLink");
  celsiusBlueLink.classList.add("activeLink");
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  searchTempElement.innerHTML = Math.round(celsiusTemp);
}

function showfahrenheitTemp(event) {
  event.preventDefault();
  let searchTempElement = document.querySelector("#searchTemp");
  fahrenheitBlueLink.classList.add("activeLink");
  celsiusBlueLink.classList.remove("activeLink");
  searchTempElement.innerHTML = Math.round(fahrenheitTemp);
}

let celsiusBlueLink = document.querySelector("#celsiusConversion");
celsiusBlueLink.addEventListener("click", showCelsiusTemp);

let fahrenheitBlueLink = document.querySelector("#fahrenheitConversion");
fahrenheitBlueLink.addEventListener("click", showfahrenheitTemp);

let fahrenheitTemp = null;

//degree conversion

//date
let Now = new Date();
let dateElement = document.querySelector("#date");
let date = Now.getDate();
let hour = Now.getHours();
let minutes = Now.getMinutes();
let year = Now.getFullYear();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[Now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[Now.getMonth()];

dateElement.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}, ${year}`;
//date

//format daily forecast

function formatDay(timestamp) {
  let dateFormatted = new Date(timestamp * 1000);

  let day = dateFormatted.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

//format daily forecast







//forecast

function displayForecast(response) {
  let forecastDaily = response.data.daily;
  forecastElement = document.querySelector("#forecastid");

  //LOOP

  let forecastHTML = `<div class="row">`;

  forecastDaily.forEach(function (dayforecast, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `

<div class="col-1">
<div class= "forecastDate"> ${formatDay(dayforecast.dt)}
       <img
         src="http://openweathermap.org/img/wn/${
           dayforecast.weather[0].icon
         }@2x.png"
         alt="forecast-img"
         width="32"
       />
     
     <span class="forecast-temp-high">
       ${Math.round(dayforecast.temp.max)}°
       <span class="forecast-temp-low"> ${Math.round(
         dayforecast.temp.min
       )}° </span>
       </span>

       </div>
    </div>
   </div>`;
      forecastHTML = forecastHTML + `</div>`;
      forecastElement.innerHTML = forecastHTML;
    }
  });
}
//forecast

//sunset

//sunset

search("singapore");
