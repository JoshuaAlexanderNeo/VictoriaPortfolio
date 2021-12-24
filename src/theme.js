import { createTheme, responsiveFontSizes} from '@mui/material/styles';
import '@fontsource/baloo-2'
import '@fontsource/poiret-one'

// Create a theme instance.
let mainTheme = createTheme({
  typography: {
    h2: {
      fontFamily: 'Baloo 2',
    },
    h4: {
      fontFamily: 'Poiret One',
    },
    body2: {
      fontSize: 24,
    }
},
  palette: {
    primary: {
      main: '#6750A4',
    },
    secondary: {
      main: '#625B71',
    },
    tertiary: {
      main: '7D5260',
  },
}});

let theme = responsiveFontSizes(mainTheme);

export default theme;