import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
export const Deatils = ({
  name,
  setShowDetails,
  img,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
}) => {
  return (
    <div className="MainModal">
      <div className="Modal">
      <FontAwesomeIcon  style={{fontSize:"34px", color:"white",background:"black" ,padding:"5px",borderRadius:"50%"}}
          onClick={() => {
            setShowDetails(false);
          }}
          icon={faXmark}
        />
        <div
          className="First"

        >
          <img
            src={img}
            alt="title"
            style={{ height: "200px", width: "300px" }}
          />
          <h2 style={{ color: "black", textTransform: "Uppercase" }}>{name}</h2>
        </div>
        <div className="second">
          <h1>height:{height}</h1>
          <h1>weight:{weight}</h1>
        </div>
        <div className="third">
          <h3>stat1:{stat1}</h3>
          <h3>stat2:{stat2}</h3>
          <h3>stat3:{stat3}</h3>
          <h3>stat4:{stat4}</h3>
          <h3>stat5:{stat5}</h3>
        </div>
        <div>     
        </div>
        
      </div>
    </div>
  );
};
