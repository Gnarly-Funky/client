import { makeStyles } from "@material-ui/core";

const landingStyles = makeStyles(theme => ({
    root: {
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
        padding: ".5rem 1rem",
        borderTop: ".3rem solid #333",
        borderLeft: ".3rem solid #333",
        borderRight: ".3rem solid #333",
        backgroundColor: "#777",
        marginBottom: "-.3rem",
        zIndex: "10",
        "&.active": {
            background: "#555",
        },
    },
    window: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#555",
        border: ".3rem solid #333",
    },
    login: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15%",
        alignItems: "center",
        height: "40%",
    },
    textField: {
        "& label.Mui-focused": {
            color: "#fff",
        },
        "& label": {
            color: "#ccc"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "3px solid #999",
                borderRadius: "0",
            },
            "&:hover fieldset": {
                border: "3px solid #bbb",
                borderRadius: "0",
            },
            "&.Mui-focused fieldset": {
                border: "3px solid #fff",
                borderRadius: "0",
            },
        },
    },
    input: {
        color: "white",
    },
    button: {
        display: "flex",
        padding: ".5rem 1rem",
        background: "#777",
        border: ".2rem solid #999",
        color: "#fff",
        // marginTop: "3rem",
        "&:active": {
            border: ".1rem solid #888",
            marginTop: ".2rem",
            marginBottom: "-.1rem",
        }
    },
    buttonWrapper: {
        display: "flex",
    }
}));

export default landingStyles;
