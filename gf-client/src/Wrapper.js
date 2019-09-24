import React from 'react'
import LandingPage from './components/landing_page/LandingPage'
import { makeStyles } from "@material-ui/core";
import { Route } from 'react-router-dom';
import Game from './components/game/Game';

const Wrapper = () => {
    const classes = makeStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#202020",
            width: "100%",
            height: "100vh",
            color: "white",
        }
    })();

    return (
        <div className={classes.root}>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/game" component={Game} />
        </div>
    )
}

export default Wrapper
