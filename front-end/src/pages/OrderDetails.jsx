import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestAPI, setToken, requestStatus } from '../helpers/APIRequests';
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

  const handleStatus = async () => {
    const { token } = localUser();

    let newStatus = '';

    switch (order.status) {
    case 'Pendente':
      newStatus = 'Preparando';
      break;
    case 'Preparando':
      newStatus = 'Em Trânsito';
      break;
    default:
      newStatus = 'Entregue';
      break;
    }

    setToken(token);

    await requestStatus(`/costumer/orders/${id}`, { status: newStatus });

    const requestOrder = await requestAPI(`/costumer/orders/details/${id}`);

    setOrder(requestOrder);
  };

  const statusButton = () => {
    if (role === 'seller') {
      return (
        <div>
          <StatusButton
            status="preparing"
            user="seller"
            isDisabled={ isDisabled('preparing') }
            handleStatus={ handleStatus }
          />
          <StatusButton
            status="dispatch"
            user="seller"
            isDisabled={ isDisabled('dispatch') }
            handleStatus={ handleStatus }
          />
        </div>
      );
    }
    return (
      <StatusButton
        status="delivery"
        user="customer"
        isDisabled={ isDisabled('delivery') }
        handleStatus={ handleStatus }
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
