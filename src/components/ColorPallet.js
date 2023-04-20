import { Col } from "react-bootstrap";

export const ColorPallet = ({ title, description, color }) => {
  return (
    <Col id="circleColorRow" size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* <img src={imgUrl} /> */}
        <div className="proj-imgbx-circle-style" style={{background: color, borderRadius: '50%', 
                                    borderColor: 'black',
                                    marginTop: '65px'}}> 
                                </div>
        <div className="proj-txtx-colors">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
