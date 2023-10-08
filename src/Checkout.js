import React from 'react';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Resumen del Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} x{item.quantity}</span>
            <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total:</strong> ${calculateTotalPrice()}
      </div>
      <button className="checkout-button">Proceder al Pago</button>
    </div>
  );
};

export default Checkout;
