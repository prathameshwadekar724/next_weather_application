import Image from 'next/image';
import React from 'react'

export default function ForecastList({forecast}) {
    if(!forecast) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 w-[90%] max-w-5xl mx-auto">
      {forecast.list.slice(0, 10).map((item, index) => (
        <div
          key={index}
          className="bg-white/50 backdrop-blur-xl p-4 rounded-2xl text-center shadow border border-white/30"
        >
          <p className="text-white/90 text-sm">
            {new Date(item.dt * 1000).toLocaleDateString("en-IN", {
              weekday: "short",
            })}
          </p>
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt='Icon'
            width={50}
            height={50}
            className="mx-auto"
          />
          <p className="font-semibold text-white text-lg">
            {Math.round(item.main.temp)}°C
          </p>
        </div>
      ))}
    </div>
  );
}
