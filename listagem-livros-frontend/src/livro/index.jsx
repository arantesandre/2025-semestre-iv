import EstruturaPagina from "../components/EstruturaPagina";
import Secao from "../components/Secao";
import Listagem from "./listagem";
import Cadastro from "./cadastro";

import { useEffect, useState } from "react";

import { buscarLivros } from '../services/livro'

const PaginaLivro = () => {
    const [livros, setLivros] = useState([]);

    const carregarLivros = async () => {
        const livros = await buscarLivros();
        setLivros(livros.data)
    }

    useEffect(() => {
        carregarLivros();
    }, []);

    return (

        <EstruturaPagina>

            <Secao titulo='Livros'>
                <Cadastro />
            </Secao>

            <Secao titulo='Listagem de Livros'>
                <Listagem livros={livros}/>
            </Secao>

        </EstruturaPagina>

    )

}

export default PaginaLivro;