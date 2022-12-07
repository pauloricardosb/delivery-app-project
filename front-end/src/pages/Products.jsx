import React, { useState, useEffect } from 'react';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import Navbar from '../components/NavbarComponent';
import ProductCard from '../components/ProductCard';

function Products() {
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
    const cards = products.map((product, index) => (
      <ProductCard
        key={ index }
        product={ product }
      />
    ));
    return cards;
  };

  return (
    <div>
      <Navbar />
      <div>
        { products.length > 0 ? productCards() : null }
      </div>
    </div>
  );
}

export default Products;
