import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ColorPallet } from "./ColorPallet";
import { WorkCircle } from "./WorkCircle";
import projImg1 from "../assets/img/deniseFront1.png";
import projImg2 from "../assets/img/deniseFront2.png";
import projImg3 from "../assets/img/deniseFront3.png";
import workVideo1 from "../assets/animations/animationsComponent/circuloProgramFinal2.mp4";
import workVideo2 from "../assets/animations/animationsComponent/circuloProgramFinal2.mp4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];

  const colors = [
    {
      title: "#252525",
      description: "Design & Development",
      color: '#252525',
    },
    {
      title: "#eef2ff",
      description: "Design & Development",
      color: '#eef2ff',
    },
    {
      title: "#2c2c54",
      description: "Design & Development",
      color: '#2c2c54',
    }
  ];

  const works = [
    {
      title: "#252525",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
    },
    {
      title: "#eef2ff",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
    },
    {
      title: "#2c2c54",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
    },
    {
      title: "#252525",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
    },
    {
      title: "#eef2ff",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
    },
    {
      title: "#2c2c54",
      description: "Design & Development",
      videoUrl: workVideo1,
      videoUrl2: workVideo2,
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
                        <h1>Portfolio Web</h1>
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
                        <h3 style={{textAlign: 'center', marginTop: '30px', fontSize: '50px'}}>Qué hice</h3>
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
