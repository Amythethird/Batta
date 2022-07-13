import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";

interface Shop {
  id: number;
  name: string;
  tag: string[];
  address?: string;
  oeffnungszeiten?: Record<string, string>;
  text: string;
  plz: string;
  img?: string;
}

function ShopCard(props: Shop) {
  return (
    <main className="mr-6">
      <div className="shopCard background_light">
        <div
          className="cardHeader"
          style={{
            // eslint-disable-next-line no-undef
            backgroundImage: `url(${process.env.REACT_APP_STRAPI}${props.img})`,
          }}
        >
          <div className="columns m-1">
            <div className="column is-9 is-flex is-align-items-flex-end">
              <Link
                className="is-size-4 hasBackground pr-1"
                to={`/shop/${props.id}`}
              >
                {props.name}
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
        <div className="card-body p-3 mt-1">
          {props.tag.map((i, socialMediaTag) => (
            <div className="tag mr-2 mb-2" key={socialMediaTag}>
              <p>{i}</p>
            </div>
          ))}

          <p className="mb-2">{props.text}</p>
          <p className="has-text-weight-medium">Adresse</p>
          <p className="mb-2">{props.address}</p>
          <p className="has-text-weight-medium">Öffnungszeiten</p>
          <p className="mb-2">{JSON.stringify(props.oeffnungszeiten)}</p>
        </div>
      </div>
    </main>
  );
}

export default ShopCard;
