import React, { useState } from "react";
import "./newsletter.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";

const Newsletter = () => {
  const [inputTxt, setInputTxt] = useState();
  const inputHandler = (e) => {
    setInputTxt(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  return (
    <section id="newsletter" className="newsletter section__padding bg__gray">
      <div className="app__container newsletter__container">
        <Subtitle text="Newsletter" />
        <h1 className="newsletter__title">Subscribe To Our Newsletter</h1>
        <p className="newsletter__content">And Never Miss Latest Updates!</p>
        <form className="newsletter__form" action="#" method="get">
          <input placeholder="Enter your email address" value={inputTxt} type="text" className="newsletter__input" onInput={inputHandler} />
          <Button text="Subscribe" />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
