import { Col } from "react-bootstrap";

export const WheelChoices = ({ index, name, imagen}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="workprocess-wheel">
              <li >
                <a href="/"><img src={imagen}></img></a>
              </li>
      </div>
    </Col>
  )
}
