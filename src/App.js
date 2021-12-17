import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import SignIn from './Routes/SignIn'


function App() {


  return (
    <Router>
      <div className="App">
        <div className='Content'>
          <Switch>
            <Route exact path="/">
              <ThemeProvider theme={theme}>
                <NavBar />
                <Home />
                <Footer />
              </ThemeProvider>
            </Route>
            <Route>
              <SignIn />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
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



export default App;
