import React from 'react';

const OrderSummary = ({ cart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="order-summary">
      <h2>Felicidades por tu Compra</h2>
      <h3>Resumen del Pedido:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default OrderSummary;
