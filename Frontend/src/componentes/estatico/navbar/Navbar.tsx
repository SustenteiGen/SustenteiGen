import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import "./Navbar.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
    return (
        <>
            <AppBar position="static" className="cor-navbar">
                <Toolbar variant="dense">
                    <Box mx={1} marginTop className="pointer"  >
                        <Typography variant="h5" color="inherit">
                            <img src="https://i.imgur.com/AgkYNLG.png" alt="logo" height="50px" width="50px"  />
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Catalogo
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Seu Perfil
                            </Typography>
                        </Box>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                Venda
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                    <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                <ShoppingCartIcon style={{ fontSize: 30, color: "white", marginTop:10 }} />
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;