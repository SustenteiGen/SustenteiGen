import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import "./Navbar.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import MenuComponent from '../../menuComponent/MenuComponent';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var navBarTema;

    if (token!= "") {
        navBarTema =    <MenuComponent />
    }

    


    return (
        <body>
            <AppBar position="static" className="cor-navbar">
                <Toolbar variant="dense">

                    <Box display="flex">

                        <Link to="/sobre" className="text-decorator">
                            <Box mx={11} className="pointer">
                                <Typography variant="h6" gutterBottom color="textPrimary" align="center" className="cor-ic">SOBRE NÓS</Typography>
                            </Box>
                        </Link>

                        <Link to="/catalogo" className="text-decorator">
                            <Box mx={8} >
                            {navBarTema}
                            </Box>
                        </Link>

                    </Box>


                    <Box mx={18} className="pointer" paddingLeft={5}>
                        <Link to="/home" className="text-decorator">
                            <Box mx={1} marginY={1} >
                                <Typography variant="h5" color="inherit" className="margin-right">
                                    <img src="https://i.imgur.com/DwzvACG.png" alt="logo" height="60px" width="70px" />
                                </Typography>
                            </Box>
                        </Link>
                    </Box>



                    <Box mx={5} display="flex" justifyContent="flex-end">

                        <Link to="/login" className="text-decorator" >
                            <Box mx={14} className="pointer">
                                <Typography variant="h6" color="inherit">
                                    <PermIdentityIcon className="cor-log" />
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={10} className="pointer">
                            <Typography variant="h6" color="inherit">
                                <ShoppingCartOutlinedIcon className="cor-log2" />
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </body>
    )
}

export default Navbar;