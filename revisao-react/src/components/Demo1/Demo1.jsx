import "./Demo1.css";

// importando icon
import { FcAlarmClock } from "react-icons/fc";

const Demo1 = () => {

    // funcao para pegar o nome da pessoa e mostrar em um alert
    const pegarNome = () => {

        const nome = prompt('Digite seu nome')
        alert(`Olá ${nome}`)
    }

    const tratarEntrada = () => {

    }



    return (
        <div className="container-demo1">
            <button onClick={() => { alert('Botão clicado!') }}>Clique aqui</button>

            <button onClick={pegarNome}>Clique aqui de novo</button>

            <img className="img-dev" src="./images/Developer activity-amico.svg" alt="imagem-developer" />
            
            <FcAlarmClock />
        </div>
    )
}

export default Demo1;