import React from "react";
import "./App.css";
import Wrapper from "./Wrapper";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import useTheme from './theme';

function App() {
    const theme = createMuiTheme(useTheme);
    return (
        <ThemeProvider theme={theme}>
            <Wrapper />
        </ThemeProvider>
    )
}

export default App;
