// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// export default function InfoBox({ info }) {
//     const INIT_URL = "https://cdn.zeebiz.com/sites/default/files/2023/05/30/245029-download-24.jpg?im=FitAndFill=(1200,900)";

//     return (
//         <div className="container my-4 d-flex justify-content-center">
//             <Card className="shadow" style={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     alt="weather image"
//                     height="140"
//                     image={INIT_URL}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {info.city}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         Temperature = {info.temp}°C<br />
//                         Humidity = {info.humidity}<br />
//                         Min temp = {info.tempMin}°C<br />
//                         Max temp = {info.tempMax}°C<br />
//                         The weather can be described as <i>{info.weather}</i>, feels like {info.feelslike}°C
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }







import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

// Dynamic weather image selection
const getWeatherImage = (weather) => {
  const weatherLower = weather.toLowerCase();
  
  if (weatherLower.includes('rain')) {
    return 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  } else if (weatherLower.includes('cloud')) {
    return 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  } else if (weatherLower.includes('sun') || weatherLower.includes('clear')) {
    return 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  } else if (weatherLower.includes('snow')) {
    return 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  } else if (weatherLower.includes('thunder') || weatherLower.includes('storm')) {
    return 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  } else {
    return 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
  }
};

const WeatherCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  borderRadius: 16,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const WeatherChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 'bold',
}));

export default function InfoBox({ info }) {
  const weatherImage = getWeatherImage(info.weather);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <WeatherCard className="shadow">
        <CardMedia
          component="img"
          alt={info.weather}
          height="200"
          image={weatherImage}
          sx={{ objectPosition: 'center' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            {info.city}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 }}>
              {info.temp}°C
            </Typography>
            <WeatherChip 
              label={info.weather} 
              color="primary" 
              variant="outlined"
              sx={{ textTransform: 'capitalize' }}
            />
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <WeatherChip 
              label={`Feels like ${info.feelslike}°C`} 
              color="secondary" 
              icon={<span>🌡️</span>}
            />
            <WeatherChip 
              label={`Humidity ${info.humidity}%`} 
              color="info" 
              icon={<span>💧</span>}
            />
            <WeatherChip 
              label={`Min ${info.tempMin}°C`} 
              color="error" 
              icon={<span>⬇️</span>}
            />
            <WeatherChip 
              label={`Max ${info.tempMax}°C`} 
              color="warning" 
              icon={<span>⬆️</span>}
            />
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            Current conditions: {info.weather}
          </Typography>
        </CardContent>
      </WeatherCard>
    </Box>
  );
}