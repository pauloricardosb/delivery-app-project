import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { setLocalCart } from '../helpers/localStorage';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const [quantity, setQuantity] = useState(0);

  const ref = useRef(quantity);

  useEffect(() => {
    if (ref.current !== quantity) {
      setLocalCart({ id, name, price, quantity });
    }
  }, [id, name, price, quantity]);

  const handleQuantity = async (value) => {
    if (value >= 0) {
      setQuantity(value);
    }
  };

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
      </p>
      <img
        src={ urlImage }
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
        onClick={ () => handleQuantity(+quantity - 1) }
      >
        -
      </button>
      <input
        type="number"
        placeholder="0"
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ ({ target: { value } }) => handleQuantity(+value) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => handleQuantity(+quantity + 1) }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
