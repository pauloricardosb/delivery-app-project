import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link
        to="/customer/checkout"
      >
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ cart.length === 0 }
        >
          <p
            data-testid="customer_products__checkout-bottom-value"
          >
            { (cart.length > 0) ? subTotal() : '0,00' }
          </p>
        </button>
      </Link>
    </div>
  );
}

export default CartShop;
