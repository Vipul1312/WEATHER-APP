// const apikey= "71333d2e967d8f27d1b16d143f119ef3";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(`apiUrl{city}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").Style.display = "block";
        document.querySelector(".weather").Style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    console.log(data.weather [0].main);
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "clear.png";
}
 else if(data.weather[0].main == "rain"){
    weatherIcon.src = "rain.png";
} 
else if(data.weather[0].main == "drizzle"){
    weatherIcon.src = "drizzle.png";
}
 else if(data.weather[0].main == "mist"){
    weatherIcon.src = "mist.png";
}
 else if(data.weather[0].main == "snow"){
    weatherIcon.src = "snow.png";
}
document.querySelector(".weather").Style.display = "block";
document.querySelector(".error").Style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
checkweather();

