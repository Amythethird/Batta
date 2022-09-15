import React from "react";
import "../../styles/style.css";
//import SocialMedia from "./elements/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Shop from "../../models/shop";
// import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../state/hooks.state";
import { selectShops } from "../../state/slices/shops.state";

interface params {
  UserId: any;
  imag: string;
  bgImage: string;
}

function HeaderShop(props: params) {
  // const url = useLocation();
  // const isUser: boolean = url.pathname.includes("user");
  const Shops = useAppSelector(selectShops);

  let data: Shop = Shops.find((e) => e.id === parseInt(props.UserId ?? "0"))!;

  // let oeffnungszeiten;
  // if (!isUser) {
  //   oeffnungszeiten = (
  //     <div className="column is-align-self-flex-start">
  //       <div className="test p-4">
  //         <p className="has-text-weight-medium mt-1 ">Adresse</p>
  //         <p className="is_green">
  //           {data.address?.streetName}
  //           {data.address?.houseNumber}
  //           {data?.address?.postalCode}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <header
      className="shop-header"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_STRAPI}${data.shopHeaderImage?.url})`,
      }}
    >
      <div className="container">
        <div className="columns is-right">
          <div className="column is-3 is-offset-9 opening-hours content">
            <p>
              <b>Öffnungszeiten:</b>
              <br />
              Mo-Fr: 9:00 - 18:00 Uhr <br />
              Sa: 10:00 - 16:00 Uhr
            </p>
            <p>
              <b>Adresse:</b>
              <br />{" "}
              <a href="#">
                {data.address?.streetName}
                {data.address?.houseNumber}
                <br />
                {data.address?.postalCode}
              </a>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 shop-short-info content">
            {/* <figure className="imageInhaber"></figure> */}
            <h2 className="title is-4 has-text-primary mgt-1 mgb-05">
              {data.shopName} &nbsp;
              <span>
                <FontAwesomeIcon icon={faHeart} size="1x" />
              </span>
            </h2>
            {data?.label?.map((e, i) => (
              <span className="tag" key={i}>
                {e.name}
              </span>
            ))}
            <p className="mgt-05">{data?.description}</p>
            {data.socialMedia?.map((e, i) => (
              <span className="socialMedia mgr-1 mgt-2" key={i}>
                <a href={e.url}>{e.platform}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderShop;
