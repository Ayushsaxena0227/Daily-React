import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "37878f7e1918c40f71d62154101a9fcf";

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setCity("");
        setError("");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  // Fetch weather only once on initial render
  //   useEffect(() => {
  //     getWeather();
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page refresh
    getWeather(); // fetch new weather for input city
  };

  return (
    <div>
      <h1>🌦 Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <h3>{weather.main.temp}°C</h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
