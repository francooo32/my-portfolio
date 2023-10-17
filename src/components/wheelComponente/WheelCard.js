import React from 'react'
import { Cursor } from 'react-bootstrap-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Wheel.css"

function get_my_coords(theta, radius){
    return{
        x: Math.cos(theta) * radius,
        y: Math.sin(theta) * radius
    }
}

function WheelCard(props) {
    const navigation = useNavigate();
    let indexDiv = props.indexDiv;
    let new_coords = get_my_coords(props.theta, props.radius);

    if(indexDiv == null){
        indexDiv = 0
    }

    function handle_click(event) {
        
        navigation("/#divWheel", {
            state:{
            divId : indexDiv
                        }
                    });
    }
    
    return(
        <div onClick={handle_click} style={{...styles.card, left: `${props.center.x + new_coords.x}px`, 
                        top: `${props.center.y - new_coords.y}px`}}>
        <img id="wheelImg" src={props.pic} style={styles.img}></img>
            
        </div>
    )

    
}

const styles = {
    card: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100px',
        width: '100px',
        background: 'radial-gradient(rgb(18 114 219 / 20%), rgb(7 7 7 / 62%))',
        borderRadius: '100px',
        cursor: 'pointer',
    },
}

export default React.memo(WheelCard); 