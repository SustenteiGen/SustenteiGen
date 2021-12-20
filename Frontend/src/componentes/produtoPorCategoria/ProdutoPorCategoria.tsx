import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Container, Grid } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './ProdutoPorCategoria.css';

function ProdutoPorCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: "",
        descricao: "",
        palavraChave: "",
        produto: [],
    })

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }

    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (
        <>
        <Grid xs={12} container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="baseline">
            {
                categoria.produto.map(prod => (
                    
                        
                        <Box m={1}>
                            <Card variant="outlined">
                                <CardContent className='estilo-card'>
                                    <Typography variant="body2" component="p">
                                        <img src={prod.imagem} width={400} className='catalogo-img'  alt=""></img>
                                    </Typography>

                                    <Typography variant="h5" component="h2" className='estilo-card'>
                                        {prod.nome}
                                    </Typography>
                                    <Typography variant="h5" component="h2" className='estilo-card'>
                                        R$: {prod.preco}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='estilo-card'>
                                        {prod.categoria?.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>
                                        <Button variant="contained" color="primary" className='cor-bot-card'>Compre já</Button>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>

                        
                        

                ))
            }
            </Grid>
        </>
        
        )
}

export default ProdutoPorCategoria;
