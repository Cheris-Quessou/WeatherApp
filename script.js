const apikey = "c8c21fef4185f2c9ff92bc56d553bd46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".weather").style.display = "block";
    }
    
    var data = await response.ison();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.name + "°C";
    document.querySelector(".humidity").innerHTML = data.name + "%";
    document.querySelector(".wind").innerHTML = data.name + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.scr = "weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();