import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Remera Roja',
    category: 'Prendas Rojas',
    description: 'Una elegante remera de color rojo que es perfecta para cualquier ocasión. Hecha de algodón suave y cómodo.',
    price: '$19.99',
    imageUrl: './img/remeraroja.png', 
  },
  {
    id: 2,
    name: 'Gorra Roja',
    category: 'Prendas Rojas',
    description: 'Una gorra elegante de color rojo.',
    price: '$9.99',
    imageUrl: './img/gorraroja.png', 
  },
  {
    id: 3,
    name: 'Remera Azul',
    category: 'Prendas Azules',
    description: 'Una remera fresca de color azul.',
    price: '$21.99',
    imageUrl: './img/remeraazul.png', 
  },
  {
    id: 4,
    name: 'Gorra Azul',
    category: 'Prendas Azules',
    description: 'Una gorra deportiva de color azul.',
    price: '$12.99',
    imageUrl: './img/gorraazul.png',
  },
];

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="item-detail-container">
      <h2>Detalles del Producto</h2>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
