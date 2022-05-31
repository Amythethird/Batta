import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface rating {
  einStar: number;
  // zweiStar: number;
  // dreiStar: number;
  // vierStar: number;
  // fünfStar: number;
}
function Rating(props: rating) {
  const total = 5;
  const aktive = props.einStar;
  return (
   
      <div className="container">
        <p className="has-text-weight-medium mb-2">Bewertung</p>
          <div className="is-flex">
              {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < aktive ? StarSolid : StarRegular}
                color={index < aktive ? "#257708" : " "}
              />
            ))}
            <p>{"(42)"}</p>
          </div>
      </div>
  
  );
}

export default Rating;
