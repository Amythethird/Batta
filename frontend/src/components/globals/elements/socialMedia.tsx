import React from "react";
import "../../../styles/style.css";
import Shop from "../../../testdata/shop.json";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Social {
  id: number;
}
const SocialMedia = (props: Social) => {
  /*Filter Social Media*/
  const id = props.id;
  const shop = Shop.find((e) => e.id === id);

  return <div className="social">{shop?.adresse}</div>;
};
export default SocialMedia;
