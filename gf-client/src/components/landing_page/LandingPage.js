import React, {useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'
import landingStyles from './LandingStyles'


const LandingPage = () => {
    // Styling
    const classes = landingStyles();


    const [currentTab, setCurrentTab] = useState("login")

    const signupTab = (e) => {
        e.preventDefault();
        setCurrentTab("signup")
    }

    const loginTab = (e) => {
        e.preventDefault();
        setCurrentTab("signup")
    }

    return (
        <div className={classes.root}>
            <div>
                {currentTab === "login" ? <Login /> : <SignUp />}
            </div>
        </div>
    )
}

export default LandingPage
