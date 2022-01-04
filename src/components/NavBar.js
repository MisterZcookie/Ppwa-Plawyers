import React from "react";
import CustomBtn from "./CustomBtn";
import logo from "../Assets/logo.svg";
import logoMobile from "../Assets/logoMobile.svg";
import LogIn_Image from "../Assets/LogIn_Image.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#dadada",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "15%",
    height: "75px",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "40%",
    display: "none",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img src={logo} className={classes.logo} alt="" />
      <img src={logoMobile} className={classes.logoMobile} alt="" />
      <Link to ="/home" className={classes.menuItem} style={{ color: "black", textDecoration:"none" }}><Typography variant="h6" className={classes.menuItem}>
        Home
      </Typography></Link>
      
      <Link to ="/lawyers" className={classes.menuItem} style={{ color: "black", textDecoration:"none" }}><Typography variant="h6" className={classes.menuItem}>
        Advogados
      </Typography></Link>

      <Link to ="/aboutUs" className={classes.menuItem} style={{ color: "black", textDecoration:"none" }}><Typography variant="h6" className={classes.menuItem}>
        Sobre Nós
      </Typography></Link>
     
      <button
        type="button"
        className="myButton"
        data-bs-toggle="modal"
        data-bs-target="#reunionModal"
      >
        <CustomBtn txt="Marque Reunião" />
      </button>

      <div
        className="modal"
        id="reunionModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <img
                  className="mb-4"
                  src={LogIn_Image}
                  alt=""
                  width="150"
                  height="200"
                />
                <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3 " style={{ textAlign: "left" }}>
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="myButton" type="submit">
                  <CustomBtn txt="Log In" />
                </button>

                <h5 className="h6 mb-3 fw-normal" style={{ marginTop: "10px" }}>
                  Don´t have an account?
                  <Link to="/signIn">
                    <button
                      className="text-purple"
                      data-bs-dismiss="modal"
                      style={{
                        color: "#7E57C2",
                        marginLeft: "2px",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      Sign up
                    </button>
                  </Link>
                </h5>

                <p className="mt-5 mb-3 text-muted">© 2021</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Link to="/user">
        <Avatar sx={{ marginLeft: "20px", height: "44px", width: "44px" }}>
          <AccountCircleIcon />
        </Avatar>
      </Link>
    </Toolbar>
  );
}

export default NavBar;
