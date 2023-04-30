import React, {Component} from 'react'
import WheelCard from './WheelCard.js'
import WheelDivs from './WheelDivs.js'
import imgProgram from "../../assets/img/IconosWheel/IconoProgram.png";
import imgAdaptabilidad from "../../assets/img/IconosWheel/IconoAdaptabilidad.png";
import imgAnimaciones from "../../assets/img/IconosWheel/IconoAnimaciones.png";
import imgPensar from "../../assets/img/IconosWheel/IconoPensar.png";
import imgDinero from "../../assets/img/IconosWheel/IconoDinero.png";

export class Wheel extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            radius: 250,
            cards: [],
            theta: 0.0,
            indexDiv: 0,
        }
        
        this.temp_theta = 0.0
        this.anim_id = null;
    }

    

    componentDidMount() {
        let center_of_wheel = {
            x: parseFloat(this.wheel.style.width) / 2.0,
            y: parseFloat(this.wheel.style.height) / 2.0,
        }

        var buttonsChoice = [
            {
                index: 0,
                imagen: "",
                alt: ""
            },
            {
                index: 1,
                imagen: "",
                alt: ""
            },
            {
                index: 2,
                imagen: imgPensar,
                alt: "imgPensar"
            },
            {
                index: 3,
                imagen: imgAdaptabilidad,
                alt: "imgAdaptabilidad"
            },
            {
                index: 4,
                imagen: imgProgram,
                alt: "imgProgram"
            },
            {
                index: 5,
                imagen: imgAnimaciones,
                alt: ""
            },
            {
                index: 6,
                imagen: imgDinero,
                alt: "imgDinero"
            },
            {
                index: 7,
                imagen: "",
                alt: ""
            }
        ]

        let new_cards = []

        for(let i = 0; i < 8; i++){

            if(buttonsChoice[i] != null){
                var listImg = buttonsChoice[i];
            }else{
                buttonsChoice = {
                    index: 0,
                    imagen: imgProgram,
                    alt: "imgDefault"
                }
            }
            
            new_cards.push(
            <WheelCard pic={listImg.imagen} theta={(Math.PI / 4.0) * i} radius={this.state.radius} 
                        center={center_of_wheel} key={`card_${i}`} indexDiv={i} />
            );
        }

        this.setState({cards: new_cards});
    }

    handle_scroll = event => {

        clearTimeout(this.anim_id);

        this.temp_theta += event.deltaY;
        this.wheel.style.transform = `rotate(${this.temp_theta * 0.3}deg)`;

        this.anim_id = setTimeout(() => {
            this.setState({theta: this.temp_theta});
        }, 150);
    }

    render() {
        return (
            <>
                <WheelDivs />
                
                <div onWheel={this.handle_scroll} ref={ref_id => this.wheel = ref_id} style={styles.wheel}>
                    {this.state.cards}
                </div>
            </>
        )
    }

}

const styles = {
    wheel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        // marginLeft: '55%',
        transform: 'translate(160%, -240%)',
        height: '300px',
        width: '300px',
        borderRadius: '150px'
    }
}

export default Wheel