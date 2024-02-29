import { Col } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';

export const ResponsiveWheelIcons = ({index, img, alt}) => {
  const navigation = useNavigate();
  let indexDiv = index;
  console.log(index);
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

  return (
    // <Col size={12} sm={6} md={4}>
      <div className="responsive-wheel-imgbx-animated" onClick={handle_click}>
        <img id="wheelResponsiveImg" src={img} alt={alt}></img>
      </div>
    // </Col>
  )
}
