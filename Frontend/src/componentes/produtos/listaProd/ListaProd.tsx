import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProd.css';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast as alerta } from 'react-toastify';

function ListaProd(){
    const [produto, setProduto] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    async function getProduto() {
        await busca("/produtos", setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()

    }, [produto.length])

    return (
        <>
        <Link to={`/formularioprod/`} className="text-decorator-none">
                    <Box mx={1} display="flex" justifyContent="center" mb={1.5} className='p'>
                        <Button variant="contained" className="marginLeft cor-boton3" size='small' color="primary" >
                            Deseja cadastrar uma novo produto?
                        </Button>
                    </Box>
                </Link>
            {
                produto.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                <img src={produto.imagem} width={300} alt=""></img>    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    R$ {produto.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Tamanho: {produto.tamanho}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Palavras Chaves: {produto.palavraChave}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Categoria: {produto.categoria?.tipo}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioprod/${produto.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft cor-boton4" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarprod/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className='cor-boton5' size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaProd;