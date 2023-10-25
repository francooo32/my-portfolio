import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
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
               <h1>{`Quien soy?`} </h1>
                <h3>{`Hola! Soy Franco, tengo 30 años y resido en Buenos Aires, Argentina. \n`}
                    <br/>
                    <br/>
                {`La curiosidad y el afán por resolver desafios me han llevado a muy temprana edad a 
                  toparme con la programación. Asi fue como a mis 13 años empece a prueba y error a 
                  desarrollar juegos en c++ con sfml. `} 
                    <br/>
                    <br/>
                {`A los 24 años decidi comenzar la carrera de Ingenieria en Informática, 
                  desde ese entonces tuve la posibilidad de trabajar en relación de dependencia para 
                  importantes entidades tales como Atos Arg, Peugeot S.A, IT Patagonia, Banco ICBC; y de manera 
                  freelance para Vitoria Automobili, Narwal Studios y el Gobierno de la Ciudad, lo cual me ha llevado a mejorar 
                  notablemente mis habilidades y estar en constante contacto con tecnologias de vanguardia. `} 
                  </h3>

            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                  <img id="aboutImg" src={headerImg} alt="Header Img"/>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
