import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Box } from "@material-ui/core"
import { Link, useHistory, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import './CadastroProd.css';
import Categoria from '../../../models/Categoria';
import Produto from "../../../models/Produto";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroProd() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert('Você precisa estar logado');
        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: '',
            tipo: '',
            palavraChave: '',
            produto: [],
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        imagem: '',
        descricao: '',
        palavraChave: '',
        preco: '',
        tamanho: '',
        categoria: null,
        //Implementar USER FUTURAMENTE
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria : categoria,
        //Implementar USER FUTURAMENTE
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()

    }

    function back() {
        history.push('/prod')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de produto</Typography>
                <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="imagem" label="Imagem Ilustrativa" name="imagem" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome do produto" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição do Produto" name="descricao" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="palavraChave" label="Palavras Chaves:" name="palavraChave" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" name="preco" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.tamanho} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="tamanho" label="Tamanho" name="tamanho" variant="outlined" margin="normal" fullWidth />
                
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Box className='p'>
                    <Button type="submit" variant="contained" className='cor-boton4 'color="primary">
                        Finalizar
                    </Button>
                    <Link to={`/prod/`}  className='text-decorator-none bt'>
                    <Button type="submit" variant="contained" className='cor-boton5 'color="primary">
                        Cancelar
                    </Button>
                    </Link>
                    </Box>
                    
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProd;