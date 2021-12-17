import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { toast as alerta } from 'react-toastify';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css"

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token));
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'  >
            <Grid alignItems='center' xs={12}>
                <Box paddingX={70} paddingY={30}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className='textologin' >Olá! Digite o seu e-mail e senha para efetuar o login</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' >
                            <Button type='submit' variant='contained' color='primary' className='cor-boton6' >
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' >
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;