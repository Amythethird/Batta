import React from 'react';
import "../../styles/style.css"
import Artikel from "../article"


function Main() {
  return (
  <main>
       <div className='container landing_info'>
           <h1>Unterstütze nachhaltige AnbieterInnen in deiner Nähe</h1>
       </div>
       <Artikel/>

      
  </main>
  );
}

export default Main;
