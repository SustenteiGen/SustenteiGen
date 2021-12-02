import React from "react";
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2' ></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>

                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className='textos2'> Cadastrar </Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>

                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;