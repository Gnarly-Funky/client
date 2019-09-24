import { makeStyles } from "@material-ui/core";

const landingStyles = makeStyles(theme => ({
    root: {
        ...theme.typography,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "60%",
        height: "80%",
        border: ".3rem solid #4a4a4a",
        background: "#4a4a4a",
    },
    tabs: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        borderTop: ".3rem solid #202020",
        borderLeft: ".3rem solid #202020",
        borderRight: ".3rem solid #202020",
    },
    tab: {
        padding: "1rem 1.5rem",
        borderLeft: ".3rem solid #202020",
        backgroundColor: "#4a4a4a",
        zIndex: "10",
        height: "100%",
        display: "flex",
        color: "#202020",
        userSelect: "none",
        "&.active": {
            background: "#c4c4c4",
            color: "#202020"
        },
    },
    window: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#4a4a4a",
        border: ".3rem solid #202020",
    },
    login: {
        display: "flex",
        flexDirection: "column",
        marginTop: "6%",
        alignItems: "center",
        height: "40%",
        color: "#c4c4c4",
    },
    textField: {
        "& label.Mui-focused": {
            color: "#c4c4c4",
        },
        "& label": {
            color: "#c4c4c4",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#c4c4c4",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: ".3rem solid #c4c4c4",
                borderRadius: "0",
            },
            "&:hover fieldset": {
                border: ".3rem solid #c4c4c4",
                borderRadius: "0",
            },
            "&.Mui-focused fieldset": {
                border: ".3rem solid #c4c4c4",
                borderRadius: "0",
            },
        },
    },
    input: {
        color: "#c4c4c4",
        fontFamily: "sans-serif",
    },
    button: {
        display: "flex",
        padding: ".3rem 3rem",
        background: "#c4c4c4",
        border: ".3rem solid #202020",
        color: "#202020",
        marginTop: "2rem",
        userSelect: "none",
        fontSize: "2.6rem",
        "&:active": {
            color: "white",
            border: ".3rem solid #202020",
            background: "#4a4a4a",
        },
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    error: {
        color: "red",
        fontSize: "2rem",
        fontFamily: "sans-serif",
        textTransform: "uppercase",
        textAlign: "center",
        textDecoration: "underline",
        margin: "1rem 0",
    },
    errorDescription: {
        color: "red",
        fontSize: "1.6rem",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "1rem",
    },
    errorContainer: {
        margin: ".5rem",
    },
    header: {
        fontSize: "5rem",
    },
    signout: {
        display: "flex",
        height: '3rem',
        width: '3.5rem',
        '& svg': {
            display: "flex",
            height: "100%",
        },
        '& svg g': {
            fill: "#c4c4c4",
        }
    }
}));

export default landingStyles;
