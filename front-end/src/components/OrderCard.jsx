import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order: { id, status, saleDate, totalPrice }, userType }) {
  const ordersURL = () => {
    if (userType === 'customer_orders') {
      return 'customer';
    }
    return 'seller';
  };

  return (
    <Link to={ `/${ordersURL()}/orders/${id}` }>
      <div>
        <p
          data-testid={ `${userType}__element-order-id--${id}` }
        >
          { id }
        </p>
      </div>
      <div>
        <p
          data-testid={ `${userType}__element-delivery-status-${id}` }
        >
          { status }
        </p>
      </div>
      <div>
        <p
          data-testid={ `${userType}__element-order-date-${id}` }
        >
          { saleDate }
        </p>
        <p
          data-testid={ `${userType}__element-card-price-${id}` }
        >
          { totalPrice.replace('.', ',') }
        </p>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  userType: PropTypes.string.isRequired,
};

export default OrderCard;
