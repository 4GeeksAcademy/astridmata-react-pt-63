import React, { useState, useEffect } from "react";

function Api() {
    const [personajes, setPersonajes]=useState([])


    //funcion para hacer el fetch de los datos
    const obtenerPersonajes = () => {

        const API_URL = "https://rickandmortyapi.com/api"

        fetch(API_URL + "/character")
            .then(response => response.json()) // transforma la respuesta a JSON
            // .then(data => console.log(data.results)) // usar los datos 
            .then(data => setPersonajes(data.results))
            .catch(error => console.error("Error:", error)) //manejo de errores 
    }
    //usamos useEffect para llamar a la funcion obtenerPersonajes
    useEffect(() => {
        obtenerPersonajes()
        //onload 




    }, [])

    return (
        <div>
            <h1>consumiendo la api de Rick and Morty</h1>
            {personajes.map(personaje => (
                <li key={personaje.id}>Nombre del personaje: {personaje.name}, especie: {personaje.species}</li>
            ))}

        </div>
    )
}

export default Api;