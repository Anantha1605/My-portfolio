import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import html from "../assets/img/HTML5.svg";
import python from "../assets/img/python.svg";
import C from "../assets/img/C.svg";
import cpp from "../assets/img/C++ (CPlusPlus).svg";
import react from "../assets/img/react.svg";
import tailwindcss from "../assets/img/tailwind.svg";
import mysql from "../assets/img/mysql.svg";
import opencv from "../assets/img/opencv.svg";
import figma from "../assets/img/figma.svg";
import git from "../assets/img/git.svg";
import jupyter from "../assets/img/jupyter.svg";
import lightroom from "../assets/img/adobelightroom.svg";
import css from "../assets/img/css.svg";
import webdev from "../assets/img/webdev.svg";
import ui from "../assets/img/ui.svg";
import radio from "../assets/img/radio.svg";
import writing from "../assets/img/writing.svg";
import contentcreation from "../assets/img/content.svg";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Well these are the few I know, but I'll let you in on a secret<br></br> <i>I always try exploring more!</i>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={webdev} alt="img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={ui} alt="img" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <img src={python} alt="img" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={C} alt="img" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="img" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={html} alt="img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="img" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={tailwindcss} alt="img" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="img" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={opencv} alt="img" />
                  <h5>OpenCV</h5>
                </div>
                <div className="item">
                  <img src={git} alt="img" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="img" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={lightroom} alt="img" />
                  <h5>Lightroom</h5>
                </div>
                <div className="item">
                  <img src={jupyter} alt="img" />
                  <h5>Jupyter</h5>
                </div>
                <div className="item">
                  <img src={radio} alt="img" />
                  <h5>Radio production</h5>
                </div>
                <div className="item">
                  <img src={writing} alt="img" />
                  <h5>Editorial Development</h5>
                </div>
                <div className="item">
                  <img src={contentcreation} alt="img" />
                  <h5>Content Creation</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  );
};
