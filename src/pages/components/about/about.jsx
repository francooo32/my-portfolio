import React from 'react'
import "./about.css"
import AboutDesc from '../../../components/aboutdesc/aboutdesc.jsx';
import FooterStatic from "../../../components/footerstatic/footerstatic.jsx"
// import aboutPhoto from "../../public/media/fotoAbout.jpg"

const About = () => {


  return (
    <div className="about">
        <AboutDesc/>
        <FooterStatic/>
    </div>
  )
}

export default About