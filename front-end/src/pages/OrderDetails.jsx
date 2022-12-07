import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';

const orderDetails = 'customer_order_details';

function OrderDetails() {
  const [order, setOrder] = useState({});

  const fetchOrder = async () => {
    try {
      const { token } = localUser();

      setToken(token);

      const id = 3;

      const requestOrder = await requestAPI(`/costumer/orders/${id}`);

      console.log(requestOrder[0]);

      setOrder(requestOrder[0]);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h3>Detalhe do Pedido</h3>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `PEDIDO ${order.id}` }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { `P. Vend: ${'Vendedor'}` }
          </p>
          <p
            
          >
            { order.status }
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
