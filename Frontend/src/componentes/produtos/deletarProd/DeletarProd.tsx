import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProd.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarProd() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [post, setPosts] = useState<Produto>();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/prod')
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Produto deletado com sucesso');
    }

    function nao() {
        history.push('/prod')
    }
    return (
        <>
            <Box m={2}  >
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o produto?
                            </Typography>
                            <Typography color="textSecondary" >
                                {post?.nome}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft cor-boton4" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} className='cor-boton5'variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarProd;