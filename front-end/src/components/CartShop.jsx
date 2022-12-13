import React, { useState, useEffect } from 'react';
import { localCart } from '../helpers/localStorage';

function CartShop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const local = localCart();

    setCart(local);
  }, []);

  const subTotal = () => {
    const sub = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return sub;
  };

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        { `Ver Carrinho: R$ ${(cart.length > 0) ? subTotal() : 'R$ 0,00'}` }
      </button>
    </div>
  );
}

export default CartShop;
