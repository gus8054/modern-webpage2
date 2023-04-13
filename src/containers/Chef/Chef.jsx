import React from "react";
import "./chef.css";
import chef from "../../asset/chef.png";
import quote from "../../asset/quote.png";
import sign from "../../asset/sign.png";
import Subtitle from "../../components/Subtitle/Subtitle";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const Chef = () => {
  return (
    <section id="chef" className="chef section__padding">
      <div className="media app__container">
        <FadeInImg className={"media__img"} imgUrl={chef} />
        <div className="media__text-container">
          <Subtitle text="Chef's Word" />
          <h1 className="media__title">What We Believe In</h1>
          <p className="media__content">
            <img src={quote} alt="quote" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, a aliquid tempore reprehenderit nobis voluptatem at corporis numquam omnis ab veritatis maiores architecto totam iusto minus quae error officia sed neque est repellendus
            obcaecati quidem. Cumque quos neque ratione quibusdam, commodi alias, quas eum iste rem voluptates nam fugiat natus!
          </p>
          <h2 className="chef__name">Kevin Luo</h2>
          <p className="chef__job">Chef &amp; Founder</p>
          <div className="chef__sign-img">
            <img src={sign} alt="sign" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
