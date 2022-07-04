import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faHeart as reg } from "@fortawesome/free-regular-svg-icons";
import React from "react";

interface Favorite{
    isShop: boolean
    name: string
    isFavorite: boolean
    url: string

}



function Favorites(props: Favorite) {
let favorites;
    if(props.isShop){
        favorites =(
            <div className="box favorite is-flex is-align-items-end"
            style={
                {  
                    backgroundImage: `url(${props.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >       
              <div className="icon">
              <FontAwesomeIcon icon={props.isFavorite ? faHeart : reg}/>
              </div>
                <h3>{props.name}<FontAwesomeIcon className="ml-5" icon={faAngleRight}/></h3>
            </div> 
        )
    }else{
        favorites =(
            <div>User</div>
        )
    }
  return (
  <main>
        {favorites}
  </main>
  );
}

export default Favorites;
