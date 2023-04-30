import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/LogoGrandeCentrado.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProgramSection = () => {
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
      setTimeout(() => {
        navigation("/branding");
      }, 4000);
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner-about animate__slideInLeft" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
               <h1>{`Programo tus necesidades`} </h1>
                <h3>{`Desde simples Web Portfolio hasta enormes aplicaciones e-commerce,
                mis conocimientos como desarrollador full stack me permiten adaptarme
                a micro y macro necesidades de mis clientes`} </h3>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                  <img src={headerImg} alt="Header Img"/>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
