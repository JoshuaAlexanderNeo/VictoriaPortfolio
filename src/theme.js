import { createTheme, responsiveFontSizes} from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let mainTheme = createTheme({
  palette: {
    primary: {
      main: '#303f9f',
    },
    secondary: {
      main: '#f06292',
    },
  },
});

let theme = responsiveFontSizes(mainTheme);

export default theme;