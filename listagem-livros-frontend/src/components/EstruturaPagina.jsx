import './style/estruturaPagina.css';

const EstruturaPagina = props => {

    const { titulo, children } = props;

    return (
        <div className='mainPage'>
            <div className='header'>
                <h1>Livraria</h1>
                <h2>{titulo}</h2>
            </div>
            {children}
        </div>
    );
}

export default EstruturaPagina;