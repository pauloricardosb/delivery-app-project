import React, { useState, useEffect } from 'react';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { token } = localUser();

      setToken(token);

      const productsFromDB = await requestAPI('/costumer/products');

      console.log(productsFromDB);

      setProducts(productsFromDB);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productCards = () => {
    const cards = products.map((product) => (
      <div key={ product.name }>
        <p
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          { product.price }
        </p>
        <img
          src={ product.url_image }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -
        </button>
        <input
          type="number"
          placeholder="0"
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </button>
      </div>
    ));
    return cards;
  };

  return (
    <div>
      { products ? productCards() : null }
    </div>
  );
}

export default ProductCard;
