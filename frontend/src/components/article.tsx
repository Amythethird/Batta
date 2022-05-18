

import React from 'react';
import "../styles/style.css"

interface BlogBeitrag {
  autor: string;
  title: string;
  image: string;
  text: string;
  //date: Date;
}


function Artikel(props: BlogBeitrag) {
  return (
     <div className='article mb-space-large mt-5'>
         <div className='artikel_header'>
           <p>{props.title}</p>
         </div>
         <div className='text'>
           <p>{props.text}</p>
         </div>
         <div className='author'>
           <img src={props.image}></img>
           <p>{props.autor}</p>
         </div>
     </div>
  );
}

export default Artikel;
