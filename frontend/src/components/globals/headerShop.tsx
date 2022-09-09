import React from "react";
import "../../styles/style.css";
import SocialMedia from "./elements/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Shop from "../../models/shop";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../state/hooks.state";
import { selectShops } from "../../state/slices/shops.state";

interface params {
  UserId: any;
  imag: string;
  bgImage: string;
}

function HeaderShop(props: params) {
  const url = useLocation();
  const isUser: boolean = url.pathname.includes("user");
  const Shops = useAppSelector(selectShops);
  /* if (isUser) data = Shops.find((e) => e.id === parseInt(props.UserId ?? "0"));
  else */

  let data: Shop = Shops.find((e) => e.id === parseInt(props.UserId ?? "0"))!;
  console.log(process.env.REACT_APP_STRAPI);

  let oeffnungszeiten;
  if (!isUser) {
    oeffnungszeiten = (
      <div className="column is-align-self-flex-start">
        <div className="test p-4">
          <p className="has-text-weight-medium">Öffnungszeiten</p>
          {""}
          <p className="has-text-weight-medium mt-1 ">Adresse</p>
          <p className="is_green">{data?.address?.postalCode}</p>
        </div>
      </div>
    );
  }


  return (
    <main>
      <section
        className="section is-flex is-large pb-0 is-align-content-end mb-space-large"
        style={{
          backgroundImage: `url(${
            // eslint-disable-next-line no-undef
            process.env.REACT_APP_STRAPI
          }${data.productHighlights?.slice(0, 1).map((e) => e.url)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%, 50%",
        }}
      >
        <div className="columns userHeader mb-0">
          <div className="column is-align-self-flex-end  pb-0">
            <div className="information p-3">
              <figure className="imageInhaber"></figure>
              <h2 className="is-size-4">
                {data.shopName}
                <span>
                  <FontAwesomeIcon icon={faHeart} size="1x" />
                </span>
              </h2>
              {data?.label?.map((e, i) => (
                <span className="tag mr-2 mt-5 mb-2 is-primary" key={i}>
                  {e.name}
                </span>
              ))}
              <p>{data?.description}</p>
              <SocialMedia id={(data?.id as number) ?? 0} />
            </div>
          </div>
          {oeffnungszeiten}
        </div>
      </section>
    </main>
  );
}

export default HeaderShop;
