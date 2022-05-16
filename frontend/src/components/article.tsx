

import React from 'react';
import "../styles/style.css"




function Artikel() {
  return (
     <div className='article mb-space-large mt-5'>
       <div className='columns'>
          <div className='column is-flex is-flex-direction-column is-justify-content-end'>
            <a className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
          <div className='column is-flex is-flex-direction-column is-justify-content-end'>
            <a>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
          <div className='column is-flex is-flex-direction-column is-justify-content-end'>
            <a>Lorem ipsum dolor, sit amet consectetur adipisicing elit recusandae </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
       </div>   
     </div>
  );
}

export default Artikel;
