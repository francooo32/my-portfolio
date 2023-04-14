import { Col } from "react-bootstrap";

export const ColorPallet = ({ title, description, color }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* <img src={imgUrl} /> */}
        <div style={{background: color, borderRadius: '50%', width: '300px',
                                    height: '290px', borderColor: 'black',
                                    marginTop: '20px'}}> 
                                </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
