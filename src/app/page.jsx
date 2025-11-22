'use client';
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";
import ErrorBox from "./components/ErrorBox";
import { getBackground } from "./utils/getBg";
import TempChart from "./components/TempCharts";
import SunTimes from "./components/SunTimes";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = process.env.NEXT_PUBLIC_WEATHER_KEY;

  const getWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const current = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`
      ).then((res) => res.json());

      if (current.cod === "404") {
        setError("City not found. Try again.");
        setLoading(false);
        return;
      }

      const forecastData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API}`
      ).then((res) => res.json());

      setWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError("Network error, try again.");
    }

    setLoading(false);
  };
  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        setLoading(true);

        const current = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`
        ).then((r) => r.json());

        const forecastData = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`
        ).then((r) => r.json());

        setWeather(current);
        setForecast(forecastData);
        setLoading(false);
      },
      () => setError("Location permission denied")
    );
  };
  useEffect(() => {
    detectLocation();
  }, []);
  return (
    <div className={`min-h-screen text-white py-10 px-4 animate-gradient bg-gradient-to-br ${getBackground(weather?.weather?.[0]?.main)} transition-all dark:from-gray-900 dark:to-black`}>

      <h1 className="text-4xl font-bold text-center drop-shadow-lg">
        Weather Dashboard
      </h1>
      
      <SearchBox onSearch={getWeather} />

      {loading && <Loader/>}
      {error && <ErrorBox/>}

      {weather && <WeatherCard data={weather} />}
      {weather && <SunTimes sys={weather.sys} />}
      {forecast && <ForecastList forecast={forecast} />}
      {forecast && <TempChart forecast={forecast} />}
    </div>
  );
}
