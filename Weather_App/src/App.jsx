
// import WeatherApp from "./WeatherApp"
// function App() {

//   return (
//     <>
//       <WeatherApp/>
//     </>
//   )
// }

// export default App



import WeatherApp from "./WeatherApp";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';

// Custom theme for consistent styling
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A weather-friendly blue
    },
    secondary: {
      main: '#ff9800', // A sunny orange
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners throughout the app
  },
});

// Styled container for the entire app
const AppContainer = styled('div')({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)', // Light blue gradient
  display: 'flex',
  flexDirection: 'column',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <WeatherApp />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;