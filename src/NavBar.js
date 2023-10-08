import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCart } from './CartContext';

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <CartWidget />
      <Link to="/">Inicio</Link>
      <Link to="/category/prendas%20rojas">Prendas rojas</Link>
      <Link to="/category/prendas%20azules">Prendas azules</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

export default NavBar;
