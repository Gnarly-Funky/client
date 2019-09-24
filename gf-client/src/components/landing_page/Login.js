import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import { TextField, Typography } from "@material-ui/core/";
import axios from "axios";

const Login = props => {
    const classes = landingStyles();

    const [values, setValues] = useState({
        username: "",
        password: "",
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
            .post("https://gnarly-funky.herokuapp.com/api/login/", values)
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
            <div className={classes.header}>WELCOME BACK!</div>
            <div className={classes.errorDescription}>
                {error["username"]}
            </div>{" "}
            <div className={classes.errorDescription}>
                {error["non_field_errors"]}
            </div>
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
                    {error["password"]}
                </div>
                <TextField
                    label="PASSWORD"
                    name="password"
                    type="password"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                        className: classes.input,
                    }}
                />
                <div className={classes.buttonWrapper}>
                    <button className={classes.button} onClick={handleSubmit}>
                        <Typography>LOGIN</Typography>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
