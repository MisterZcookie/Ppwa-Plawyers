import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import lawyerImage from '../Assets/lawyer1.png';

import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: `http://127.0.0.1:3333`,
});

const LawyerPage = () => {
  const [lawyer, setlawyer] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    api.get("/lawyers/:lawyerId").then((res) => {
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
        Fica a saber tudo sobre os nossos Advogados.
      </Typography>

      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src={lawyerImage} alt="" height="200" width="200" /></button> {lawyer.map((lawyer) => {
        return <span
        key={lawyer._id}
        
        lawyerName={lawyer.name + " " + lawyer.lastName}
        lawyerSpeciality={lawyer.speciality}
      >{lawyer.name + " " + lawyer.lastName}</span>
      }
      )
    } <span class="idd">@eleanorpena</span>
            
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1069 <span class="follow">Followers</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3"> <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
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
