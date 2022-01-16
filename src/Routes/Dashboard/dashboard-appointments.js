import logo from "../../Assets/logo.svg";
import Grid from "../../components/Grid";
import axios from "axios";
import { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const api = axios.create({
  baseURL: `http://127.0.0.1:3333`,
});

const DashboardAppointments = () => {
  const [appointment, setappointments] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    api.get("/appointments/appointments").then((res) => {
      setappointments(res.data);
      setloading(false);
    });
  }, []);

  const classes = styles();
  if (loading) {
    return null;
  }
  return (
    <div className="dashboard" style={{ backgroundColor: "#dadada" }}>
      <section
        className="navigation"
        style={{
          display: "block",
          justifyContent: "space-between",
          width: "150px",
          position: "fixed",
          zIndex: "10",
        }}
      >
        <img
          src={logo}
          style={{
            height: "80px",
            borderRadius: "10px",
            marginTop: "10px",
            PaddingLeft: "20px",
          }}
          alt=""
        />
        <div
          style={{
            marginTop: "15vh",
            marginBottom: "10vh",
            display: "block",
            PaddingLeft: "20px",
            width: "100%",
          }}
        >
          <Link to="/dashboard_lawyers">
            <i
              class="fas fa-user-tie"
              style={{
                marginBottom: "10px",
                fontSize: "40px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            ></i>
            <span
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                display: "block",
                marginBottom: "40px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            >
              Advogados
            </span>
          </Link>

          <Link to="/dashboard_appointments">
            <i
              class="fas fa-calendar-check"
              style={{
                marginBottom: "10px",
                fontSize: "40px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            ></i>
            <span
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                display: "block",
                marginBottom: "40px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            >
              Agendamentos
            </span>
          </Link>

          <Link to="/dashboard_users">
            <i
              class="fas fa-user"
              style={{
                marginBottom: "10px",
                fontSize: "40px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            ></i>
            <span
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                display: "block",
                paddingBottom: "10px",
                textDecoration: "none",
                color: "#7E57C2",
              }}
            >
              Users
            </span>
          </Link>
        </div>

        <AccountCircleIcon className="user" style={{ fontSize: "40px" }} />
        <Link to="/"><button style={{backgroundColor:"red", color:"white", width:"80px", height:"35px", display:"block",justifyContent:"space-between", marginLeft:"35px", marginTop:"30px", borderRadius:"5px"}}>Log Out</button></Link>
      </section>

      <section
        className="main"
        style={{ width: "90%", marginLeft: "150px", marginRight: "10px"}}
      >
        <div className="tittle" style={{}}>
          <h1 style={{ fontSize: "35px", marginTop: "50px" }}>
            Meus Agendamentos
          </h1>
        </div>
        <div style={{marginTop:"50px"}}>
            <button style={{borderRadius:"5px", backgroundColor:"white", paddingRight:"15px", fontSize:"20px"}}><i class="fas fa-plus-circle" style={{marginLeft:"10px", marginRight:"10px", fontSize:"20px"}}></i>Adicionar</button>
            <button style={{marginLeft:"100px", borderRadius:"5px", backgroundColor:"white", paddingRight:"15px", fontSize:"20px"}}><i class="fas fa-pen" style={{marginLeft:"10px", marginRight:"10px", fontSize:"20px"}}></i>Alterar</button>
            <button style={{marginLeft:"100px", borderRadius:"5px" , backgroundColor:"Red", paddingRight:"15px", fontSize:"20px", color:"white"}}><i class="fas fa-trash-alt" style={{marginLeft:"10px", marginRight:"10px", fontSize:"20px"}}></i>Eliminar</button>
          </div>
        <div style={{ display:"flex", flexWrap:"wrap", flexBasis:"33.333333%"}}>
          {appointment.map((appointment) => {
            return (
              <div style={{backgroundColor:"white", width:"300px", borderRadius:"10px", marginTop:"100px", marginLeft:"100px", paddingTop:"20px", paddingBottom:"10px"}}>
                <p>Cliente: {appointment.client}</p>
                <p>Advogado: {appointment.lawyer}</p>
                <p>Descrição: {appointment.description}</p>
                <p>Data: {appointment.date}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="secondary"></section>
    </div>
  );
};

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    gridTemplateColumns: "1fr 1fr 1fr",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default DashboardAppointments;
