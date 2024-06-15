document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <div class="weather-details">
            <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Visibility: ${data.visibility / 1000} km</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}
