import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import user from "../../testdata/user.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./socialMedia";

function User() {
  //Routing for User
  const { id } = useParams();
  const userNorm = user.find((e) => e.id === parseInt(id ?? "0"));

  return (
    <main>
      <section className=" user section pb-0 pt-6 mx-2 is-medium mt-space-large mb-space-large">
        <div className="profil container">
          <div className="columns  m-3">
            <div className="column has-text-centered is-one-quarter">
              <figure className="image is-128x128 mb-2">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
              <SocialMedia />
            </div>
            <div className="column">
              <h1 className="is-size-4  has-text-left has-text-weight-bold">
                {userNorm?.name + " " + userNorm?.vorname}
              </h1>
              <p className="is-size-6">Fashionliebhaber und koole Sau</p>
              {userNorm?.tag.map((i, tagItem) => (
                <span className="tag mr-2 mt-5 mb-2" key={tagItem}>
                  {i}
                </span>
              ))}
              <a>{userNorm?.mail}</a>
            </div>
            <div className="column">
              <div className="badge is-flex is-align-items-center">
                <span className="m-2">
                  <FontAwesomeIcon icon={faLeaf} size="2x" />
                </span>
                <div className="badgeText">
                  <h2 className="is-size-6">Fair Trade</h2>
                  <p className="is-size-6">
                    erhalten bei <a>Lisas Klamotten</a>
                  </p>
                </div>
              </div>
              <div className="badge is-flex is-align-items-center">
                <span className="m-2">
                  <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                </span>
                <div className="badgeText">
                  <h2 className="is-size-6">Unverpackt</h2>
                  <p className="is-size-6">
                    erhalten bei <a>Verpacknix</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default User;
