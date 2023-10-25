import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';
import ItemListContainer from './ItemListContainer';
import './App.css';
import ItemDetailContainer from './ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
