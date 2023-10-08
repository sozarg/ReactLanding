import React from 'react';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.map((item, index) => (
        <div key={index} className="checkout-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
