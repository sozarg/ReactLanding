import React from 'react';
import { useCart } from './CartContext';
import OrderSummary from './OrderSummary'; 

const CheckoutPage = () => {
  const { cart } = useCart();

  return (
    <div className="checkout-page">
      <h2>Resumen del Pedido</h2>
      {cart.length > 0 ? (
        <OrderSummary cart={cart} />
      ) : (
        <p>No hay artículos en tu carrito.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
