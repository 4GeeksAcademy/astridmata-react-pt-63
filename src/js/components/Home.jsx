import React from "react";

import { Card } from "./Card.jsx"   //paso tres exportar el componente 
import Navbar from "./Navbar.jsx"
import { Hooks } from "./Hooks.jsx";
import { Form } from "./Form.jsx";


//create your first component
// const Home = ({seconds}) => {
const Home = (props) => {
	// let receta = [
	// 	{
	// 		nombre: "tarta de manzana", info: "una deliciosa tarta de manzana"
	// 	},
	// 	{
	// 		nombre: "pasta", info: "una deliciosa pasta italiana"
	// 	},
	// 	{
	// 		nombre: "sopa", info: "una deliciosa sopa de tomate"
	// 	},
	// 	{
	// 		nombre: "arroz", info: "un delicioso arroz"
	// 	}
	// ]



	return (
		<div className="">
			<Navbar />


			{/* llamar al componente */}

			{/* <div className="row container">
				{receta.map((item, index) => (
					<div className="col-lg-3 col-md-6 col-12">
						<Card key={index} nombre={item.nombre} info={item.info} />
					</div>
				))}

			</div> */}

			<h2>CONTADOR </h2>
			{/* <p>esto es home! y han pasado {seconds} segundos</p> */}

			<p>{props.digitTwo}</p>
			<p>{props.digitOne}</p>


			<Hooks />

			<Form/>
		</div>
	);
};

export default Home;