import React from 'react';

const Description = ({ description }) => {
  return (
    <div className="product-description">
      <h4>Descripción del Producto:</h4>
      <p>{description}</p>
    </div>
  );
};

export default Description;
