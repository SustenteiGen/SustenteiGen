import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { Link, useHistory, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { height } from '@mui/system';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';



function CadastroCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        tipo: '',
        palavraChave: '',
        produto: [],
    })

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
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Categoria atualizada com sucesso")
        } else{
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Categoria cadastrada com sucesso")
        }
        back()

    }

    function back() {
        history.push('/categoria')
    }

    return (
        <Container maxWidth="sm" className="topo vh">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de Categoria</Typography>
                <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="Tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value={categoria.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="palavraChave" label="Palavra Chave" variant="outlined" name="palavraChave" margin="normal" fullWidth />
                <Button type="submit" className='cor-boton4' variant="contained" color="primary">
                    Finalizar
                </Button>
                <Link to={`/categoria/`}  className='text-decorator-none bt'>
                <Button variant="contained" className='cor-boton5' color="secondary" >Cancelar</Button>
                </Link>
                
            </form>
                
        </Container>
    )
}

export default CadastroCategoria;