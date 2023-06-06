// api key: 7f3fd9643dcb73589aaf729277e40ae8
let key = "db70bb95b7674df08d97006202761bed"
let kelvin = 273;
let timezone;

// document constants
const tempElm = document.querySelector(".temperature p");
const locationElm = document.querySelector(".location p");
const descElm = document.querySelector(".description p")
const iconElm = document.querySelector(".icon");
const dateElm = document.querySelector(".date");
const timesElm = document.querySelector('.times');

const weather = {};
weather.temperature = {
    unit:"celcius"
}

// getting location
function getPosition(){
    if("geolocation" in navigator){
        console.log("Getting Positions")
        navigator.geolocation.getCurrentPosition(setPosition,showError)
        console.log("Got positions")
    }else{
        alert("Geolocation not supported by your browser")
    }
}

// Setting location to the api
function setPosition(position){
    console.log(position)
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude,longitude);
    getTimeZones(latitude,longitude);
}

// showing error
function showError(err){
    console.log("some error occured",err.message)
}

// get weather according to user's cordinates
function getWeather(lat,lon){
    // let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    
    fetch(api)
      .then(fetchRes => {
          let data = fetchRes.json();
          return data;
      })
      .then(data => {
          weather.temperature.value = Math.round(data.main.temp - kelvin)
          weather.description = data.weather[0].description;
          weather.iconId = checkSameImages(data.weather[0].icon);
          weather.city = data.name;
          weather.country = data.sys.country;
        //displaying weather to screen
          displayweather();
      })
}

function displayweather(){
    tempElm.innerHTML = `${weather.temperature.value}<span class="unit">°C</span>`;
    locationElm.innerHTML = `${weather.city}, ${weather.country}`;
    descElm.innerHTML = `${weather.description}`
    iconElm.src = `./images/${weather.iconId}.png`
}

// convert temperature from celcius to fahrenheit
function celciusTofahrenheit(temperature){
    return (temperature * 9/5)  + 32;
}

// convert time to 12H format
function checkHourFormat(hour){
 let suffix = 'am'
  if(hour > 12){
      hour -= 12;
      suffix = 'pm';
  }
  if(hour == 0)hour = 12;
  return (`${hour}${suffix}`)
}

function checkSameImages(id){
    let newId = id
    if(id == '03d'){
        newId = "02d"
    }else if(id == '03n'){
        newId = '02n';
    }
    return newId;
}

function getTimeZones(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`)
    .then(fetchRes => {
        let data = fetchRes.json()
        return data
    })
    .then(data => {
        console.log(data)
        timesElm.innerHTML = '';
        let todayDate = new Date();
        for(let i = 0;i < 24;i++){
            timezone = data.timezone_offset;
            let temp = Math.floor(data.hourly[i].temp - kelvin);
            let time = data.hourly[i].dt;
            let date = new Date(time * 1000);
            let hour = date.getHours()
            hour = checkHourFormat(hour);
            let img = checkSameImages(data.hourly[i].weather[0].icon);
            let className = (date.getHours() === todayDate.getHours()) ? "box active": 'box'
            timesElm.innerHTML += `<div class="${className}" onclick="changeActiveTime(this)">
                        <p>${hour}</p>
                        <div class="weather-img"><img src="./images/${img}.png" alt="" /></div>
                        <p>${temp}<span>°C</span></p>
                    </div>`;
        }
    });
}