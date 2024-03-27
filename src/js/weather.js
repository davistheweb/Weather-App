const Weatherapi_key = "6b7f9e185eb663f62a87135fb27ea932"
const weatherApi_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const search_input = document.querySelector('.weather-input')
const search_btn = document.querySelector('.search-button')
    
async function loadWeather(City) {
    const rspd = await fetch(weatherApi_url + City + `&appid=${Weatherapi_key}`);
    var Weatherdata = await rspd.json();

    document.querySelector('.weather-country').textContent = Weatherdata.name;
    document.querySelector(".temp").textContent = Math.round(Weatherdata.main.temp) + "°C"

    document.querySelector('.humidity').textContent = Weatherdata.main.humidity + "%"

    console.log(Weatherdata)
}

search_btn.addEventListener('click', () => {
    loadWeather(search_input.value);
})

