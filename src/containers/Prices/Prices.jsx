import React from "react";
import "./prices.css";
import { wines, cocktails } from "../../constants/data";
import menu from "../../asset/menu.png";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";
import FadeInImg from "../../components/FadeInImg/FadeInImg";

const Prices = () => {
  return (
    <section id="prices" className="prices section__padding bg__gray">
      <div className="prices__container app__container">
        <div className="prices__heading">
          <Subtitle text="Menu That Fits Your Palatte" />
          <h1 className="prices__title">Today's Special</h1>
        </div>
        <div className="prices__content">
          <h2 className="prices__content__heading">Wine &amp; Beer</h2>
          <ul className="prices__list">
            {wines.map((wine) => (
              <li className="prices__product">
                <dl>
                  <dt className="prices__product-title">{wine.title}</dt>
                  <div></div>
                  <dd className="prices__product-price">{wine.price}</dd>
                  <dd className="prices__product-tags">{wine.tags}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
        <FadeInImg className={"prices__img"} imgUrl={menu} />
        <div className="prices__content">
          <h2 className="prices__content__heading">Wine &amp; Beer</h2>
          <ul className="prices__list">
            {cocktails.map((cocktail) => (
              <li className="prices__product">
                <dl>
                  <dt className="prices__product-title">{cocktail.title}</dt>
                  <div></div>
                  <dd className="prices__product-price">{cocktail.price}</dd>
                  <dd className="prices__product-tags">{cocktail.tags}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
        <div className="prices__btn">
          <Button text="View More" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
