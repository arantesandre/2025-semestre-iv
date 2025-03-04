import { useState } from 'react';
import './CronometroSimples.css';
import { useEffect } from 'react';

// Em desenvolvimento...
const CronometroSimples = () => {
    const [timer, setTimer] = useState(0)
    const [display, setDisplay] = useState(0)

    const pegarSegundos = () => {
        setDisplay(timer => timer +1)
    }

    useEffect(() => {
        const tempo = setInterval(() => {
            pegarSegundos()
        }, 1000)
    }, [])

    return (
        <div className='container-cronometro'>
            <h1>Cronômetro Simples</h1>

            <h2>{display}</h2>

            <div>
                <button onClick={pegarSegundos}>Iniciar</button>
                <button>Pausar</button>
                <button>Parar</button>
                <button>Resetar</button>
            </div>
        </div>
    );
}

export default CronometroSimples;