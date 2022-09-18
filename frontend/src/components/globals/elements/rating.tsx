import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface rating {
  title: boolean;
  durchschnitt: number;
  full: boolean;
  ratings: number;
}
function Rating(props: rating) {
  const total = 5;

  var rate = [];
  for (let i = 0; i < total; i++) {
    rate.push(
      <div key={i}>
        {[...new Array(total)].map((arr, icon) => {
          return (
            <FontAwesomeIcon
              key={icon}
              icon={icon <= total - i - 1 ? StarSolid : StarRegular}
              color={icon < total ? "#257708" : " "}
            />
          );
        })}
      </div>
    );
  }

  var rateCheck = [];
  for (let i = 0; i < total; i++) {
    rateCheck.push(
      <div>
        <label className="checkbox-label">
          <input className="checkbox-input" type="checkbox" />
          {[...new Array(total)].map((arr, index) => {
            return (
              <FontAwesomeIcon
                key={arr}
                icon={index <= total - i - 1 ? StarSolid : StarRegular}
                color={index < total ? "#257708" : " "}
              />
            );
          })}
        </label>
      </div>
    );
  }

  let rating;
  if (props.full) {
    rating = (
      <div className="columns is-multiline rating">
        <div className="column is-half pdb-0 has-text-weight-bold">
          <span className="rating-average">
            {props.durchschnitt / props.ratings}{" "}
          </span>{" "}
          von 5
        </div>
        <div className="column is-half has-text-right rating-amount pdb-0">
          {props.ratings} Bewertungen
        </div>
        <div className="column is-full rating-overview">{rate}</div>
      </div>
    );
  } else {
    rating = <div className="rating">{rateCheck}</div>;
  }

  return rating;
}

export default Rating;
