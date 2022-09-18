import React from "react";

interface Achievements {
  title: string;
  icon: string;
  shortDescription: string;
}

function Badges(props: Achievements) {
  let text = props.shortDescription;
  let readMore = false;
  if (text.length > 80) {
    text = text.substring(0, 80) + "...";
    readMore = true;
  }

  return (
    <div className="column is-4 badge">
      <div className="is-flex is-align-items-center badge-inner">
        <img
          src={`${process.env.REACT_APP_STRAPI}${props.icon}`}
          className="pdr-1"
        />
        <div>
          <h3 className="title is-3 mgb-05 has-text-primary">{props.title}</h3>
          <p>{text}</p>
          {readMore ? <a className="is-size-6 mgb-2">weiter lesen</a> : null}
        </div>
      </div>
    </div>
  );
}

export default Badges;
