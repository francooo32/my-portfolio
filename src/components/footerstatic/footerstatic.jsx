import React from 'react'
import './footerstatic.css'

const FooterStatic = () => {
  return (
    <footer className="footerstatic">
        <div className="footerstatic-sns">
            <div className="footestaticdesign-by">
                Diseñado por FrancoDev
            </div>
            <div className="footerstaticsns-links">
                <a href="https://www.instagram.com/ph.evelyndenise/?hl=es" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>
                <a href="https://phevelyndenise.myportfolio.com/work" target="_blank" rel="noreferrer"> 
                    <i className="fab fa-behance behance"></i>
                </a>
                <a href="https://www.linkedin.com/in/santorodenise/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="mailto:ph.evelyndenise@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-envelope envelope"></i>
                </a>
            </div>

        </div>

    </footer>
  )
}

export default FooterStatic