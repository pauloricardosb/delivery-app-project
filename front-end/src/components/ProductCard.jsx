import React, { useState, useEffect } from 'react';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import Card from './Card';

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { token } = localUser();

      setToken(token);

      const requestProducts = await requestAPI('/costumer/products');

      setProducts(requestProducts);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productCards = () => {
    const cards = products.map((product) => (
      <Card
        key={ product.name }
        id={ product.id }
        name={ product.name }
        price={ product.price }
        image={ product.url_image }
      />
    ));
    return cards;
  };

  return (
    <div>
      { products.length > 0 ? productCards() : null }
    </div>
  );
}

export default ProductCard;
