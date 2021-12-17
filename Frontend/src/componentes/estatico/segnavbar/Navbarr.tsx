import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import "./Navbarr.css";
import { Link, useHistory } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';function Navbarr() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usuário deslogado!!!')
        history.push('/home')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="cor-navbar2">
            <Toolbar variant="dense" >
                <Box display="flex" justifyContent="start">
                    <Link to="/prod" className="text-decorator">
                        <Box mx={11} className="pointer2">
                            <Typography variant="h6" color="inherit" style={{fontSize:'15px', fontWeight:'bold'}}>
                                LISTA DE PRODUTOS
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/categoria" className="text-decorator">
                        <Box mx={1} className="pointer2">
                            <Typography variant="h6" color="inherit" style={{fontSize:'15px', fontWeight:'bold'}}>
                                LISTA DE CATEGORIA
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioprod" className="text-decorator">
                        <Box mx={15} className="pointer2">
                            <Typography variant="h6" color="inherit" style={{fontSize:'15px', fontWeight:'bold'}}>
                                FORMULÁRIO PRODUTO
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioCategoria" className="text-decorator">
                        <Box mx={6} className="pointer2">
                            <Typography variant="h6" color="inherit" style={{fontSize:'15px', fontWeight:'bold'}}>
                                FORMULÁRIO CATEGORIA
                            </Typography>
                        </Box>
                    </Link>
                    
                </Box>
                <Box mx={8} onClick={goLogout} >
                        <Typography variant="h6" color="inherit" style={{marginLeft:'1'}}>
                        <PowerSettingsNewOutlinedIcon className='pointer3'/>
                        </Typography>
                    </Box>
            </Toolbar>
        </AppBar>


    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbarr;