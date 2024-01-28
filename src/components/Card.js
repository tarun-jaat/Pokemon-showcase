import React,{useState} from "react";
import { Deatils } from "./Deatils";

export const Card = ({
  number,
  name,
  img,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
}) => {
    const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      
      <div  className="MainCard">
        <div className="Card">
          <p>#{number}</p>
          <img src={img} alt="title"></img>
          <h2 style={{color:"whitesmoke",textTransform:"Uppercase"}}>{name}</h2>
          <button
            onClick={() => setShowDetails(true)}
            style={{
              height: "40px",
              width: "150px",
              color: "white",
              border: "none",
              borderRadius: "15px",
              fontSize: "1.3rem",
            }}
          >
            know More
          </button>
        </div>
        { showDetails && <Deatils name={name} img={img} number={number} height={height} weight={weight} setShowDetails={setShowDetails} stat1={stat1} stat2={stat2} stat3={stat3} stat4={stat4} stat5={stat5}/> }

      </div>
    </>
  );
};
