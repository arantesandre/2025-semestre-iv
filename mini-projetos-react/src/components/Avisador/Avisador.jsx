import { useState } from 'react';
import './Avisador.css';

const Avisador = () => {

    const [message, setMessage] = useState(false);

    const showMessage = () => {

        setMessage(true)

    }

    return (
        <div>
            <button onClick={showMessage}>Clique aqui</button>

            {message && (<div>
                <p>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</p>

                <button>Exibir Mini Projetos</button>
            </div>)}
        </div>

    );
}

export default Avisador;