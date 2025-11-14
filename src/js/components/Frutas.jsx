import React, { useState } from 'react'

export const Frutas = () => {

let[cesta, setCesta]= useState(["Manzana", "Pera", "Naranja"])

let nuevaFruta = "kiwi" 

let añdirFruta =()=>{
 setCesta([...cesta, nuevaFruta ]) 
   
}


    return(
        <div>
        <h2>mi cesta de frutas</h2>
            <ul>
                {cesta.map((item, index)=> (
                    <li key={index}> {item} </li>
                ))}


            </ul>
            <button onClick={añdirFruta}>
                Añadir {nuevaFruta}
            </button>

                <p>{cesta.length}</p>
        </div>
    )

}