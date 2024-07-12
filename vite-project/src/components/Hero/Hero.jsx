import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroContainer from '../HeroContainer';
import classes from './Hero.module.scss';

// Создание темы Material-UI
const theme = createTheme({
  palette: {
    // Добавляем новый цвет в палитру
    salmon: {
      main: '#FF5733',
    },
  },
});

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <HeroContainer>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className={classes.Typography}>
              <Typography variant="h3" component="h2">
                CREATE<span className={classes.X}>X</span>
                <br />
                CONSTRUCTION
              </Typography>
            </div>
            <div className={classes.text}>
              <Typography variant="body1" component="p">
                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
              </Typography>
            </div>
            {/* Использование кнопки с измененным цветом */}
            <Button variant="outlined" color="salmon">
              Learn more about us
            </Button>
            <Button variant="contained" color="salmon">SUBMIT REQUEST</Button>
          </div>
        </div>
      </HeroContainer>
    </ThemeProvider>
  );
}
