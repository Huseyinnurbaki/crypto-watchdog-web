import React from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@material-ui/core/Box';
import { Gradient } from 'react-gradient';

const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];
export default function Table(props) {
const { data, columns, options, tableHeader, tableTitle } = props;
const lastUpdated = new Date().toUTCString();
const lastUpdatedStr = `Updated At: ${lastUpdated}`
    
let theme = createTheme();
theme = responsiveFontSizes(theme);
return (
    <ThemeProvider theme={theme}>
        <h1 style={{color: 'white', marginTop: 20}} >
      {tableHeader}
      </h1>

         <Gradient
        gradients={gradients}
        property="background"
        duration={300}
        angle="45deg"
        className="gradnt"
        > 
        <Box p={1} >
        {typeof window !== 'undefined' &&
        <MUIDataTable
        title={tableTitle || lastUpdatedStr}
        data={data}
        columns={columns}
        options={options}
        />}
        </Box>
        </Gradient>
    </ThemeProvider>

)
}

