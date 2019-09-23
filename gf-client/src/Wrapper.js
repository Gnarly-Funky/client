import React from 'react'
import LandingPage from './components/landing_page/LandingPage'
import { makeStyles } from "@material-ui/core";

const Wrapper = () => {
    const classes = makeStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#777",
            width: "100%",
            height: "100vh",
            color: "white",
        }
    })();

    return (
        <div className={classes.root}>
            <LandingPage />
        </div>
    )
}

export default Wrapper
