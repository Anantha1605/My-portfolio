import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/logo black.png";
import projImg2 from "../assets/img/greatnotes.png";
import projImgstock from "../assets/img/stock.jpg";
import radio from "../assets/img/radiopunk.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BHARAT-The Hidden Jewels of India",
      description: "Tourism site",
      imgUrl: projImg1,
      link: "https://github.com/Anantha1605/BHARAT---The-Hidden-Jewels-of-India",
    },
    {
      title: "Great notes",
      description: "E-commerce platform",
      imgUrl: projImg2,
      link: "https://github.com/Anantha1605/Project-Saarthi_forked",
    },
    {
      title: "Skytrack",
      description: "Database development and management",
      imgUrl: projImgstock,
      link: "https://github.com/Anantha1605/SkyTrack",
    },
    {
      title: "Hand recognition",
      description: "OpenCV for detection",
      imgUrl: projImgstock,
      link: "https://github.com/Anantha1605/Hand-Recognition-with-python-OpenCV",
    },
    {
      title: "RadioPunk",
      description: "SVNIT's very own",
      imgUrl: radio,
      link: "https://www.instagram.com/renesa_svnit/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Voila! <br/>Not enough? Dont worry, I am still working. More to come, Stay Tuned.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects?</Nav.Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> 
                    */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    </Tab.Pane>
                    {/*
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    */}
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
