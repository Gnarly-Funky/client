import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import landingStyles from "./LandingStyles";
import Signout from "../../assets/Signout";

const LandingPage = (props) => {
    // Styling
    const classes = landingStyles();

    const [currentTab, setCurrentTab] = useState("login");

    const signupTab = e => {
        e.preventDefault();
        setCurrentTab("signup");
    };

    const loginTab = e => {
        e.preventDefault();
        setCurrentTab("login");
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                <div
                    className={
                        currentTab === "login"
                            ? classes.tab + " active"
                            : classes.tab
                    }
                    onClick={loginTab}
                >
                    Login
                </div>
                <div
                    className={
                        currentTab === "signup"
                            ? classes.tab + " active"
                            : classes.tab
                    }
                    onClick={signupTab}
                >
                    Sign Up
                </div>
                {/* <div className={classes.tab}>
                    <div className={classes.signout}><Signout/></div>
                </div> */}
            </div>
            <div className={classes.window}>
                {currentTab === "login" ? <Login {...props} /> : <SignUp {...props} />}
            </div>
        </div>
    );
};

export default LandingPage;
