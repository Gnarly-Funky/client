const useTheme = {
    breakpoints: {
        values: {
            lg: 1400
        }
    },
    typography: {
        fontFamily: "'Nunito', sans-serif",
        htmlFontSize: 10,
        h1: {
            fontWeight: 900,
            fontSize: 34,
            letterSpacing: "7px",
            color: "#5B4Eff",
            textTransform: "uppercase",
        },
        h2: {
            fontSize: "2rem",
            fontWeight: "700",
            color: "#52AB1A",
            letterSpacing: ".2rem",
        },
        h3: {
            fontSize: "1.6rem",
            fontWeight: "700",
            color: "#52AB1A",
        },
        h4: {
            fontSize: "1.8rem",
            fontWeight: "600",
        },
        h6: {
            fontSize: "1.4rem",
        },
        button: {
            fontSize: "1.6rem",
            letterSpacing: ".1rem",
            fontWeight: "600",
            textDecoration: "none",
        },
        //subtitle2 is for errors
        subtitle2: {
            color: "#f44336",
            fontSize: "1.4rem",
        },
    },
    paper: {
        backgroundColor: "#FFF",
        border: "0",
        borderRadius: "20px",
        boxShadow: " 0px 20px 30px -20px rgba(0, 0, 0, 0.3)",
    },
    input: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "900",
        fontSize: "1.6rem",
        border: "none",
        background: "#E2F5D6",
        padding: "2%",
        borderRadius: ".5rem",
        "&:focus": {
            outline: "none",
        },
    },
    headerMargin: {
        marginTop: "5rem",
        marginBottom: "4rem",
    },
    headerPadding: {
        paddingTop: "5rem",
        paddingBottom: "4rem",
    },
    primaryButton: {
        backgroundColor: "#4AA810",
        color: "#E2F5D6",
        textTransform: "uppercase",
        fontSize: "1.6rem",
        textDecoration: "none",
        border: "none",
        borderRadius: "10px",
        boxShadow: "0px 3px #3E8C0D",
        cursor: "pointer",
        transition: "all 25ms ease-in-out",
        letterSpacing: "1px",
        display: "flex",
        justifyContent: "center",
        "&:active": {
            boxShadow: "none",
            margin: "3px 0px -3px 0px",
        },
        "&:focus": {
            outline: "none",
        },
    },
    secondaryButton: {
        backgroundColor: "#FFF",
        border: "2px solid #E3E5E8",
        color: "#4AA810",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxShadow: "0px 3px ##E3E5E8",
        cursor: "pointer",
        transition: "all 25ms ease-in-out",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        "&:active": {
            boxShadow: "none",
            margin: "3px 0px -3px 0px",
        },
        "&:focus": {
            outline: "none",
        },
    },
    disabledButton: {
        backgroundColor: "#e3e5e8",
        color: "#ffffff",
        textTransform: "uppercase",
        fontSize: "1.3rem",
        border: "none",
        borderRadius: "10px",
        boxShadow: "0px 3px #c7cbd1",
        cursor: "pointer",
        opacity: "0.92",
        letterSpacing: "1px",
        justifyContent: "center",
        "&:focus": {
            outline: "none",
        },
    },
    smallIconButton: {
        backgroundColor: "#FFF",
        border: "1px solid #ABB0BA",
        color: "#4AA810",
        textTransform: "uppercase",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 25ms ease-in-out",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        "&:active": {
            boxShadow: "none",
            margin: "3px 0px -3px 0px",
        },
        "&:focus": {
            outline: "none",
        },
    },
    clickable: {
        cursor: "pointer",
        transition: "all 25ms ease-in-out",
        "&:active": {
            boxShadow: "none",
            marginTop: "3px",
            marginBottom: "-3px",
        },
    },
};

export default useTheme;