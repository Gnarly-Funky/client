import React, { useState } from "react";
import landingStyles from "./LandingStyles";
import TextField from "@material-ui/core/TextField";

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

    return (
        <div className={classes.login}>
            <TextField
                id="outlined-name"
                label="username"
                name="username"
                className={classes.textField}
                value={values.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="password"
                name="password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
            />
        </div>
    );
};

export default Login;
