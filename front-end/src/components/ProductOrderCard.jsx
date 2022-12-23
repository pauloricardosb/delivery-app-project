import React from 'react';
import PropTypes from 'prop-types';
import '../css/productOrder.css';

const details = 'customer_order_details__element-order';

function ProductOrderCard({ product: { name, quantity, price }, index }) {
  return (
    <div className="product-order">
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
        { price.replace('.', ',') }
      </p>
      <p
        data-testid={ `${details}-table-sub-total-${index}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </p>
    </div>
  );
}

ProductOrderCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.bool.isRequired,
};

export default ProductOrderCard;
