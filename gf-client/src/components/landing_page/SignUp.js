import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import { TextField, Typography } from "@material-ui/core/";
import axios from "axios";

const SignUp = () => {
    const classes = landingStyles();

    const [values, setValues] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const [error, setError] = useState({});

    const handleChange = e => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        axios
            .post(
                "https://gnarly-funky.herokuapp.com/api/registration/",
                values
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                setError({
                    ...err.response.data,
                });
            });
        console.log(error)
    };

    return (
        <div className={classes.login}>
            Bruh
            <div className={classes.errorDescription}>{error["username"]}</div>
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
                    className: classes.input,
                }}
            />
            <div className={classes.errorDescription}>{error["password1"]}</div>
            <TextField
                id="outlined-name"
                label="PASSWORD"
                name="password1"
                className={classes.textField}
                value={values.password1}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                inputProps={{
                    className: classes.input,
                }}
            />
            <div className={classes.errorDescription}>{error["password2"]} {error["non_field_errors"]}</div>
            <TextField
                id="outlined-name"
                label="RE-ENTER PASSWORD"
                name="password2"
                className={classes.textField}
                value={values.password2}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                inputProps={{
                    className: classes.input,
                }}
            />
            <Typography className={classes.button} onClick={handleSubmit}>
                Sign Up!
            </Typography>
        </div>
    );
};

export default SignUp;
