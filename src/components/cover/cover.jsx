import React from 'react'
import "./cover.css"
import { Container, Row, Col } from "react-bootstrap";
// import 'animate.css';
import aboutPhoto from "../../public/media/fotoAbout.jpg"
import Button from '../../components/button/button.jsx';
import { BUTTON_TYPES } from '../../common/data/buttonConst';

const Cover = () => {

  // return (
  //   <div className="cover-container">
  //     <div className="cover-container-text">
  //       <h1>Franco</h1>
  //         <h3>Dev&Art</h3>
  //         {/* <p>Fotografía</p> */}
  //     </div>
  //       {/* <video className="video" src={testVideo} autoPlay loop muted/> */}
  //       {/* <img src={aboutPhoto} alt="aboutImg"></img> */}
        
  //       <div className="button-wrapper">
  //         <Button type={BUTTON_TYPES.PRIMARY} btnText="Mi trabajo ↓"/>
  //         <Button type={BUTTON_TYPES.SECONDARY} btnText="Contactame" />
  //       </div>
  //   </div>
  // )
return(
  <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={12}>
          {/* <TrackVisibility> */}
            {/* {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
              {/* <span className="tagline">Welcome to my Portfolio</span> */}
              {/* <h1>{`FrancoDev&Art`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FullStack Developer", "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}

                <h1>{`FrancoDev&Art`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FullStack Developer", "Web Developer", "Web Designer" ]'><span className="wrap">Web dev</span></span></h1>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}

            {/* </div>} */}
          {/* </TrackVisibility> */}
        </Col>
        {/* <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
              </div>}
          </TrackVisibility>
        </Col> */}
      </Row>
    </Container>
  </section>
)
  
}

export default Cover