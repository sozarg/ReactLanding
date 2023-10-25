import React from 'react';

const CheckoutSummary = ({ cartItems }) => {
  return (
    <div className="checkout-summary">
      <h2>Resumen de Compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutSummary;
