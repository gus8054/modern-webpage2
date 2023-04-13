import React from "react";
import "./awards.css";
import { awards } from "../../constants/data";
import imgs from "../../constants/images";
import Subtitle from "../../components/Subtitle/Subtitle";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const Awards = () => {
  return (
    <section id="awards" className="awards section__padding">
      <div className="media app__container">
        <div className=".media__text-container">
          <Subtitle text="Awards &amp; Recognition" />
          <h1 className="awards__title">Our Laurels</h1>
          <ul className="awards__list">
            {awards.map((award) => (
              <li className="awards__list-item">
                <div className="awards__list-item-img">
                  <img src={award.imgUrl} alt={String(award.imgUrl).split(".")[0].split("/").at(-1)} />
                </div>
                <h3>{award.title}</h3>
                <p>{award.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
        <FadeInImg className={"awards__img"} imgUrl={imgs.laurels} />
      </div>
    </section>
  );
};

export default Awards;
