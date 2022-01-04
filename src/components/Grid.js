import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'
import lawyerImage from '../Assets/lawyer1.png'

const styles = makeStyles({
    wrapper: {
       display: "grid",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem",
       placeItems: "center", 
       marginTop: "20px",
       
    }, 
    item: {
       paddingTop: "1rem"
    }
})

function Grid(props) {
    const {lawyerName} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <img className="mb-4" src={lawyerImage} alt="" width="200" height="200" />
            <Typography className={classes.item} variant="h5">{lawyerName}</Typography>
            <div className={classes.item}>
                <CustomBtn  txt={"Mostrar Perfil"}/>
            </div>
        </div>
    )
}

export default Grid