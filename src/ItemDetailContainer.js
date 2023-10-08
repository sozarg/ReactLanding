import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products'; // Asegúrate de tener la ruta correcta hacia tu archivo products.js
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>Detalles del Producto</h2>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <AddItemButton product={product} />
    </div>
  );
};

export default ItemDetailContainer;
