import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LawyerPage = () => {
  const api = axios.create({
    baseURL: `http://127.0.0.1:3333`,
  });

  const [lawyer, setLawyer] = useState(null);
  const [loading, setloading] = useState(true);


  let { id } = useParams();

  useEffect(() => {
    api
      .get(`/lawyers/${id}`)
      .then((res) => {
        console.log(res);
        setLawyer(res.data);
        setloading(false);
      })
      .catch((err) => {
        alert(err);
      });
  });

  console.log(lawyer);

  const classes = styles();
  if (loading) {
    return null;
  }
  return (
    <div className="lawyers">
      <Typography
        variant="h4"
        className={classes.bigSpace}
        color="primary"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        Fica a saber tudo sobre os nossos Advogados.
      </Typography>

      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <i className={"fas fa-user-tie"} style={{fontSize:"150px", marginBottom:"20px"}} ></i>
            <span
              key={lawyer._id}
              lawyerName={lawyer.name + " " + lawyer.lastName}
              lawyerSpeciality={lawyer.speciality}
              style={{marginBottom:"10px"}}
            >
              {lawyer.name + " " + lawyer.lastName}
            </span>
            <span class="idd" style={{marginBottom:"10px"}}>{lawyer.email}</span>
            
            
            <div class="text mt-3">
              {" "}
              <span>
                {lawyer.description}
                <br />
                
              </span>{" "}
            </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              {" "}
              <span>
                <i class="fa fa-twitter"></i>
              </span>{" "}
              <span>
                <i class="fa fa-facebook-f"></i>
              </span>{" "}
              <span>
                <i class="fa fa-instagram"></i>
              </span>{" "}
              <span>
                <i class="fa fa-linkedin"></i>
              </span>{" "}
            </div>
            
          </div>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}></div>
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

export default LawyerPage;
