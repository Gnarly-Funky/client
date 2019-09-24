import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import { TextField, Typography } from "@material-ui/core/";
import axios from "axios";

const SignUp = props => {
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
        e.preventDefault();
        axios
            .post(
                "https://gnarly-funky.herokuapp.com/api/registration/",
                values
            )
            .then(res => {
                localStorage.setItem("token", res.data.key);
            })
            .then(() => {
                props.history.push("/game");
            })
            .catch(err => {
                if (err.response) {
                    setError({
                        ...err.response.data,
                    });
                } else {
                    console.dir(err);
                }
            });
    };

    return (
        <div className={classes.login}>
            <div className={classes.header}>Sign Up</div>
            <div className={classes.errorDescription}>{error["username"]}</div>
            <form>
                <TextField
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
                <div className={classes.errorDescription}>
                    {error["password1"]}
                </div>
                <TextField
                    label="PASSWORD"
                    name="password1"
                    type="password"
                    className={classes.textField}
                    value={values.password1}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                        className: classes.input,
                    }}
                />
                <div className={classes.errorDescription}>
                    {error["password2"]} {error["non_field_errors"]}
                </div>
                <TextField
                    label="RE-ENTER PASSWORD"
                    name="password2"
                    type="password"
                    className={classes.textField}
                    value={values.password2}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                        className: classes.input,
                    }}
                />
                <div className={classes.buttonWrapper}>
                    <button className={classes.button} onClick={handleSubmit}>
                        <Typography>Sign Up</Typography>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
