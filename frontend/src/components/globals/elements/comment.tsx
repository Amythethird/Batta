import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface comment {
  title: string;
  text: string;
  date: string;
  bewertung: number;
  lenght: number;
}
function Comment(props: comment) {
  //const reviewMax = props.lenght;
  const aktive = props.bewertung

  return (
    <div className="column is-4 comment-preview">
      <div className="columns is-gapless mgb-05">
        <div className="column is-8">
          <h4 className="title is-3 mgb-05">{props.title}</h4>
          <div className="is-flex stars">
         
             {[...new Array(props.bewertung)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < aktive ? StarSolid : StarRegular}
                color={index < aktive ? "#257708" : " "}
                fontSize=".75rem"
              />
            ))} 
          </div>
        </div>
        <div className="column is-4">
          
        </div>
      </div>
      <p>{props.text}</p>
      <a className="is-size-6">weiter lesen</a>
    </div>
  );
}

export default Comment;
