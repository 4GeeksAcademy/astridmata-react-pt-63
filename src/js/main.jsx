import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
/////////////////////////////////// primera version 
// let segundos = 0
// setInterval(()=>{
  


//   ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home seconds={segundos} />
//   </React.StrictMode>,
// )

//   segundos = segundos +1;
// }, 1000)



/////////////////////////segunda version 

let root = ReactDOM.createRoot(document.getElementById('root'))


let contador = 0
setInterval(()=>{

  const two = Math.floor((contador/10) % 10)
  const one = Math.floor((contador/1) % 10)

  contador++

  root.render(
  <React.StrictMode>
    <Home digitOne={one} digitTwo={two} />
  </React.StrictMode>,
)
  
},1000)


