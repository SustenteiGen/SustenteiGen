import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import './ListaProd.css';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';

function ListaProd() {
    const [produto, setProduto] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
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
                                    {produto.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.tamanho}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.palavraChave}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.categoria?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioprod/${produto.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarprod/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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