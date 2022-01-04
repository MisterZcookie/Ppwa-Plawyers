import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "../components/Grid";

import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: `http://127.0.0.1:3333`,
});

const Lawyers = () => {
  const [lawyer, setlawyer] = useState(null);
  const [loading, setloading] = useState(true);

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
    <div className="lawyers">
      <Typography
        variant="h4"
        className={classes.bigSpace}
        color="primary"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        Aqui apresentamos os nossos mais competentes advogados que estarão ao
        seu serviço.
      </Typography>

      <div className={`${classes.grid} ${classes.bigSpace}`}>
        {lawyer.map((lawyer) => {
          return (
            <Grid
              key={lawyer._id}
              
              lawyerName={lawyer.name + " " + lawyer.lastName}
              lawyerSpeciality={lawyer.speciality}
            />
          );
        })}
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

export default Lawyers;
