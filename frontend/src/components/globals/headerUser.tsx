import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as reg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppSelector } from "../../state/hooks.state";
import { selectCustomer } from "../../state/slices/customer.state";
import "../../styles/style.css";

function HeaderUser() {
  let fullHeart = false;
  const costumer = useAppSelector(selectCustomer);
  const like = (event: any) => {
    event.preventDefault();
    fullHeart = true;
  };

  return (
    <header
      className="mt-space-large image-header"
      style={{
        /* eslint-disable-next-line no-undef */
        backgroundImage: `url(${process.env.REACT_APP_STRAPI}${costumer.profileHeaderImage?.url})`,
      }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-4 image-header-short-info content mgt-large">
            <figure className="user-image">
              <img
                className="image"
                /* eslint-disable-next-line no-undef */
                src={`${process.env.REACT_APP_STRAPI}${costumer.profilePicture?.url}`}
                alt="user"
              />
            </figure>
            <h2 className="title is-2 has-text-primary mgt-1 mgb-05">
              {costumer.firstname + " " + costumer.lastname} &nbsp;
              <a onClick={like}>
                <span>
                  <FontAwesomeIcon icon={fullHeart ? faHeart : reg} />
                </span>
              </a>
            </h2>
            {/*   <a>Als Freund hinzufügen</a> */}

            <p>{costumer.shortDescription}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
