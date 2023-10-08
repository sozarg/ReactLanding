import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cart.length}</span>
    </div>
  );
};

export default CartWidget;
