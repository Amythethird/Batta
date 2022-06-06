import React from "react";
import "../../styles/style.css";
import SocialMedia from "../app/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import User from "../../testdata/user.json";
import Shop from "../../testdata/shop.json";
import { useLocation } from "react-router-dom";

interface params {
  UserId: any;
}

function HeaderUser(props: params) {
  let data;

  const url = useLocation();
  const isUser: boolean = url.pathname.includes("user");

  if (isUser) data = User.find((e) => e.id === parseInt(props.UserId ?? "0"));
  else data = Shop.find((e) => e.id === parseInt(props.UserId ?? "0"));
  console.log(data, isUser);

  let oeffnungszeiten;
  if (!isUser) {
    oeffnungszeiten = (
      <div className="column is-align-self-flex-start">
        <div className="test p-4">
          <p className="has-text-weight-medium">Öffnungszeiten</p>
          {data?.oeffnungszeiten} <br />
          <p className="has-text-weight-medium mt-1 ">Adresse</p>
          <p className="is_green">
            {data?.adresse} <br />
            {data?.plz}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <section
        className="section is-flex is-large pb-0 is-align-content-end mb-space-large"
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="columns userHeader mb-0">
          <div className="column is-align-self-flex-end  pb-0">
            <div className="information p-3">
              <figure className="imageInhaber">
                <img src={data?.profileImage} />
              </figure>
              <h2 className="is-size-4">
                {data?.name}
                <span>
                  <FontAwesomeIcon icon={faHeart} size="1x" />
                </span>
              </h2>
              {data?.tag.map((e, i) => (
                <span className="tag mr-2 mt-5 mb-2 is-primary" key={i}>
                  {e}
                </span>
              ))}
              <p>{data?.text}</p>
              <SocialMedia id={data?.id ?? 0} />
            </div>
          </div>
          {oeffnungszeiten}
        </div>
      </section>
    </main>
  );
}

export default HeaderUser;
