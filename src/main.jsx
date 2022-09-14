//inicio: paso 1
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp' //  ../../04-gif-expert-app/src/GifExpertApp
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode: es para desarrollo y verifica q todo se corra como se debe
  // paso 2: GifExpertApp
   <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)