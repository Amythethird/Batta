import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../styles/style.css";

interface Shop {
  id: number;
  name: string;
  tag: string[];
  adresse?: string;
  oeffnungszeiten: string;
  text: string;
  plz: string;
  img?: string;
}

function ShopCard(props: Shop) {
  return (
    <main className="mr-6">
      <div className="cardShop background_light">
        <div
          className="cardHeader"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <div className="columns m-1">
            <div className="column is-9 is-flex is-align-items-flex-end">
              <a
                className="is-size-4 hasBackground pr-1"
                href={"/shop/" + props.id}
              >
                {props.name}
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
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
          <p className="mb-2">{props.adresse + " " + props.plz}</p>
          <p className="has-text-weight-medium">Öffnungszeiten</p>
          <p className="mb-2">
            {props.oeffnungszeiten.split("--").map((i, key) => {
              return <p key={key}>{i}</p>;
            })}
          </p>
        </div>
      </div>
    </main>
  );
}

export default ShopCard;
