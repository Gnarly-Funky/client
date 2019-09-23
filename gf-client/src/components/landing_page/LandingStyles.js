import { makeStyles } from "@material-ui/core";

const landingStyles = makeStyles(theme => ({
    root: {
        ...theme.typography,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "60%",
        height: "80%",
    },
    tabs: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    tab: {
        padding: "1rem 1.5rem",
        borderTop: ".8rem solid #333",
        borderLeft: ".8rem solid #333",
        borderRight: ".8rem solid #333",
        backgroundColor: "#777",
        marginBottom: "-.8rem",
        zIndex: "10",
        "&.active": {
            background: "#555",
        },
    },
    window: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#555",
        border: ".8rem solid #333",
    },
    login: {
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        alignItems: "center",
        height: "40%",
    },
    textField: {
        "& label.Mui-focused": {
            color: "#fff",
        },
        "& label": {
            color: "#ccc",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: ".3rem solid #999",
                borderRadius: "0",
            },
            "&:hover fieldset": {
                border: ".3rem solid #bbb",
                borderRadius: "0",
            },
            "&.Mui-focused fieldset": {
                border: ".3rem solid #fff",
                borderRadius: "0",
            },
        },
    },
    input: {
        color: "white",
        fontFamily: "sans-serif",
    },
    button: {
        display: "flex",
        padding: "1rem 1.5rem",
        background: "#777",
        border: ".6rem solid #999",
        color: "#fff",
        // marginTop: "3rem",
        "&:active": {
            border: ".4rem solid #888",
            marginTop: ".4rem",
            marginBottom: "-.3rem",
        },
    },
    buttonWrapper: {
        display: "flex",
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
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "1rem",
    },
    errorContainer: {
        margin: ".5rem",
    }
}));

export default landingStyles;
