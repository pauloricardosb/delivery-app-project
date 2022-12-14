import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import ProductOrderCard from '../components/ProductOrderCard';
import Navbar from '../components/NavbarComponent';

const orderDetails = 'customer_order_details__element-order-details';

function OrderDetails() {
  const [order, setOrder] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { token } = localUser();

        setToken(token);

        const requestOrder = await requestAPI(`/costumer/orders/details/${id}`);

        setOrder(requestOrder);
      } catch (error) {
        setOrder({});
      }
    };

    fetchOrder();
  }, [id]);

  const orderProducts = () => {
    const cards = order.products.map((product, index) => (
      <ProductOrderCard
        key={ index }
        product={ product }
        index
      />
    ));

    return cards;
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h3>Detalhe do Pedido</h3>
      <div>
        <div>
          <p
            data-testid={ `${orderDetails}-label-order-id` }
          >
            { `PEDIDO ${order.id}` }
          </p>
          <p
            data-testid={ `${orderDetails}-label-seller-name` }
          >
            { `P. Vend: ${order.sellerName}` }
          </p>
          <p
            data-testid={ `${orderDetails}-label-order-date` }
          >
            { order.saleDate }
          </p>
          <p
            data-testid={ `${orderDetails}-label-delivery-status` }
          >
            { order.status }
          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <div>
          { orderProducts() }
        </div>
        <div>
          <p
            data-testid="customer_order_details__element-order-total-price"
          >
            { order.totalPrice.replace('.', ',') }
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
