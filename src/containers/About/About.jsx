import React from "react";
import "./about.css";
import { GiSpoon } from "react-icons/gi";
import knife from "../../asset/knife.png";
import Button from "../../components/Button/Button";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const About = () => {
  return (
    <section id="about" className="about section__padding">
      <div className="about__container app__container">
        <div className="about__content">
          <div className="about__title">
            <h1>About Us</h1>
            <GiSpoon size={"3rem"} className="spoon spoon-right" />
          </div>
          <p className="about__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis libero molestiae quibusdam in corporis et, animi nemo facilis praesentium?</p>
          <Button text="Know More" />
        </div>
        <FadeInImg className={"about__knife-img"} imgUrl={knife} />
        <div className="about__content">
          <div className="about__title">
            <h1>Our History</h1>
            <GiSpoon size={"3rem"} className="spoon" />
          </div>
          <p className="about__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis libero molestiae quibusdam in corporis et, animi nemo facilis praesentium?</p>
          <Button text="Know More" />
        </div>
      </div>
    </section>
  );
};

export default About;
