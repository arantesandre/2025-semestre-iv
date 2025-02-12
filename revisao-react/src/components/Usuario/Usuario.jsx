import './Usuario.css'

const Usuario = (props) => {

    return(
        <div>
            <p>Nome de Usuário: {props.username}</p>
        </div>
    )
}

export default Usuario;