import EstruturaPagina from "../components/EstruturaPagina"
import Secao from "../components/Secao";

const PaginaFilme = props => {

    return <EstruturaPagina titulo='Filmes' >
        <Secao titulo="Cadastro de Filmes">
            <h3>Componentes do Cadastro</h3>
        </Secao>
        
        <Secao
            titulo="Listagem de Filmes"
            children={
                [<h3>Cabeçalho da Listagem</h3>,
                <h3>Tabela dos Filmes</h3>]
            } />

    </EstruturaPagina>

}

export default PaginaFilme;