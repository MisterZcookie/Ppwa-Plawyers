import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.jpeg'
import logoMobile from '../logoMobile.jpeg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff"
        
    },
    logo: {
        width: "15%", 
        
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo} alt=""/> 
                <img src={logoMobile} className={classes.logoMobile} alt=""/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default NavBar
