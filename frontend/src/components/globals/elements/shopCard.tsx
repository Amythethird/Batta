import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";
import Shop from "../../../models/shop";

interface ShopCardProps{
  shop: Shop;
}

function ShopCard(props: ShopCardProps) {

  return (
    <main className="mr-6">
      <div className="shopCard background_light">
        <div
          className="cardHeader"
          style={{
            // eslint-disable-next-line no-undef
            backgroundImage: `url(${process.env.REACT_APP_STRAPI}${props.shop.shopHeaderImage?.url})`,
          }}
        >
          <div className="columns m-1">
            <div className="column is-9 is-flex is-align-items-flex-end">
              <Link
                className="is-size-4 hasBackground pr-1"
                to={`/shop/${props.shop.id}`}
              >
                {props.shop.shopName}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
            <div className="column is-flex is-justify-content-flex-end">
              <a>
                <FontAwesomeIcon
                  className="iconFon  m-2"
                  icon={faHeart}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body mgt-medium mt-1">
          {/* {props.tag.map((i, socialMediaTag) => (
            <div className="tag mr-2 mb-2" key={socialMediaTag}>
              <p>{i}</p>
            </div>
          ))} */}

          <p className="mb-2">{props.shop.description}</p>
          <p className="has-text-weight-medium">Adresse</p>
          <p className="mb-2">{props.shop?.address?.streetName} </p>
          <p className="has-text-weight-medium">Öffnungszeiten</p>
          <p className="mb-2">08:00 Uhr -16:00 Uhr</p>
        </div>
      </div>
    </main>
  );
}

export default ShopCard;
