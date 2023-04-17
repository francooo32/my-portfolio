import { Col } from "react-bootstrap";

export const WorkCircle = ({ title, description, videoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx-animated">
        <video src={videoUrl} autoPlay loop muted style={{width: '60px'}}/>
        {/* <video src={videoUrl2} autoPlay loop muted style={{width: '60px'}}/> */}
        {/* <h4>{title}</h4>
        <span>{description}</span> */}
      </div>
      <div className="proj-txtx-animated">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
    </Col>
  )
}
