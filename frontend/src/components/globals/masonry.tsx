import React from "react";
import "../../styles/style.css";

interface Images {
    src: string
    alt: string
}

interface Photos{
    images: Images[]
}


function Masonry(props: Photos) {
    
    return (
        <section className=" section masonry">
         <div className="container">
             {
            props.images.map((e) => (
                    <img className="item" src={e.src} alt={e.alt} key={e.alt} />
            ))
          }
         </div>
        </section>
    );
}

export default Masonry