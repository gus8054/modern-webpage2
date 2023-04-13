import React from "react";
import "./subtitle.css";
import { GiSpoon } from "react-icons/gi";
const Subtitle = ({ text }) => {
  return (
    <div className="subtitle">
      <h4>{text}</h4>
      <GiSpoon size={"3rem"} className="spoon" />
    </div>
  );
};

export default Subtitle;
