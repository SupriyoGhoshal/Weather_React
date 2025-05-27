// import "./InfoBox.css";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// export default function InfoBox({ info }) {
//     const INIT_URL = "https://cdn.zeebiz.com/sites/default/files/2023/05/30/245029-download-24.jpg?im=FitAndFill=(1200,900)";

//     return (
//         <div className="infoBox">
//             <div className="cardContainer">
//                 <Card sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         component="img"
//                         alt="weather image"
//                         height="140"
//                         image={INIT_URL}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {info.city}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Temperature = {info.temp}°C<br />
//                             Humidity = {info.humidity}<br />
//                             Min temp = {info.tempMin}°C<br />
//                             Max temp = {info.tempMax}°C<br />
//                             The weather can be described as <i>{info.weather}</i>, feels like {info.feelslike}°C
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL = "https://cdn.zeebiz.com/sites/default/files/2023/05/30/245029-download-24.jpg?im=FitAndFill=(1200,900)";

    return (
        <div className="container my-4 d-flex justify-content-center">
            <Card className="shadow" style={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="weather image"
                    height="140"
                    image={INIT_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature = {info.temp}°C<br />
                        Humidity = {info.humidity}<br />
                        Min temp = {info.tempMin}°C<br />
                        Max temp = {info.tempMax}°C<br />
                        The weather can be described as <i>{info.weather}</i>, feels like {info.feelslike}°C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
