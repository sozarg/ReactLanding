import React from 'react';
import NavBar from './NavBar'; // Importa el componente NavBar
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import ItemListContainer from './ItemListContainer'; // Importa el componente ItemListContainer
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}


export default App;
