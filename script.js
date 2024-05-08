const apikey = "c8c21fef4185f2c9ff92bc56d553bd46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.ison();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.name + "°C";
    document.querySelector(".humidity").innerHTML = data.name + "%";
    document.querySelector(".wind").innerHTML = data.name + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

checkWeather();