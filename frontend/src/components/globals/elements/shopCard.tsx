import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";
import Shop from "../../../models/shop";

interface ShopCardProps {
  shop: Shop;
}

function ShopCard(props: ShopCardProps) {
  return (
    <div className="column is-3">
      <Link to={`/shop/${props.shop.id}`}>
        <div className="card shop-preview">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={`${process.env.REACT_APP_STRAPI}${props.shop.shopHeaderImage?.url}`}
                alt="Placeholder image"
              />
              <h3 className="title is-3">{props.shop.shopName}</h3>
              <a className="favorite-icon">
                <FontAwesomeIcon
                  className="iconFon  m-2"
                  icon={faHeart}
                  size="2x"
                />
              </a>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p>{props.shop.description}</p>
              <p>
                <b>Adresse:</b>
                <br />
                {props.shop?.address?.streetName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShopCard;
