const Weatherapi_key = "6b7f9e185eb663f62a87135fb27ea932",
        weatherApi_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=",
        search_input = document.querySelector('.weather-input'),
        search_btn = document.querySelector('.search-button'),
        weatherImage = document.querySelector('.weather__info__img'),
        weatherInfo = document.querySelector('.weather-info-container'),
        errorLocation = document.querySelector('.error-location')
    
async function loadWeather(City) {
    const rspd = await fetch(weatherApi_url + City + `&appid=${Weatherapi_key}`);

    if(rspd.status == 404) {
        errorLocation.style.display= "grid"
        errorLocation.style.justifyContent = "center"
        weatherInfo.style.display = "none"
    }

    else {
        var Weatherdata = await rspd.json();

    document.querySelector('.weather-country').textContent = Weatherdata.name;
    document.querySelector(".temp").textContent = Math.round(Weatherdata.main.temp) + "°C"

    document.querySelector('.humidity').textContent = Weatherdata.main.humidity + "%"
    document.querySelector('.wind-info').textContent = Weatherdata.wind.speed + "km/h"
    document.querySelector('.weather-codt').textContent = Weatherdata.weather[0].main

    if (Weatherdata.weather[0].main == "Clouds") {
        weatherImage.src = "src/images/clouds.png"
        weatherImage.alt = "cloudy weather"
    }

    else if (Weatherdata.weather[0].main == "Clear") {
        weatherImage.src = "src/images/sunny.png"
        weatherImage.alt = "clear weather"
    }
    
    else if (Weatherdata.weather[0].main == "Rain") {
        weatherImage.src = "src/images/rainy.png"
        weatherImage.alt = "rainy weather"
    }

    else if (Weatherdata.weather[0].main == "Drizzle") {
        weatherImage.src = "src/images/drizzle.png"
        weatherImage.alt = "drizzy weather"
    }

    else if (Weatherdata.weather[0].main == "Mist") {
        weatherImage.src = "src/images/mist.png"
        weatherImage.alt = "mist"
    }

    errorLocation.style.display= "none"
    weatherInfo.style.display = "block"
    }
    
}

search_btn.addEventListener('click', () => {
    loadWeather(search_input.value);
})

