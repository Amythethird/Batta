import React from "react";

interface Achievements{
  title: string,
  icon: string,
  shortDescription: string
}

function Badges(props: Achievements) {
  let text = props.shortDescription;
  let readMore = false;
  if (text.length > 80) {
    text = text.substring(0, 80) + "...";
    readMore = true
    
  }
  
  
  return (
    <div className="box badge mgr-2">
    <div className="is-flex is-align-items-center ">
      <img src={`${process.env.REACT_APP_STRAPI}${props.icon}`} className="pdr-1"/>
      <div className="ml-3">
        <h2 className="is-size-4 is-size-5-mobile">{props.title}</h2>
        <p className="is-size-6 is-size-7-mobile">{text}</p>
        {readMore ? <a className="is-size-6 mgb-2">weiter lesen</a> : null}
      </div>
     
    </div>
  </div>
  );
}

export default Badges;
