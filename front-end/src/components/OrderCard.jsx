import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

function OrderCard({ order: { id, status, saleDate, totalPrice } }) {
  return (
    <div>
      <div>
        <p
          data-testid={ `customer_products__element-order-id-${id}` }
        >
          { id }
        </p>
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-delivery-status-${id}` }
        >
          { status }
        </p>
      </div>
      <div>
        <p
          data-testid={ `customer_products__element-order-date-${id}` }
        >
          { moment(saleDate).locale('pt-br').format('L') }
        </p>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { totalPrice.replace('.', ',') }
        </p>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
