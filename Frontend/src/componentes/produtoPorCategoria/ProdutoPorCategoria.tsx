import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { toast } from 'react-toastify';


function ProdutoPorCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');

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
        buscaId("/categorias", setCategoria, {
            headers: {
                'Authorization': token
            }
        });
    }

    return (
        <>
            {
                categoria.produto.map(prod => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {prod.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {prod.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {prod.categoria?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}
export default ProdutoPorCategoria;
