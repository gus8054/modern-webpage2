import React, { useEffect, useRef } from "react";
import "./fadeInImg.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const FadeInImg = ({ className, imgUrl }) => {
  const { addTarget, removeTarget } = useScrollAnimation("fade-in");
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      addTarget(imgRef.current);
    }
  }, [addTarget]);

  useEffect(() => {
    return () => {
      if (imgRef.current) {
        removeTarget(imgRef.current);
      }
    };
  }, [removeTarget]);
  return (
    <div className={className} ref={imgRef}>
      <img src={imgUrl} alt={imgUrl} />
    </div>
  );
};

export default FadeInImg;
