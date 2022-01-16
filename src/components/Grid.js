import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'
import lawyerImage from '../Assets/lawyer1.png'
import {Link} from 'react-router-dom'

const styles = makeStyles({
    wrapper: {
       display: "grid",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem",
       placeItems: "center", 
       marginTop: "10px",
       
    }, 
    item: {
       paddingTop: "5px"
    }
})

function Grid(props) {
    const {lawyerName} = props;
    const {lawyerSpeciality} = props;
    const {id} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <i className={"fas fa-user-tie"} style={{fontSize:"150px", marginBottom:"10px"}} ></i>
            <Typography className={classes.item} variant="h5">{lawyerName}</Typography>
            <Typography className={classes.item} variant="h6">{lawyerSpeciality}</Typography>
            <div className={classes.item}>
                <Link to={`lawyerPage/${id}`} ><CustomBtn  txt={"Mostrar Perfil"}/></Link>
            </div>
        </div>
    )
}

export default Grid