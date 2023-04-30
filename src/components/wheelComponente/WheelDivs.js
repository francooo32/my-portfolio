import React from 'react'
import { useLocation } from 'react-router-dom';
import 'animate.css';

function WheelDivs() {
    const location = useLocation();
    var formDivsId = 0;

    if(location.state == null){
        formDivsId = 0;
    }else{
        formDivsId = location.state.divId 
    }
    
    if(formDivsId == 1){
        return(
            <div id="divWheel"> 
                <h1>div 1</h1>
            </div>
        )
    }
    else if(formDivsId == 2){
        return(
            <div id="divWheel"> 
                <h1>Pensamos para tí</h1>
            </div>
        )
    }
    else if(formDivsId == 3){
        return(
            <div id="divWheel"> 
                <h1>Adaptabilidad de desarrollo</h1>
            </div>
        )
    }
    else if(formDivsId == 4){
        return(
            <div id="divWheel"> 
                <h1>Programación dinámica</h1>
            </div>
        )
    }
    else if(formDivsId == 5){
        return(
            <div id="divWheel"> 
                <h1>Animaciones modernas</h1>
            </div>
        )
    }
    else if(formDivsId == 6){
        return(
            <div id="divWheel"> 
                <h1 class="animate__animated animate__slideInLeft">Presupuesto inteligente</h1>
            </div>
        )
    }
    else if(formDivsId == 7){
        return(
            <div id="divWheel"> 
                <h1>div 7</h1>
            </div>
        )
    }
    else if(formDivsId == 8){
        return(
            <div id="divWheel"> 
                <h1>div 8</h1>
            </div>
        )
    }
    else {
        return(
            <div id="divWheel"> 
                <h1>Texto prueba</h1>
            </div>
        )
    }
}

export default React.memo(WheelDivs); 