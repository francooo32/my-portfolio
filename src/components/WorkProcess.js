import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Wheel from '../components/wheelComponente/Wheel.js'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const WorkProcess = () => {

  const navigation = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      // setTimeout(() => {
      //   navigation("/");
      // }, 4000);
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  
  return (
    <section className="workprocess-about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
            {({ isVisible }) =>
            // <div className={isVisible ? "textRoulette animate__slideInLeft" : ""}>
            //    <h1>{`Programo tus necesidades`} </h1>
            //     <h3>{`Desde simples Web Portfolio hasta enormes aplicaciones e-commerce,
            //     mis conocimientos como desarrollador full stack me permiten adaptarme
            //     a micro y macro necesidades de mis clientes`} </h3>
            //     </div>
                <Wheel/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
