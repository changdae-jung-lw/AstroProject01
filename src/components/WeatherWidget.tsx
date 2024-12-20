import { useState, useEffect } from 'react';

interface WeatherData {
    temperature: number;
    condition: string;
    icon: string;
  }
  
  export const WeatherWidget = () => {
    const [weather, setWeather] = useState<WeatherData>({
      temperature: 20,
      condition: "Sunny",
      icon: "☀️"
    });
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Today's Weather</h2>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{weather.icon}</span>
          <div>
            <p className="text-3xl font-bold">{weather.temperature}°C</p>
            <p className="text-gray-600">{weather.condition}</p>
          </div>
        </div>
      </div>
    );
  };