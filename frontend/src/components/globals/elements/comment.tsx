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
function Comment(props: comment) {
  const wertungMax = 5;
  const aktive = props.bewertung;
  const date = new Date(props.date);
  const months = [
    'Jan',
    'Feb',
    'März',
    'Apr',
    'May',
    'Juni',
    'Juli',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'
  ];

  return (
    <div className="column is-4 comment-preview">
      <div className="columns is-gapless mgb-05">
        <div className="column is-8">
          <h4 className="title is-3 mgb-05">{props.title}</h4>
          <div className="is-flex stars">
            {[...new Array(wertungMax)].map((arr, index) => (
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
          <p className="is-size-7 has-text-right mgb-0">{date.getDate()}. {months[date.getMonth()]} {date.getFullYear()}</p>
          <p className="is-size-7 has-text-right"><b>{props.autor}</b></p>
        </div>
      </div>
      <p>{props.text}</p>
      <a className="is-size-6">weiter lesen</a>
    </div>
  );
}

export default Comment;
