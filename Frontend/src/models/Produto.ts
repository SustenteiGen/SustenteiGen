import Categoria from './Categoria';
import User from './User';

interface Produto{
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    palavraChave: string;
    preco: string;
    tamanho: string;
    categoria?: Categoria | null;
    User?: User | null;
}

export default Produto;