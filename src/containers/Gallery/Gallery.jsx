import React from "react";
import "./gallery.css";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import images from "../../constants/images";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";

const Gallery = () => {
  function clickHandler(e, direction) {
    e.preventDefault();
    e.stopPropagation();
    const gallerySilder = e.currentTarget.parentElement.querySelector(".gallery__slider");
    const galleryImgs = gallerySilder.querySelector(".gallery__imgs");
    const columnGap = Number(getComputedStyle(galleryImgs).getPropertyValue("column-gap").replace("px", ""));
    const galleryImg = galleryImgs.querySelector(".gallery__img");
    const imgWidth = Number(getComputedStyle(galleryImg).getPropertyValue("width").replace("px", ""));
    if (direction === "left") {
      gallerySilder.scrollLeft -= imgWidth + columnGap;
    } else {
      gallerySilder.scrollLeft += imgWidth + columnGap;
    }
  }
  return (
    <section id="gallery" className="gallery section__padding bg__gray">
      <div className="media app__container">
        <div className="media__text-content">
          <Subtitle text="Instagram" />
          <h1 className="media__title">Photo Gallery</h1>
          <p className="media__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum minus officiis? Quisquam, placeat nostrum.</p>
          <Button text="View More" />
        </div>
        <div className="media__img gallery__slider-container">
          <div className="gallery__slider">
            <div className="gallery__imgs">
              {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((imgUrl) => (
                <div className="gallery__img">
                  <img src={imgUrl} alt={imgUrl.split(".")[0].split("/").at(-1)} />
                  <div className="gallery__img-overlay">
                    <a href="#" className="gallery__img-instagram">
                      <SlSocialInstagram size={"3rem"} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="gallery__img-slider__btn gallery__img-slider__btn_left"
            type="button"
            onClick={(e) => {
              clickHandler(e, "left");
            }}>
            <AiOutlineLeft size={"2rem"} />
          </button>
          <button
            className="gallery__img-slider__btn gallery__img-slider__btn_right"
            type="button"
            onClick={(e) => {
              clickHandler(e, "right");
            }}>
            <AiOutlineRight size={"2rem"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
