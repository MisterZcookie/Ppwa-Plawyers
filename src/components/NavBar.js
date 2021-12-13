import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        height: "75px",
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo} alt=""/> 
                <img src={logoMobile} className={classes.logoMobile} alt=""/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Sobre
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Advogados
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Casos
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contactos 
                </Typography>
                <CustomBtn txt="Marque Reunião"/>
            </Toolbar>
    )
}

export default NavBar
