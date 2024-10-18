
import React from 'react';

function SpecialItem({ image, title, price, description }) {
  return (
    <div className="special-item">
      <img src={image} alt={title.toLowerCase()} />
      <h3>{title}</h3>
      <p className='price'>${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default SpecialItem;
