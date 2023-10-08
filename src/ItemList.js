import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      <h2>Todos los Productos</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} /> {/* Muestra la imagen */}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
            <Link to={`/item/${item.id}`}>Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
