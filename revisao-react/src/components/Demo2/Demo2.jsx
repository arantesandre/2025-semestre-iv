import { FcDown, FcUp } from "react-icons/fc";
import "./Demo2.css"
import { useState } from "react";
import Usuario from "../Usuario/Usuario";

const Demo2 = () => {

    const [value, setValue] = useState(0)
    const [user, setUser] = useState('')

    // const getName = () => {

    //     const nomePessoa = prompt("Digite seu nome")
    //     setUser(nomePessoa)

    // }

    return (

        <div className="container-demo2">
            <h2>useState</h2>
            
            <button onClick={() => setValue(value + 1)}> <span> <FcUp /> </span> </button>
            <h2>{value}</h2>
            <button onClick={() => setValue(value - 1)}>  <span> <FcDown /> </span> </button>


            {/* <button onClick={getName}> Fazer login</button> */}
            <button onClick={() => {setUser(prompt("Digite seu nome"))}}> Fazer login</button>

            {/* rederizacao condicional */}
            {/* {user && <p>{`Olá ${user}`}</p>} */}

            {/* if ternario */}
            {user ? <p>{`Olá ${user}`}</p> : <p>Faça login</p>}

            {/* <Usuario  username={user}/> */}

            {user && <Usuario username={user}/>}

        </div>
    )

}

export default Demo2;