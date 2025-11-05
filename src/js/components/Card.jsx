import React from "react"; //primer paso importar react 

export const Card = (props) => { //paso dos 

    return (
        <>
           

            <div className="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.info}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>




        </>
    )


}