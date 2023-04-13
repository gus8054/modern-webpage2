import React from "react";
import "./findUs.css";
import images from "../../constants/images";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const FindUs = () => {
  return (
    <section id="find-us" className="find-us section__padding">
      <div className="media app__container">
        <div className="media__text-container ">
          <Subtitle text="Contact" />
          <h1 className="media__title">Find Us</h1>
          <p className="media__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, vero.</p>
          <dl className="find-us__openTime">
            <dt>Opening Hours</dt>
            <dd>Mon - Fri: 10:00 Am - 02:00 Am</dd>
            <dd>Sat - Sun: 10:00 Am - 03:00 Am</dd>
          </dl>
          <Button text="Visit Us" />
        </div>
        <FadeInImg className={"media__img"} imgUrl={images.findus} />
      </div>
    </section>
  );
};

export default FindUs;
