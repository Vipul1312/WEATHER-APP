const apikey= "71333d2e967d8f27d1b16d143f119ef3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.querySelector(".weather description");

async function checkweather(city){
    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";   
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    console.log(data.weather [0].main);
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Clear.png";
}
 else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "Rain.png";
} 
else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.src = "Thunderstorm.png";
}
 else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "Haze.png";
}
 else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "Snow.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
checkweather();

