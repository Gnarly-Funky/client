import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const SignUp = () => {
    const classes = landingStyles();

    const [values, setValues] = useState({
        username: "",
        password1: "",
        password2: "",
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
            .post(
                "https://gnarly-funky.herokuapp.com/api/registration/",
                values
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                setError({
                    ...err.response.data
                })
            });
    };

    return (
        <div className={classes.login}>
            Bruh
            {Object.values(error).map((err) => {
                return err
            })}
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
                    className: classes.input,
                }}
            />
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
            <button className={classes.button} onClick={handleSubmit}>
                Sign Up!
            </button>
        </div>
    );
};

export default SignUp;
