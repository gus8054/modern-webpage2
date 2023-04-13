import React from "react";
import "./header.css";
import steak from "../../asset/steak.jpg";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const Header = () => {
  return (
    <header id="header" className="header section__padding bg__gray">
      <div className="media app__container">
        <div className="media__text-container">
          <Subtitle text="Chase The New Flavour" />
          <h1 className="media__title">The Key To Fine Dining</h1>
          <p className="media__content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dicta voluptate dolore laboriosam deleniti libero similique minima animi molestiae modi!</p>
          <Button text="Explore Menu" />
        </div>
        <FadeInImg className={"media__img"} imgUrl={steak} />
      </div>
    </header>
  );
};

export default Header;
