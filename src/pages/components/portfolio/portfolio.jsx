import React from 'react'
import "./portfolio.css"
import ImgGallery from "../../../components/imggallery/imggallery.jsx"
import FooterStatic from "../../../components/footerstatic/footerstatic.jsx"  

const Portfolio = () => {


  return (

    <>
    <div className="portfolioTitle">
      <h1>I want to share my work with you</h1>
    </div>
    <div className="portfolio">
      <ImgGallery />
    </div>
    <FooterStatic/>
    </>
  );
}

export default Portfolio
