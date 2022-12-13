import React from 'react';
import PropTypes from 'prop-types';
import { removeItem } from '../helpers/localStorage';

function CheckoutCard({ item: { name, price, quantity }, index }) {
  const handleCart = () => {
    removeItem(name);
  };

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number--${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
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
        { price }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { price * quantity }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ handleCart }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutCard;
