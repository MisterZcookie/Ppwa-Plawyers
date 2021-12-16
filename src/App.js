import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';



import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes= styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar/>
      <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Na PLawyers somos apaixonados por aquilo que fazemos!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            A nossa empresa tem raízes na justiça, confiança e desempenho. Estamos aqui para o defender. Conheça abaixo um pouco mais sobre cada advogado associado que estará pronto para o ajudar nos seus problemas.
          </Typography>
      </div>
      <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<AccountCircleIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  lawyerName="Yullia Damanska"  />
          <Grid icon={<AccountCircleIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} lawyerName="Paulo Pichel" />
          <Grid icon={<AccountCircleIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  lawyerName="Gil Moreira" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<AccountCircleIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  lawyerName="André Oliveira" />
          <Grid icon={<AccountCircleIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  lawyerName="Carlos Moreira" />
          <Grid icon={<AccountCircleIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} lawyerName="Paulo Sousa" />
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
