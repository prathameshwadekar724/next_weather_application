import Image from 'next/image';
import React from 'react'

export default function WeatherCard({data}) {
    if(!data) return null;
  return (
    <div className="mt-8 bg-white/50 backdrop-blur-xl shadow-lg border border-white/30 rounded-3xl p-8 w-[90%] max-w-lg mx-auto text-center transform transition-all hover:scale-[1.02]">
        <h2 className="text-3xl font-semibold text-white drop-shadow mb-2">
          {data.name}
        </h2>
        <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt='icon'
            width={100}
            height={100}
            className='mx-auto -mt-4 mb-4'
        />
        <p className='text-5xl font-extrabold drop-shadow'>{Math.round(data.main.temp)}°C</p>
        <p className='text-xl mt-2 capitalize text-white/90'>{data.weather[0].description}</p>
        <div className='flex justify-between mt-5 text-white/80'>
            <p>💧 Humidity:{data.main.humidity}</p>
            <p>🌬️ Wind:{data.wind.speed}</p>
        </div>
    </div>
  )
}
