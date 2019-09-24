import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import { TextField, Typography } from "@material-ui/core/";
import axios from "axios";

const Login = () => {
    const classes = landingStyles();

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState({

    })

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
                setError({
                    ...err.response.data
                })
            })
    }

    return (
        <div className={classes.login}>
            WELCOME BACK!
            <div className={classes.errorDescription}>{error["non_field_errors"]}</div>
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
            <div className={classes.errorDescription}>{error["password"]}</div>
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
                <Typography className={classes.button} onClick={handleSubmit}>LOGIN</Typography>
            </div>
        </div>
    );
};

export default Login;
