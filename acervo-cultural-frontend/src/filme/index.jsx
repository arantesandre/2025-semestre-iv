import EstruturaPagina from "../components/EstruturaPagina"
import Secao from "../components/Secao";

const PaginaFilme = props => {

    return <EstruturaPagina titulo='Filmes' >
        <Secao titulo="Cadastro Filmes" >
            <h3>Componentes do Cadastro</h3>
        </Secao>
        <Secao titulo="Listagem Filmes" >
            <h3>Cabeçalho da Listagem</h3>
            <h3>Tabela dos Filmes</h3>
            </Secao>
    </EstruturaPagina>

}

export default PaginaFilme;