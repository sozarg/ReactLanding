import React, { useState } from 'react';

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="quantity-selector">
      <label>Cantidad:</label>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
    </div>
  );
};

export default ItemQuantitySelector;
