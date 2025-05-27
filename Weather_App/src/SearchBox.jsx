import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "caf3552838c2aa5e95ab816d0b1c37d7";

    const getWeatherInfo = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();

        if (!response.ok || !jsonResponse.main) {
            throw new Error("City not found");
        }

        const result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        return result;
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false); // Reset error when user starts typing
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!city.trim()) return;

        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    return (
        <div className="SearchBox mb-3">
            <h4 className="h4 mb-3">Search for the weather</h4>
            <form className="mb-3" onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "No such place exists!" : ""}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}

export default SearchBox;

