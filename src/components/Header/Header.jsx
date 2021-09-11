import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
function Home() {
    
    return(
        <header>
            <nav>
                <ul>
                    <li><Link smooth to="#Inicio"> Inicio</Link></li>
                    <li><Link smooth to="#Objetivo"> Objetivo </Link></li>
                    <li><Link smooth to="#Formacao"> Formação</Link></li>
                    <li><Link smooth to="#Experiencia"> Experiência</Link></li>
                    <li><Link smooth to="#AtvExtra"> Atividades Extras</Link></li>
                    <li><Link smooth to="#Habilidades"> Habilidades</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}export default Home