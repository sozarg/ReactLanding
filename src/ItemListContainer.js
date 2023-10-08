import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './products'; // Importa tu lista de productos desde un archivo o API
import ItemList from './ItemList'; // Importa el componente ItemList

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      const filteredItems = products.filter(
        (product) => product.category.toLowerCase() === id.toLowerCase()
      );
      setItems(filteredItems);
    } else {
      setItems(products);
    }
  }, [id]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
