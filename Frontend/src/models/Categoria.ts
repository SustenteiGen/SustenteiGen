import Produto from "./Produto";

interface Categoria{
    id: number;
    descricao: string;
    tipo: string;
    palavraChave: string;
    produto: Produto[],
}

export default Categoria;