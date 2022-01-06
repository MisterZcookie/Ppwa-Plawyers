import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";
import Home from "./Routes/Home";
import SignUp from "./Routes/SignUp";
import LogIn from "./Routes/LogIn";
import Lawyers from "./Routes/Lawyers";
import LawyerPage from "./Routes/LawyerPage";
import Dashboard from "./Routes/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <LogIn />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/home">
              <ThemeProvider theme={theme}>
                <NavBar />
                <Home />
                <Footer />
              </ThemeProvider>
            </Route>
            <Route exact path="/lawyers">
              <ThemeProvider theme={theme}>
                <NavBar />
                <Lawyers />
                <Footer />
              </ThemeProvider>
            </Route>
            <Route name="lawyerPage" exact path={`/lawyerPage/:id`}>
              <ThemeProvider theme={theme}>
                <NavBar />
                <LawyerPage />
                <Footer />
              </ThemeProvider>
            </Route>
            <Route exact path="/dashboard">
              <ThemeProvider theme={theme}>
                <Dashboard />
              </ThemeProvider>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
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
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

export default App;
