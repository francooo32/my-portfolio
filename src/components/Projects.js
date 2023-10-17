import { Container, Row, Col, Tab} from "react-bootstrap";
import { VITTORI_PROJECTS, VITTORI_COLORS, VITTORI_WORKS } from "./ProjectsConst/ProjectConsts";
import { ProjectCard } from "./ProjectCard";
import { ColorPallet } from "./ColorPallet";
import { WorkCircle } from "./WorkCircle";
import projImg1 from "../assets/img/deniseFront1.png";
import projImg2 from "../assets/img/deniseFront2.png";
import projImg3 from "../assets/img/deniseFront3.png";
import workImg1 from "../assets/img/IconoDiseñoProgram.png";
import workImg2 from "../assets/img/IconoDiseñoBranding.png";
import workImg3 from "../assets/img/IconoDiseñoAnimacion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Identidad",
      description: "Descubrimos la identidad de su trabajo",
      imgUrl: projImg1,
    },
    {
      title: "Carousel",
      description: "Una forma eficiente y rapida " + "\n" 
                      + " de mostrar el trabajo",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "El reflejo del trabajo de la artista listo para ser explorado",
      imgUrl: projImg3,
    }
  ];

  const colors = [
    {
      title: "#252525",
      description: "Oscuro suave, para resaltar lo importante",
      color: '#252525',
    },
    {
      title: "#eef2ff",
      description: "Blanco suave, para acompañar la vista del visitante",
      color: '#eef2ff',
    },
    {
      title: "#2c2c54",
      description: "Azul oscuro, para blendear y romper la monotonia de" + 
                      "dualidad entre blanco y negro",
      color: '#2c2c54',
    }
  ];

  const works = [
    {
      title: "Desarrollo de código",
      description: "Utilizando tecnologia de última generacion, desarrollo páginas"
      + " de amplio alcance.",
      videoUrl: workImg1,
    },
    {
      title: "Branding",
      description: "Te ayudo a encontrar tu identidad a travez del diseño.",
      videoUrl: workImg2,
    },
    {
      title: "Animaciones",
      description: "Con Adobe After Effect creo sofisticadas animaciones que no solo"
      + " cautivan la atencion de los clientes, sino que la mantienen competitiva en el mercado.",
      videoUrl: workImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Estos son algunos de mis trabajos recientes, diseñados y desarrollados principalmente con ReactJs, 
                  JavaScript, Css para el front end y Java, SpringBoot, Spring security, Sql para el back end.</p>

                  <Tab.Container id="projects-tabs">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        <h1 data-text="Concesionaria">Concesionaria</h1>
                        {
                          VITTORI_PROJECTS.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                        <Row>
                        <h3>Paleta de colores</h3>
                        {
                          VITTORI_COLORS.map((color, index) => {
                            return (
                              <ColorPallet
                                key={index}
                                {...color}
                                />
                            )
                          })
                        }
                        </Row>
                        <Row>
                        <h2 style={{textAlign: 'center', marginTop: '30px', fontSize: '50px'}}>Qué hice</h2>
                        {
                          VITTORI_WORKS.map((work, index) => {
                            return (
                              <WorkCircle
                                key={index}
                                {...work}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>

                <Tab.Container id="projects-tabs">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        <h1 data-text="Portfolio Web">Portfolio Web</h1>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                        <Row>
                        <h3>Paleta de colores</h3>
                        {
                          colors.map((color, index) => {
                            return (
                              <ColorPallet
                                key={index}
                                {...color}
                                />
                            )
                          })
                        }
                        </Row>
                        <Row>
                        <h2 style={{textAlign: 'center', marginTop: '30px', fontSize: '50px'}}>Qué hice</h2>
                        {
                          works.map((work, index) => {
                            return (
                              <WorkCircle
                                key={index}
                                {...work}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
