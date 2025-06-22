// import "./SearchBox.css";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from "react";

// function SearchBox({ updateInfo }) {
//     const [city, setCity] = useState("");
//     const [error, setError] = useState(false);

//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "caf3552838c2aa5e95ab816d0b1c37d7";

//     const getWeatherInfo = async () => {
//         const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         const jsonResponse = await response.json();

//         if (!response.ok || !jsonResponse.main) {
//             throw new Error("City not found");
//         }

//         const result = {
//             city: city,
//             temp: jsonResponse.main.temp,
//             tempMin: jsonResponse.main.temp_min,
//             tempMax: jsonResponse.main.temp_max,
//             humidity: jsonResponse.main.humidity,
//             feelslike: jsonResponse.main.feels_like,
//             weather: jsonResponse.weather[0].description,
//         };

//         return result;
//     };

//     const handleChange = (evt) => {
//         setCity(evt.target.value);
//         setError(false); // Reset error when user starts typing
//     };

//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         if (!city.trim()) return;

//         try {
//             const newInfo = await getWeatherInfo();
//             updateInfo(newInfo);
//             setCity("");
//         } catch (err) {
//             console.error(err);
//             setError(true);
//         }
//     };

//     return (
//         <div className="SearchBox mb-3">
//             <h4 className="h4 mb-3">Search for the weather</h4>
//             <form className="mb-3" onSubmit={handleSubmit}>
//                 <TextField
//                     id="city"
//                     label="City Name"
//                     variant="outlined"
//                     required
//                     value={city}
//                     onChange={handleChange}
//                     error={error}
//                     helperText={error ? "No such place exists!" : ""}
//                 />
//                 <br /><br />
//                 <Button variant="contained" type="submit">
//                     Search
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default SearchBox;




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
        <div className="SearchBox container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-body p-4 p-md-5">
                            <h4 className="h4 mb-4 text-center text-primary fw-bold">
                                <i className="bi bi-cloud-sun me-2"></i>
                                Search for Weather Information
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <TextField
                                        id="city"
                                        label="City Name"
                                        variant="outlined"
                                        required
                                        value={city}
                                        onChange={handleChange}
                                        error={error}
                                        helperText={error ? "No such place exists!" : ""}
                                        fullWidth
                                        className="mb-2"
                                        InputProps={{
                                            style: {
                                                borderRadius: "12px",
                                            }
                                        }}
                                    />
                                </div>
                                <div className="d-grid">
                                    <Button 
                                        variant="contained" 
                                        type="submit"
                                        size="large"
                                        className="py-2 rounded-pill fw-bold"
                                        style={{
                                            backgroundColor: '#0d6efd',
                                            textTransform: 'none',
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        <i className="bi bi-search me-2"></i>
                                        Get Weather
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
