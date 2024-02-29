import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Tab} from "react-bootstrap";
import { ResponsiveWheelIcons } from "./ResponsiveWheelIcons.js";
import { RESPONSIVE_WHEEL_CONSTS_1,  RESPONSIVE_WHEEL_CONSTS_2} from "./constants/ImgConstants.js";
import Wheel from '../components/wheelComponente/Wheel.js'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

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

  const works = [
    {
      title: "Desarrollo de código"
    },
    {
      title: "Branding"
    },
    {
      title: "Animaciones"
    },
  ];

  
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
                <>
                  <Wheel />
                      <Tab.Container id="responsiveWheel-tabs">
                      <Tab.Content id="slideInUpWheelResponsive" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Row>
                            <div className="divResponsive">
                                {
                                  RESPONSIVE_WHEEL_CONSTS_1.map((wheel, index) => {
                                    return (
                                      <ResponsiveWheelIcons
                                        key={index}
                                        index={index}
                                        {...wheel}
                                        />
                                    )
                                  })
                                }
                            </div>
                            <div className="divResponsive">
                                {
                                  RESPONSIVE_WHEEL_CONSTS_2.map((wheel, index) => {
                                    return (
                                      <ResponsiveWheelIcons
                                        key={index}
                                        index={index+3}
                                        {...wheel}
                                        />
                                    )
                                  })
                                }
                            </div>
                          </Row>
                      </Tab.Content>
                    </Tab.Container>
                </>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
