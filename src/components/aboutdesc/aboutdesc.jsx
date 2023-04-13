import React from 'react'
import "./aboutdesc.css"
import aboutPhoto from "../../public/media/fotoSobreMi.jpg"

const AboutDesc = () => {


  return (
    <div className="about-container">
        <div className="about-desc">
            <div className="about-title">
                <h1>EVELYN DENISE</h1>
            </div>
            <div className="about-profesion">
                <h3>---  FOTOGRAFA Y RETOCADORA</h3>
            </div>
          <p>Hola! Mi nombre es Evelyn Denise, tengo 26 años y me formé como fotógrafa en ISEC, instituto que me brindo las primeras herramientas para adentrarme en el mundo de la comunicación visual. 
            A lo largo de los años experimente diversas ramas de la fotografía, entre ellas: gastronomía, producto, moda, documental y social. Conocer cada una de ellas me ha llevado a enamorarme principalmente de la fotografía publicitaria, por lo cual continue capacitandome como fotógrafa de producto y gastronomía aprendiendo de grandes referentes de la industria. 
            En lo profesional soy muy detallista, busco resultados de calidad y me apasiona la excelencia. Disfruto de comprometerme y sacar el máximo potencial a cada proyecto.
            Los invito a ver mi portfolio, donde podrán encontrar variedad de trabajos y notar cómo me desenvuelvo en cada área.
          </p>
        </div>
        <div className="about-img">
            <img src={aboutPhoto} alt="aboutImg"></img>
          </div>
    </div>
  )
}

export default AboutDesc