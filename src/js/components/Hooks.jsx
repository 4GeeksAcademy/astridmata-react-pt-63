import React, {useState, useEffect } from "react"; //primer paso importar el hook 

export const Hooks =()=>{


//segundo paso llamar useState
    //contador sera el valor actual del estado 
    //setContador es la funcion para actualizar el estado
let [contador, setContador] = useState(0)
let [texto, setTexto] = useState("Seguir")
let [btncolor, setBtncolor]= useState("btn-success")

let incrementar = () => {

    // ejemplo 1
    // setContador(contador + 1)

    // ejemplo 2

    if (contador === 0 ) {
        setContador(1)
        setTexto("Dejar de Seguir")
        setBtncolor("btn-danger")
    } else {
        setContador(0)
        setTexto("Seguir")
        setBtncolor("btn-success")
    }



}


return(
    <div>
        <h1>el contador es:{contador} </h1>

        <button className={"btn "+ btncolor} onClick={incrementar} > {texto} </button>
    </div>
)


}