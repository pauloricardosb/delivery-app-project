import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavbarComponent';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import OrderCard from '../components/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { name, token } = localUser();

      setToken(token);

      const requestOrders = await requestAPI(`/costumer/orders/${3}`);

      setOrders(requestOrders);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const orderCards = () => {
    const cards = orders.map((order, index) => (
      <OrderCard
        key={ index }
        order={ order }
      />
    ));

    return cards;
  };

  return (
    <div>
      <Navbar />
      <main>
        { orders.length > 0 ? orderCards() : null }
      </main>
    </div>
  );
}

export default Orders;
