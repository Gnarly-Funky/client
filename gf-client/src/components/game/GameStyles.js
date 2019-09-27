import { makeStyles } from "@material-ui/core";

const gameStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
        color: "#c4c4c4",
        maxWidth: "800px",
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
        maxHeight: "100%",
    },
    sidebar: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "30%",
        border: ".3rem solid #202020",
    },
    top: {
        display: "flex",
        border: ".3rem solid #4a4a4a",
        height: "30%",
        width: "100%",
    },
    bottom: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70%",
        border: ".3rem solid #4a4a4a",
        alignItems: "center",
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
    },
    mainBottom: {
        display: "flex",
        width: "100%",
        height: "20%",
    },
    descWindow: {
        display: "flex",
        width: "70%",
        paddingRight: "2%",
        flexDirection: "column",
        marginLeft: "2%",
        marginTop: "1%",
        overflowY: "auto",
        borderRight: ".3rem solid #202020",
        maxHeight: "100%",
    },
    descTitle: {
        fontSize: "3rem",
        width: "100%",
        borderBottom: ".2rem solid #c4c4c4",
        marginBottom: ".3rem",
        lineHeight: "2rem",
    },
    desc: {
        fontSize: "2rem",
        lineHeight: "1.5rem",
    },
    playerlist: {
        marginLeft: "2%",
        fontSize: "2rem",
        marginBottom: ".3rem",
        lineHeight: "1.8rem",
    },
    playerlistTitle: {
        marginLeft: "2%",
        fontSize: "3rem",
        marginBottom: ".3rem",
        lineHeight: "2rem",
    },
    inventory: {
        fontSize: "2rem",
    },
    chat: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    chatSection: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "80%",
        wordBreak: "break-word",
        hyphens: "auto",
        overflowY: "auto",
        overflowX: "hidden",
    },
    message: {
        marginLeft: "1rem",
        marginRight: "3rem",
        marginBottom: "1rem",
        display: "flex",
        width: "100%",
        maxWidth: "100%",
        fontSize: "2rem",
        lineHeight: "1rem",
    },
    chatInput: {
        border: ".3rem solid #4a4a4a",
        background: "#202020",
        color: "#c4c4c4",
        width: "100%",
        height: "100%",
        fontSize: "3rem",
        fontFamily: "Visitor, 'sans-serif'",
        padding: "1rem",
    },
    chatForm: {
        width: "100%",
        height: "10%",
    }
}))

export default gameStyles;