import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, name, price, image }) {
  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { (`${price}`).replace('.', ',') }
      </p>
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        placeholder="0"
        value={ 0 }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
