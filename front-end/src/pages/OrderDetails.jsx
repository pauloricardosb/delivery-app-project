import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestAPI, setToken, requestStatus } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import ProductOrderCard from '../components/ProductOrderCard';
import Navbar from '../components/NavbarComponent';
import StatusButton from '../components/StatusButton';
import '../css/orderDetails.css';

const orderStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

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
    if (order.status === orderStatus[0] && status === 'preparing') {
      return false;
    } if (order.status === orderStatus[1] && status === 'dispatch') {
      return false;
    } return !(order.status === orderStatus[2] && status === 'delivery');
  };

  const handleStatus = async () => {
    const { token } = localUser();

    let newStatus = '';

    switch (order.status) {
    case orderStatus[0]:
      newStatus = 'Preparando';
      break;
    case orderStatus[1]:
      newStatus = 'Em Trânsito';
      break;
    case orderStatus[2]:
      newStatus = 'Entregue';
      break;
    default:
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
      <h3 className="title">Detalhes do Pedido</h3>
      <div className="order-details-div">
        <div className="detalhes-pedido">
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
          <div className="status-btn">
            {
              statusButton()
            }
          </div>
        </div>
        <div className="detalhes-pedido2">
          { orderProducts() }
        </div>
        <div className="price-cart">
          <p>Preço Total:</p>
          <p
            data-testid={ `${role}_order_details__element-order-total-price` }
          >
            R$
            { order.totalPrice.replace('.', ',') }
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
