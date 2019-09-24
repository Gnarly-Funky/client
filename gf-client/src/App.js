import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import useTheme from "./theme";

function App() {
    const theme = createMuiTheme(useTheme);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Wrapper />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
