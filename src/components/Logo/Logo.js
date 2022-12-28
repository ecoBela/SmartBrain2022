import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt tiltMaxAngleX={85} perspective={2000} tiltAxis={"x"}>
        <div
          className=" Tilt br2 shadow-2 pa3"
          style={{
            width: "150px",
            height: "150px",
          }}
        >
          <img src={brain} alt="brain icon" style={{ paddingTop: "5px" }}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
