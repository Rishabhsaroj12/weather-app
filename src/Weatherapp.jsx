import Infobox from './infobox';
import SearchBox from './searchbox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherinfo, setWeatherInfo] = useState({
        city: "Delhi",
        weather: "Haze",
        temp: 45,
        temp_min: 32,
        temp_max: 34,
        humidity: 40,
        feelslike: 44,
        icon: "50d"
    });

    const updateinfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    const backgroundStyle = {
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=1600&auto=format&fit=crop&q=60")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
    };

    return (
        <div style={backgroundStyle}>
           <h2 style={{
  color: 'white',
  textAlign: 'center',
  fontFamily: '"Poppins", sans-serif',
  fontWeight: '700',
  fontSize: '2.5rem',
  letterSpacing: '2px',
  textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
}}>
  Know Weather
</h2>
            <SearchBox updateinfo={updateinfo} />
            <Infobox info={weatherinfo} />
        </div>
    );
}
