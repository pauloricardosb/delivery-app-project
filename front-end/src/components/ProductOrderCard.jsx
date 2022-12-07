import React from 'react';
import PropTypes from 'prop-types';

const details = 'customer_order_details__element-order';

function ProductOrderCard({ product: { name, quantity, price }, index }) {
  return (
    <div>
      <p
        data-testid={ `${details}-table-item-number-${index}` }
      >
        { index }
      </p>
      <p
        data-testid={ `${details}-table-name-${index}` }
      >
        { name }
      </p>
      <p
        data-testid={ `${details}-table-quantity-${index}` }
      >
        { quantity }
      </p>
      <p
        data-testid={ `${details}-table-unit-price-${index}` }
      >
        { price }
      </p>
      <p
        data-testid={ `${details}-table-sub-total-${index}` }
      >
        { price * quantity }
      </p>
    </div>
  );
}

ProductOrderCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductOrderCard;
