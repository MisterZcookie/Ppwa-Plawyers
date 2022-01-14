import "../Css/SignIn.css";
import React from "react";
import CustomBtn from "./CustomBtn";
import logo from "../Assets/logo.svg";
import logoMobile from "../Assets/logoMobile.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticTimePicker from "@mui/lab/StaticTimePicker";

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

const api = Axios.create({
  baseURL: `http://127.0.0.1:3333`,
});

function NavBar() {


  

  const url = "http://127.0.0.1:3333/appointments/appointments";

  function session(data) {
    const body = {
      lawyer: data.lawyer,
      description: data.description,
      date: calendarValue,
      client: data.client,
    };

    Axios.post(url, body);
  }

  const [lawyer, setlawyer] = useState(null);
  const [loading, setloading] = useState(true);
  const [calendarValue, onChange] = useState(new Date());
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    api.get("/lawyers/lawyers").then((res) => {
      setlawyer(res.data);
      setloading(false);
    });
  }, []);

  console.log(lawyer);

  const classes = styles();
  if (loading) {
    return null;
  }
  return (

    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <a href="/home"><img src={logo} className={classes.logo} alt="" />
      <img src={logoMobile} className={classes.logoMobile} alt="" /></a>
      
      <Link
        to="/home"
        className={classes.menuItem}
        style={{ color: "black", textDecoration: "none" }}
      >
        
        <Typography variant="h6" className={classes.menuItem}>
          Home
        </Typography>
      </Link>

      <Link
        to="/lawyers"
        className={classes.menuItem}
        style={{ color: "black", textDecoration: "none" }}
      >
        <Typography variant="h6" className={classes.menuItem}>
          Advogados
        </Typography>
      </Link>

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
            {console.log(calendarValue)}
              <form onSubmit={handleSubmit((data) => session(data))}>
                <h1 className="h3 mb-3 fw-normal">
                  Marque aqui a sua reunião
                </h1>
                <h6
                  className="h6 fw-normal"
                  style={{
                    color: "#4f25c8",
                    textAlign: "left",
                    marginTop: "30px",
                  }}
                >
                  Insira o nome do cliente:
                </h6>
                <input
                  {...register("client")}
                  style={{ width: "-webkit-fill-available", height: "40px" }}
                ></input>
                <h6
                  className="h6 fw-normal"
                  style={{
                    color: "#4f25c8",
                    textAlign: "left",
                    marginTop: "30px",
                  }}
                >
                  Escolha um advogado:
                </h6>

                <div>
                  <select
                    {...register("lawyer")}
                    style={{ height: "40px", width: "-webkit-fill-available" }}
                  >
                    <option value="">Selecionar</option>
                    {lawyer.map((lawyer) => {
                      return (
                        <option key={lawyer._id}>
                          {lawyer.name +
                            " " +
                            lawyer.lastName +
                            " - " +
                            lawyer.speciality}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-floating">
                  <h6
                    className="h6 fw-normal"
                    style={{
                      color: "#4f25c8",
                      textAlign: "left",
                      marginTop: "30px",
                    }}
                  >
                    Insira uma breve descrição do seu caso:
                  </h6>
                </div>
                <div className="form-floating">
                  <textarea
                    {...register("description")}
                    style={{ width: "-webkit-fill-available" }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <Calendar
                    onChange={onChange}
                    value={calendarValue}
                  ></Calendar>
                </div>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticTimePicker
                    ampm
                    orientation="landscape"
                    openTo="minutes"
                    value={calendarValue}
                    onChange={(newValue) => {
                      onChange(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <input
                  type="submit"
                  name="register"
                  className="register"
                  value="Marcar Reunião"
                  data-bs-dismiss="modal"
                  triggers="reset"
                  
                  style={{display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "44px",
                  padding: "0 25px",
                  margin:"auto",
                  marginTop:"20px",
                  marginBottom:"20px",
                  boxSizing: "border-box",
                  borderRadius: 0, 
                  background: "#7E57C2",
                  color: "#fff",
                  transform: "none",
                  boxShadow: "6px 6px 0 0 #c7d8ed",
                  transition: "background .3s,border-color .3s,color .3s",
                  "&:hover": {
                      backgroundColor:  "#7E57C2"}}}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Link to="/userPage">
        <Avatar sx={{ marginLeft: "20px", height: "44px", width: "44px" }}>
          <AccountCircleIcon />
        </Avatar>
      </Link>
    </Toolbar>
  );
}

export default NavBar;
