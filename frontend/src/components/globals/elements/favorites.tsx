import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as reg } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

interface Favorite {
  shopId: any,
  shopName : string,
  shopImage : string  
  isFavorite : boolean

}

function Favorites(props: Favorite) {

  return (
    <section>
         <Link to={`/shop/${props.shopId}`}>
            <div className="favorite mgr-1" style={{
              backgroundImage: `url(${process.env.REACT_APP_STRAPI}${props.shopImage})`
            }}>
              <h3 className="title is-3">{props.shopName}</h3>
              <a className="favorite-icon">
                <FontAwesomeIcon
                  className="iconFon  m-2"
                  icon={props.isFavorite ? solid : reg}
                  size="2x"
                />
              </a>
            </div>
        </Link>
  </section>
  );
  
}

export default Favorites;
