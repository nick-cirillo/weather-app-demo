import React from 'react';
import {
    Heading,
    Text,
    Box, Flex, Image, Center, VStack, Button, Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';
import './Home.css';

const WeatherIcon = ({ type, size = 24 }) => {
  const iconProps = { size, strokeWidth: 1.5 };
  switch (type) {
    case 'sunny': return <Sun {...iconProps} className="text-yellow-400" />;
    case 'cloudy': return <Cloud {...iconProps} className="text-gray-400" />;
    case 'rainy': return <CloudRain {...iconProps} className="text-blue-400" />;
    case 'stormy': return <CloudLightning {...iconProps} className="text-purple-400" />;
    default: return null;
  }
};

const HourlyForecast = ({ hours }) => (
  <div className="flex justify-between w-full h-4">
    {hours.map((hour, index) => (
      <div key={index} className="w-1 bg-blue-400" style={{ height: `${hour * 25}%` }} />
    ))}
  </div>
);

const DayForecast = ({ day, low, high, icon, hours }) => (
  <div className="flex items-center text-sm mb-2">
    <div className="w-8 mr-2">{day}</div>
    <WeatherIcon type={icon} size={20} />
    <div className="w-24 mx-2">
      <span className="text-purple-400">{low}°</span> •{' '}
      <span className="text-red-400">{high}°</span>
    </div>
    <div className="flex-grow">
      <HourlyForecast hours={hours} />
    </div>
  </div>
);
  

const Home = () => {
  // In a real application, you'd fetch this data from an API
  const weatherData = {
    location: 'Philadelphia, Pennsylvania',
    currentTemp: 85,
    rainChance: 10,
    lowTemp: 55,
    highTemp: 87,
    hourlyForecast: [50, 75, 50, 25, 0, 25],
    weeklyForecast: [
      { day: 'Sa', icon: '☀️', low: 55, high: 87, hourly: [50, 25, 0, 25, 50, 75] },
      { day: 'M', icon: '☀️', low: 58, high: 92, hourly: [25, 25, 50, 50, 25, 0] },
      { day: 'Tu', icon: '🌧️', low: 45, high: 72, hourly: [100, 100, 100, 75] },
      { day: 'W', icon: '🌧️', low: 44, high: 67, hourly: [75, 50, 25, 25] },
      { day: 'Th', icon: '☁️', low: 53, high: 84, hourly: [25, 50, 25, 0] },
      { day: 'F', icon: '☀️', low: 55, high: 89, hourly: [0, 25, 0, 0] },
      { day: 'Su', icon: '⚡', low: 55, high: 87, hourly: [50, 75, 100, 75, 50, 25] },
    ],
  };

  return (
    <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&display=swap" rel="stylesheet"/>
    </head>
    <div style={styles.container}>
      <div style={styles.currentWeatherIconContainer}>
        <Sun size={100} strokeWidth={2} style={styles.currentWeatherIcon} />
      </div>
      <div style={styles.location}>
        <MapPin size={20} style={styles.locationIcon} />
        <p>{weatherData.location}</p> 
      </div>
      <div style={styles.currentWeather}>
        <div style={styles.temperature}>{weatherData.currentTemp}<span style={styles.temperatureDegrees}>°F </span></div>
        <div style={styles.rainChance}>
        <p><span style={styles.rainIcon}>💧</span>{weatherData.rainChance}<span style={styles.rainChancePercent}>%</span></p>
        </div>
      </div>
      <div style={styles.highLow}>
        <div>
          <span style={styles.low}>{weatherData.lowTemp}°</span> Lo •{' '}
          <span style={styles.high}>{weatherData.highTemp}°</span> Hi
        </div>
        <div style={styles.hourlyForecast}>
          {weatherData.hourlyForecast.map((height, index) => (
            <div key={index} style={{...styles.hourBar, height: `${height}%`}} />
            
          ))}
        </div>
      </div>
      <div style={styles.weeklyForecast}>
        {weatherData.weeklyForecast.map((day, index) => (
          <div key={index} style={styles.dayForecast}>
            <span style={styles.day}>{day.day}</span>
            <span style={styles.dayIcon}>{day.icon}</span>
            <span style={styles.dayTemp}>
              <span style={styles.low}>{day.low}°</span> •{' '}
              <span style={styles.high}>{day.high}°</span>
            </span>
            <div style={styles.hourlyForecast}>
              {day.hourly.map((height, i) => (
                <div key={i} style={{...styles.hourBar, height: `${height}%`}} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.footer}>Simple <span style={styles.simpleWeatherText}>Weather.</span></div>
    </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: "Commissioner, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: '#1c1c1e',
    color: '#ffffff',
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    maxWidth: 390,
    margin: '0 auto',
  },
  currentWeatherIconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  currentWeatherIcon: {
    display: 'flex',
    justifyContent: 'center',
    color: '#FFDF22',
  },
  location: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  locationIcon: {
    marginRight: 8,
  },
  currentWeather: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 72,
    fontWeight: 300,
    display: 'flex',
    alignItems: 'baseline',
  },
  temperatureDegrees: {
    fontSize: 50,
    verticalAlign: 'text-top',
  },
  rainChance: {
    fontSize: 72,
  },
  rainChancePercent: {
    fontSize: 50,
  },
  rainIcon: {
    color: '#0a84ff',
    fontSize: 50,
  },
  highLow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  low: { color: '#bf5af2' },
  high: { color: '#ff453a' },
  hourlyForecast: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    height: 20,
    width: 100,
  },
  hourBar: {
    width: 4,
    backgroundColor: '#0a84ff',
  },
  weeklyForecast: {
    marginTop: 20,
  },
  dayForecast: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  day: {
    width: 30,
    marginRight: 10,
  },
  dayIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  dayTemp: {
    width: 80,
    marginRight: 10,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#0a84ff',
    fontSize: 16,
  },
  simpleWeatherText: {
    color: 'white',
  },
};

export default Home;