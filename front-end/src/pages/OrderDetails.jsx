import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import ProductOrderCard from '../components/ProductOrderCard';
import Navbar from '../components/NavbarComponent';
import StatusButton from '../components/StatusButton';

function OrderDetails() {
  const [order, setOrder] = useState(null);

  const { id } = useParams();

  const { role } = localUser();

  const orderDetails = `${role}_order_details__element-order-details`;

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

  const isDisabled = (status) => {
    if (order.status === 'Pendente' && status === 'preparing') {
      return false;
    } if (order.status === 'Preparando' && status === 'dispatch') {
      return false;
    } return !(order.status === 'Em Trânsito' && status === 'delivery');
  };

  const statusButton = () => {
    if (role === 'seller') {
      return (
        <div>
          <StatusButton
            status="preparing"
            user="seller"
            isDisabled={ isDisabled('preparing') }
          />
          <StatusButton
            status="dispatch"
            user="seller"
            isDisabled={ isDisabled('dispatch') }
          />
        </div>
      );
    }
    return (
      <StatusButton
        status="delivery"
        user="customer"
        isDisabled={ isDisabled('delivery') }
      />
    );
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
          {
            statusButton()
          }
        </div>
        <div>
          { orderProducts() }
        </div>
        <div>
          <p
            data-testid={ `${role}_order_details__element-order-total-price` }
          >
            { order.totalPrice.replace('.', ',') }
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
