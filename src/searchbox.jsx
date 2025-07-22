import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Searchbox.css';
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState("");
    const Api_URL = "https://api.openweathermap.org/data/2.5/weather";
    const Api_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${Api_URL}?q=${city}&appid=${Api_KEY}&units=metric`);
            let json = await response.json();

            let result = {
                city: json.name,
                temp: json.main.temp,
                temp_min: json.main.temp_min,
                temp_max: json.main.temp_max,
                humidity: json.main.humidity,
                feelslike: json.main.feels_like,
                weather: json.weather[0].description,
            };
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newinfo = await getWeatherInfo();
            updateinfo(newinfo);
            setCity('');
            setError("");
        } catch (error) {
            setError("Please enter a valid city name");
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                    sx={{
                        borderRadius: "50px",
                        backgroundColor: "#333",
                        input: {
                            color: "#fff",
                            padding: "12px",
                        },
                        label: { color: "#ccc" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                            color: "#fff",
                        },
                        width: "300px",
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <button type="submit" className="search-btn">
                                    <SearchIcon />
                                </button>
                            </InputAdornment>
                        ),
                    }}
                />
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </form>
        </div>
    );
}
