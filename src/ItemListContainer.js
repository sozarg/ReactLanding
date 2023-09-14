import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Remera Roja',
    category: 'Prendas Rojas',
    description: 'Una hermosa remera de color rojo.',
    price: '$19.99',
    image: './img/remeraroja.png',
  },
  {
    id: 2,
    name: 'Gorra Roja',
    category: 'Prendas Rojas',
    description: 'Una gorra elegante de color rojo.',
    price: '$9.99',
    image: './img/gorraroja.png',
  },
  {
    id: 3,
    name: 'Remera Azul',
    category: 'Prendas Azules',
    description: 'Una remera fresca de color azul.',
    price: '$21.99',
    image: './img/remeraazul.png',
  },
  {
    id: 4,
    name: 'Gorra Azul',
    category: 'Prendas Azules',
    description: 'Una gorra deportiva de color azul.',
    price: '$12.99',
    image: './img/gorraazul.png',
  },
];

const ItemListContainer = () => {
  const { id } = useParams(); // Obtén el parámetro de la URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      // Si se proporciona un ID de categoría, filtra los productos por esa categoría
      const filteredItems = products.filter(
        (product) => product.category.toLowerCase() === id.toLowerCase()
      );
      setItems(filteredItems);
    } else {
      // Si no se proporciona un ID de categoría, muestra todos los productos
      setItems(products);
    }
  }, [id]);

  return (
    <div className="item-list-container">
      <h2>{id ? `Productos en ${id}` : 'Todos los Productos'}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
            <Link to={`/item/${item.id}`}>Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
