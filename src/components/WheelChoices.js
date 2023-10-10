import { Col } from "react-bootstrap";

export const WheelChoices = ({ index, name, imagen}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="workprocess-wheel">
        {/* <video src={videoUrl} autoPlay loop muted style={{width: '60px'}}/> */}
 

            {/* <div
              key={name} 
              className="workprocess-wheel-menu"
              style={{backgroundColor: "#d32020", 
                      transform: `rotate(${(360 / 6 ) * index}deg) translate(175%)`,
                      textAlign: "center"
                    }}
            >
              <img src={imagen}></img>
            </div> */}

              <li >
                <a href="/"><img src={imagen}></img></a>
              </li>
      </div>
      {/* <div className="proj-txtx-animated">
          <h4>{title}</h4>
          <span>{description}</span>
        </div> */}
    </Col>
  )
}
