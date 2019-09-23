import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const Login = () => {
    const classes = landingStyles();

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const handleChange = e => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        axios
            .post("https://gnarly-funky.herokuapp.com/api/login/", values)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={classes.login}>
            WELCOME BACK!
            <TextField
                id="outlined-name"
                label="USERNAME"
                name="username"
                className={classes.textField}
                value={values.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                inputProps={{
                    className: classes.input
                }}
            />
            <TextField
                id="outlined-name"
                label="PASSWORD"
                name="password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                inputProps={{
                    className: classes.input
                }}
            />
            <div className={classes.buttonWrapper}>
                <button className={classes.button} onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
};

export default Login;
