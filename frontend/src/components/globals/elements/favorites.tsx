import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as reg } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

interface Favorite {
  shopId: any;
  shopName: string;
  shopImage: string;
  isFavorite: boolean;
}

function Favorites(props: Favorite) {
  return (
    <div className="column is-3">
      <Link to={`/shop/${props.shopId}`}>
        <div className="card favorites-card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={`${process.env.REACT_APP_STRAPI}${props.shopImage}`}
                alt="Placeholder image"
              />
              <a className="favorite-icon">
                <FontAwesomeIcon
                  className="iconFon  m-2"
                  icon={props.isFavorite ? solid : reg}
                  size="2x"
                />
              </a>

              <h2>{props.shopName}</h2>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Favorites;
