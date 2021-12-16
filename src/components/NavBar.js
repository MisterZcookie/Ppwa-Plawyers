import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../Assets/logo.svg'
import logoMobile from '../Assets/logoMobile.svg'
import logInImage from '../Assets/logInImage.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import '../App.css'




const styles = makeStyles({
    bar: {
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
    logoMobile: {
        width: "40%",
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
            color: "#4f25c8"
        },
        // eslint-disable-next-line
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})

function NavBar() {


    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo} alt="" />
            <img src={logoMobile} className={classes.logoMobile} alt="" />
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
            <button type="button" className="myButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <CustomBtn txt="Marque Reunião" />
            </button>



            <button type="button" className="myButton" data-bs-toggle="modal" data-bs-target="#logInModal">
                <CustomBtn txt="LogIn" />
            </button>

            <div className="modal fade" id="logInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <img className="mb-4" src={logInImage} alt="" width="150" height="200" />
                                <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="checkbox mb-3 " style={{textAlign: "left"}}>
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="myButton" type="submit"><CustomBtn txt="Log In"/></button>

                                <h5 className="h6 mb-3 fw-normal" style={{marginTop: "10px"}}>Don´t have an account?<a href="kbivfw9u" className="text-purple" style={{marginLeft:"2px"}}>Sign In</a></h5>
                                
                                <p className="mt-5 mb-3 text-muted">© 2021</p>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Toolbar>
    )
}

export default NavBar
