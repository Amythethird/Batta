import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface comment {
  title: string;
  autor: string;
  text: string;
  date: string;
  bewertung: number;
}
function Kommentar(props: comment) {
  const wertungMax = 5;
  const aktive = props.bewertung;

  return (
    <div className="box m-2">
      <div className="columns">
        <div className="column">
          <p>{props.title}</p>
          <div className="is-flex mt-1">
            {[...new Array(wertungMax)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < aktive ? StarSolid : StarRegular}
                color={index < aktive ? "#257708" : " "}
                fontSize="10x"
              />
            ))}
          </div>
        </div>
        <div className="column">
          <p className="is-size-7 has-text-right ">{props.date}</p>
          <p className="is-size-7 has-text-right">{props.autor}</p>
        </div>
      </div>
      <p>{props.text}</p>
      <a>weiter lesen</a>
    </div>
  );
}

export default Kommentar;
