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
    <section className="section is-medium mb-2">
      <div className="container">
        <p className="has-text-weight-medium">Bewertung</p>
        {[...new Array(total)].map((arr, index) => (
          <FontAwesomeIcon
            key={arr}
            icon={index < aktive ? StarSolid : StarRegular}
            color={index < aktive ? "#257708" : " "}
          />
        ))}
      </div>
    </section>
  );
}

export default Rating;
