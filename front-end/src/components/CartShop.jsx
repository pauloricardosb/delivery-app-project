import React, { useState, useEffect } from 'react';
import { localCart } from '../helpers/localStorage';

function CartShop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const local = localCart() || [];

    setCart(local);
  }, [cart]);

  const subTotal = () => {
    const sub = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const formatted = sub.toFixed(2);
    return formatted.replace('.', ',');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        { (cart.length > 0) ? subTotal() : '0,00' }
      </button>
    </div>
  );
}

export default CartShop;
