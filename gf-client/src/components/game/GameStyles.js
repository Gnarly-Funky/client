import { makeStyles } from "@material-ui/core";

const gameStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
        color: "#c4c4c4",
    },
    menu: {
        display: "flex",
        justifyContent: "flex-end",
    },
    menuTabContainer: {
        display: "flex",
        border: ".3rem solid #4a4a4a",
    },
    menuTab: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        fontSize: "3rem",
        border: ".3rem solid #202020",
        background: "#4a4a4a",
        padding: "1rem",
        userSelect: "none",
        '& svg': {
            height: "3rem",
            width: "3rem",
        },
        '& svg g': {
            fill: "#c4c4c4"
        }
    },
    main: {
        display: "flex",
        width: "100%",
        height: "100%",
        border: ".3rem solid #4a4a4a",
    },
    window: {
        width: "70%",
        border: ".3rem solid #202020",
        background: "#4a4a4a",
    },
    sidebar: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "30%",
        border: ".3rem solid #202020",
    },
    top: {
        border: ".3rem solid #4a4a4a",
        height: "30%",
        width: "100%",
    },
    bottom: {
        display: "flex",
        width: "100%",
        height: "70%",
        border: ".3rem solid #4a4a4a"
    },
    tabs: {
        display: "flex",
        width: "100%",
        height: "4rem",
        border: ".3rem solid #202020",
    },
    tab: {
        display: "flex",
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        border: ".3rem solid #4a4a4a",
        userSelect: "none",
        '&.active': {
            background: "#c4c4c4",
            color: "#202020"
        }
    }
}))

export default gameStyles;