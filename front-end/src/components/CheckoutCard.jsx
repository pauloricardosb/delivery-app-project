import React from 'react';
import PropTypes from 'prop-types';
import '../css/checkoutCard.css';

function CheckoutCard({ item: { name, price, quantity }, index, handleCart }) {
  const subTotal = () => {
    const total = price * quantity;
    return parseFloat(total).toFixed(2).replace('.', ',');
  };

  return (
    <div className="cart-table">
      <tr>
        <td
          data-testid={ `customer_checkout__element-order-table-item-number--${index}` }
        >
          { index + 1 }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
          className="descricao"
        >
          { name }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          { quantity }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { parseFloat(price).toFixed(2).replace('.', ',') }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          R$
          { subTotal() }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ () => handleCart(name) }
          >
            X
          </button>
        </td>
      </tr>
    </div>
  );
}

CheckoutCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default CheckoutCard;
