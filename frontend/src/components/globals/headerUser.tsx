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
    <main className="mt-space-large">
      <section
        className="section is-flex is-medium pb-0 is-align-content-end"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_STRAPI}${costumer.profileHeaderImage?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="columns userHeader mb-0">
          <div className="column is-align-self-flex-end  pb-0">
            <div className="information p-3">
              <figure className="imageInhaber">
                <img src={`${process.env.REACT_APP_STRAPI}${costumer.profilePicture?.url}`} alt="user" />
              </figure>
              <div className="is-flex">
                <h2 className="is-size-4 is-size-5-mobile mgl-1 ">
                  {costumer.firstname + " " + costumer.lastname}
                  <a className="mgl-2" onClick={like}>
                    <span>
                      <FontAwesomeIcon icon={fullHeart ? faHeart : reg} />
                    </span>
                  </a>
                </h2>
              </div>
            {/*   <a>Als Freund hinzufügen</a> */}

              <p className="mgt-5 mgl-1 pdr-2">
               {costumer.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeaderUser;
