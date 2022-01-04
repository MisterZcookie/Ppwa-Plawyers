import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '../components/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios'
import { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: `http://127.0.0.1:3333`
})




const Home = () => {

  const [lawyer, setlawyer] = useState(null)
  const [loading, setloading] = useState(true)

useEffect(() => {
  api.get('/lawyers/lawyers').then(res => {
    setlawyer(res.data)
    setloading(false)
  })
}, [])



console.log(lawyer)


  const classes = styles();
  if (loading) {
    return null

  }
  return (


    < div className="home" >



      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary">
          Na PLawyers somos apaixonados por aquilo que fazemos!
        </Typography>
        <Typography variant="h5" className={classes.littleSpace} color="primary">
          A nossa empresa tem raízes na justiça, confiança e desempenho. Estamos aqui para o defender. Conheça abaixo um pouco mais sobre cada advogado associado que estará pronto para o ajudar nos seus problemas.
        </Typography>
      </div>
      <div className={`${classes.grid} ${classes.bigSpace}`}>
      {lawyer.map((lawyer) => {
        return <Grid key={lawyer._id} icon={<AccountCircleIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} lawyerName={lawyer.name+ " " + lawyer.lastName} />
      }
      )
    }

      </div>
      <div style={{ marginTop: "100px" }}></div>
    </div >
  )
}

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
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
})

export default Home