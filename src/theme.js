import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import lime from '@material-ui/core/colors/lime';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[900]
      //'#283593',
    },
    secondary: {
      main: lime[400]
      //'#d4e157',
    },
    
  },
  status: {
    danger: 'orange',
  },
});

export default theme;

