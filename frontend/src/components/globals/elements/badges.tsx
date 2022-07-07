import React from "react";

interface Badge{
    src: string
    award_name: string
    award_text: string
    number: number
}
function Badges(props: Badge) {


  return (
        <div className="box badge">
            <div className="is-flex is-align-content-center ">
            <img src={props.src} alt="badge"/> 
            <div className="ml-3">
                <h2 className="is-size-4 is-size-5-mobile">{props.award_name}</h2>
                <p className="is-size-6 is-size-7-mobile">{props.award_text}  
                   </p>
            </div>
            <div className="anzahl">
                {props.number}
            </div>
            </div>
           
        </div>
  );
}

export default Badges;
