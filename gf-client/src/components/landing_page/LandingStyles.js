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
        padding: ".5rem 1rem",
        borderTop: ".3rem solid #333",
        borderLeft: ".3rem solid #333",
        borderRight: ".3rem solid #333",
        backgroundColor: "#555",
        marginBottom: "-.3rem",
        zIndex: "10",
        "&.active": {
            background: "#111",
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
    },
    textField: {
        "& label.Mui-focused": {
            color: "#fff",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#999",
            },
            "&:hover fieldset": {
                borderColor: "#bbb",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#fff",
            },
        },
    },
}));

export default landingStyles;
