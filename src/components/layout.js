import React from 'react';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import '../styles/global.css';

const Layout = ({ children }) => {
    // not integrated yet !!
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <div className="layout">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Layout;