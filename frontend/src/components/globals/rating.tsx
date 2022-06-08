import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface rating {
  title: boolean;
  durchschnitt: number;
  full: boolean;
}
function Rating(props: rating) {
  const total = 5;

  var rate = [];
  for (let i = 0; i < total; i++) {
    rate.push(
      <div>
        {[...new Array(total)].map((arr, index) => {
          return (
            <FontAwesomeIcon
              key={arr}
              icon={index <= total - i - 1 ? StarSolid : StarRegular}
              color={index < total ? "#257708" : " "}
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
         <label className="checkbox mr-2">
                <input type="checkbox" />
         </label>
        {[...new Array(total)].map((arr, index) => {
          return (
            <FontAwesomeIcon
              key={arr}
              icon={index <= total - i - 1 ? StarSolid : StarRegular}
              color={index < total ? "#257708" : " "}
            />
          );
        })}
      </div>
    );
  }

  let rating;
  if (props.full) {
    rating = (
      <div>
        <div className="is-flex">
          <p className="has-text-weight-medium mb-2 is-size-3 mr-1">
            {props.durchschnitt}
          </p>
          <p>von 5</p>
        </div>
        <div className="rating">{rate}</div>
      </div>
    );
  } else {
    rating = (
      <div>
        <div className="rating">{rateCheck}</div>
      </div>
    );
  }

  return <div className="container">{rating}</div>;
}

export default Rating;

/*
 {[...new Array(total)].map((arr, index) => (
              <FontAwesomeIcon
                key={arr}
                icon={index < aktive ? StarSolid : StarRegular}
                color={index < aktive ? "#257708" : " "}
              />
            ))}
            <p>{"(42)"}</p>
*/
