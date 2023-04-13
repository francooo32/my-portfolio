import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        {/* <div className="footer-desc">
            <div>
                <h1>Razon 1</h1>
                <h2>Calidad sobre todas las cosas</h2>
                <p>La calidad es el principal foco de mi trabajo, busco alcanzar los mas altos estandares
                    con mi producto final asi reflejar la inversion del cliente y lo esperado.
                </p>
            </div>
            <div>
                <h1>Razon 2</h1>
                <h2>Compromiso</h2>
                <p>La calidad es el principal foco de mi trabajo, busco alcanzar los mas altos estandares
                    con mi producto final asi reflejar la inversion del cliente y lo esperado.
                </p>
            </div>
        </div>
        <div className="footer-contact">
            <h3>Your name</h3>
            <p>Cosas genericas para escribir</p>
        </div> */}
        <div className="footer-sns">
            <div className="design-by">
                Diseñado por FrancoDev
            </div>
            <div className="sns-links">
                <a href="https://www.instagram.com/ph.evelyndenise/?hl=es" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer"> 
                    <i className="fab fa-facebook facebook"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
            </div>

        </div>

    </footer>
  )
}

export default Footer