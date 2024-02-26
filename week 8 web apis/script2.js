// Define constants for API URL and API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = ''; // Replace with your actual API key

// Function to fetch weather data from the API for Riverside
const fetchWeather = async () => {
    try {
        // Fetch weather data from the API for Riverside
        const response = await fetch(`${apiUrl}?q=Riverside,US&appid=${apiKey}&units=imperial`);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract relevant weather information from the API response
        const { name, weather, main, wind, visibility } = data;
        const { description, icon } = weather[0];
        const { temp, humidity, pressure } = main;
        const { speed: windSpeed, deg: windDirection } = wind;

        // Create HTML elements to display weather information
        const weatherContainer = document.getElementById('weather-container');
        const weatherInfo = `
            <h2>Current Weather in ${name}</h2>
            <p><strong>Description:</strong> ${description}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Pressure:</strong> ${pressure} hPa</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            <p><strong>Wind Direction:</strong> ${windDirection}°</p>
            <p><strong>Visibility:</strong> ${visibility / 1000} km</p>
        `;

        // Render weather information to the HTML
        weatherContainer.innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the fetchWeather function when the page loads
window.onload = fetchWeather;
``
