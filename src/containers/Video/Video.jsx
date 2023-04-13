import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import meal from "../../asset/meal.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener("ended", (e) => {
      setIsPlaying(false);
    });
    return () => {
      videoRef.current.removeEventListener("ended", (e) => {
        setIsPlaying(false);
      });
    };
  });
  return (
    <section id="video" className="video">
      <video ref={videoRef} id="meal">
        <source src={meal} type="video/mp4" />
      </video>
      {isPlaying ? (
        <button
          className="video__btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            videoRef.current.pause();
            setIsPlaying(false);
          }}>
          <BsPauseFill />
        </button>
      ) : (
        <button
          className="video__btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            videoRef.current.play();
            setIsPlaying(true);
          }}>
          <BsFillPlayFill />
        </button>
      )}
    </section>
  );
};

export default Video;
