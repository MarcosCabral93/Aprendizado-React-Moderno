import React from 'react';
import Objetivo from '../Objetivo/Objetivo'
import Inicio from '../Inicio/Inicio'
import Formacao from '../Formacao/Formacao';
import Experiencia from '../Experiencia/Experiencia';
import AtvExtra from '../AtvExtra/AtvExtra'
import Habilidades from '../Habilidades/Habilidades';

import '../../style.css'
function Home() {
    
    return(
        
        <div className='container'>
           <Inicio/>
           <Objetivo/>
           <Formacao/>
           <Experiencia/>
           <AtvExtra/>
           <Habilidades/>
         
        </div>
       
    )
}export default Home