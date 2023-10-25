import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { useCart } from './CartContext';

const AddItemButton = ({ product }) => {
  const { addItemToCart } = useCart();
  const [totalSelected, setTotalSelected] = useState(1);

  const handleQuantityChange = (quantity) => {
    setTotalSelected(quantity);
  };

  const handleAddToCart = () => {
    // Agregar el producto al carrito con la cantidad total seleccionada
    for (let i = 0; i < totalSelected; i++) {
      addItemToCart({ ...product, quantity: 1 }); // Añadir 1 producto por cada iteración
    }
  };

  return (
    <div>
      <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default AddItemButton;
