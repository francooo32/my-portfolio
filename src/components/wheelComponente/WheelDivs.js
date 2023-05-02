import React from 'react'
import { useLocation } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function WheelDivs() {
    const location = useLocation();
    var formDivsId = 0;

    if(location.state == null){
        formDivsId = 8;
    }else{
        formDivsId = location.state.divId 
    }
    
    if(formDivsId == 1){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Transmito la esencia</h1>
                <p class="animate__animated animate__flipInX">
                    Se que la identidad de una marca es muy importante y prioritario, por eso, una de mis
                    tareas principales es crear una web que transmita la esencia y los ideales de mis clientes,
                    esto lo logro utilizando estrategias de comunicación e identidad visual orientadas al 
                    e-marketing moderno.
                </p>
            </div>
        )
    }
    else if(formDivsId == 2){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Pienso para tí</h1>
                <p class="animate__animated animate__flipInX">
                    Adopto una estrategia de diseño y desarrollo orientado exclusivamente en las necesidades
                    particulares de cada cliente, por medio del intercambio activo, te aconsejo y asisto 
                    en la toma de decisiones orientadas al objetivo de la web.
                </p>
            </div>
        )
    }
    else if(formDivsId == 3){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Adaptabilidad de desarrollo</h1>
                <p class="animate__animated animate__flipInX">
                    Me mantengo actualizado, aprendiendo y dominando todas las tecnologías nuevas
                    lanzadas al mercado para mantener una web moderna y atractiva.
                </p>
            </div>
        )
    }
    else if(formDivsId == 4){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Programación dinámica</h1>
                <p class="animate__animated animate__flipInX">
                    Utilizando multiples lenguajes y frameworks, creo código estructurado de alto rendimiento
                    facil de mantener orientado a la sustentabilidad a largo plazo.
                </p>
            </div>
        )
    }
    else if(formDivsId == 5){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Animaciones modernas</h1>
                <p class="animate__animated animate__flipInX">
                    Creo páginas web interactivas que cuentan con la ultima tecnologia en animación web,
                    asi como también, diseño nuevas utilizando herramientas como Adobe After Effects entre
                    otras.
                </p>
            </div>
        )
    }
    else if(formDivsId == 6){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Presupuesto inteligente</h1>
                <p class="animate__animated animate__flipInX">
                    Me adapto eficientemente al presupuesto y necesidades del cliente, otorgando flexibilidad
                    de pago y un producto rentable.
                </p>
            </div>
        )
    }
    else if(formDivsId == 7){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Comunicación constante</h1>
                <p class="animate__animated animate__flipInX">
                    Me aseguro de mantener charlas con mis clientes para matenerlos actualizados con todos los
                    avances llevados a cabo, enseñar el status del cronograma pactado y atender a todas las 
                    dudas y necesidades de los mismos. Estoy siempre a disposición.
                </p>
            </div>
        )
    }
    else if(formDivsId == 0){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__fadeInLeft">Analizo continuamente</h1>
                <p class="animate__animated animate__flipInX">
                    Estoy continuamente analizando tanto codigo como diseño para encontrar cualquier chance
                    de mejora que se pueda ofrecer a mis clientes, ya sea tecnológica o de comunicación,
                    mantengo la web evolucionando y adaptandose a las necesidades de los exigentes usuarios. 
                </p>
            </div>
        )
    }
    else {
        return(
            <div id="divWheel"> 
                <h1>¿Por qué trabajar conmigo?</h1>
            </div>
        )
    }
}

export default React.memo(WheelDivs); 