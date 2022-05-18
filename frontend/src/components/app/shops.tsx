import React from 'react';
import "../../styles/style.css"

interface ShopEintraege{
    name: string;
}

function ShopAnsicht(props: ShopEintraege) {
  return (
  <div className='shop container mb-6 is-medium'>
      <h2>{props.name}</h2>
  </div>
  );
}

export default ShopAnsicht;
