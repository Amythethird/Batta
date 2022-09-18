import React from "react";
import "../../../styles/style.css";

interface Social {
  url: string;
  platform: string;
  icon: string;
}

function SocialMedia(props: Social) {
  return (
    <a
      href={props.url}
      className="social-media-icon is-flex is-justify-content-center is-align-items-center mgr-1"
    >
      <img src={`${process.env.REACT_APP_STRAPI}${props.icon}`} />
    </a>
  );
}
export default SocialMedia;
