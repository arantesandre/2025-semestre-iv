/* 1. Conversor de Temperatura

Crie um componente que converta temperaturas entre Celsius, Fahrenheit e Kelvin. O usuário deve poder inserir um valor e selecionar a unidade de entrada e saída. */

import { useState } from 'react';
import './ConversorTemperatura.css';

const ConversorTemperatura = () => {

    const [valueCelsius, setValueCelsius] = useState('')
    const [valueFahrenheit, setValueFahrenheit] = useState('')
    const [valueKelvin, setValueKelvin] = useState('')

    // ====== Converter Celsius para F e K ======
    const converteCelsius = (e) => {
        const valorInputCelsius = e.target.value

        setValueCelsius(valorInputCelsius)
        console.log(valorInputCelsius)

        setValueFahrenheit(((+valorInputCelsius * 9 / 5) + 32).toFixed(1))
        setValueKelvin((+valorInputCelsius + 273.15).toFixed(1))
    }

    // ====== Converter Fahrenheit para K e C ======
    const converteFahrenheit = (e) => {
        const valorInputFahrenheit = e.target.value

        setValueFahrenheit(valorInputFahrenheit)
        console.log(valorInputFahrenheit)

        setValueKelvin(((+valorInputFahrenheit - 32) * 5 / 9 + 273.15).toFixed(1))
        setValueCelsius(((+valorInputFahrenheit - 32) * 5 / 9).toFixed(1))

    }
    // ====== Converter Kelvin para C e F ======
    const converteKelvin = (e) => {
        const valorInputKelvin = e.target.value

        setValueKelvin(valorInputKelvin)
        console.log(valorInputKelvin)

        setValueCelsius((+valorInputKelvin - 273.15).toFixed(1))
        setValueFahrenheit(((+valorInputKelvin - 273.15) * 9 / 5 + 32).toFixed(1))
    }

    return (
        <div className='container-conversor-temperatura'>

            <h1>Conversor de temperatura</h1>

            <div className='container-inputs'>
                <p>Celsius</p>
                <input type="number" value={valueCelsius} onChange={converteCelsius} />
                <p>Fahrenheit</p>
                <input type="number" value={valueFahrenheit} onChange={converteFahrenheit} />
                <p>Kelvin</p>
                <input type="number" value={valueKelvin} onChange={converteKelvin} />
            </div>

        </div>
    );
};

export default ConversorTemperatura;