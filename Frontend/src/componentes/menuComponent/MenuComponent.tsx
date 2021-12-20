import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { busca } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import "./MenuComponent.css";

export default function MenuComponent() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization':token
            }
        })
    }


    useEffect(() => {
        getCategoria()
    }, [categorias.length])


    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="text" className="marginLeft cor-catalogo" size='small' color="primary"
            >
                CATÁLOGO
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {categorias.map(categoria => (
                    <Link to={`/produtoPorCategoria/${categoria.id}`} className="text-decorator-none">
                        <MenuItem onClick={handleClose} className='text-menu'>{categoria.tipo}</MenuItem>
                    </Link>
                ))
                }


            </Menu>
        </div>
    );
}