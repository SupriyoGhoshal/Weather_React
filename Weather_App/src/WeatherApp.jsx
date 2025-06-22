// import { useState } from "react";
// import InfoBox from "./InfoBox";
// import SearchBox from "./SearchBox";

// function WeatherApp() {
//     const [weatherInfo, setWeatherInfo] = useState({
//         city: "City",
//         feelslike: 0,
//         temp: 0,
//         tempMin: 0,
//         tempMax: 0,
//         humidity: 0,
//         weather: "weather type",
//     });

//     const updateInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     };

//     return (
//         <div className="WeatherApp">
//             <h1 className="h1 text-center mb-3">Weather App created by Supriyo 🤪</h1>
//             <SearchBox updateInfo={updateInfo} />
//             <InfoBox info={weatherInfo} />
//         </div>
//     );
// }
// export default WeatherApp;




import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "City",
        feelslike: 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "weather type",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp min-vh-100 py-5" style={{
            background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5">
                            <h1 className="display-4 fw-bold text-primary mb-3">
                                <i className="bi bi-cloud-sun-fill me-2"></i>
                                Weather App
                            </h1>
                            <p className="lead text-muted">
                                Created by Supriyo <span className="text-warning">🤪</span>
                            </p>
                        </div>
                        
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-8 col-lg-6">
                                <SearchBox updateInfo={updateInfo} />
                            </div>
                            <div className="col-md-8 col-lg-6">
                                <InfoBox info={weatherInfo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;