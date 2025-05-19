document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Debug: view the full data
  
        if (data.cod === "404") {
          alert("City not found!");
          return;
        }
  
        document.getElementById("weatherInfo").classList.remove("hidden");
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again.");
      });
  });