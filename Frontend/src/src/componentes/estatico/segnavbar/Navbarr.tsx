import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import "./Navbar.css";

function Navbarr() {
    return (
        <>
            <AppBar  position="static" className="cor-navbar2">
                <Toolbar variant="dense" >
                <Box display="flex" justifyContent="start">
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Higiene Pessoal
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Utensílios domésticos
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Variedades
                            </Typography>
                        </Box>
                </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbarr;