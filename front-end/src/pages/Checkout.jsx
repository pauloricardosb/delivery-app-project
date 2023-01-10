import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { localCart, localUser, removeItem } from '../helpers/localStorage';
import { requestAPI, requestRegister, setToken } from '../helpers/APIRequests';
import CheckoutCard from '../components/CheckoutCard';
import '../css/tableCartName.css';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [entrega, setEntrega] = useState({
    vendedor: 0,
    endereco: '',
    numero: '',
  });
  const [vendedores, setVendedores] = useState([]);
  const [checkId, setCheckId] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const { token } = localUser();

      setToken(token);

      const sellers = await requestAPI('/users/sellers');

      setVendedores(sellers);

      setEntrega((current) => ({
        ...current,
        vendedor: sellers[0].id,
      }));
    };

    const local = localCart() || [];

    setCart(local);

    fetch();
  }, [vendedores]);

  const handleCart = (name) => {
    removeItem(name);

    const local = localCart() || [];

    setCart(local);
  };

  const itemCard = () => {
    const card = cart.map((item, index) => (
      <CheckoutCard
        key={ index }
        item={ item }
        index={ index }
        handleCart={ handleCart }
      />
    ));
    return card;
  };

  const subTotal = () => {
    const sub = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const formatted = sub.toFixed(2);
    return formatted.replace('.', ',');
  };

  const handleCheckout = async () => {
    const { name, token } = localUser();

    setToken(token);

    const { id } = await requestRegister('/costumer/orders', {
      userName: name,
      sellerId: entrega.vendedor,
      deliveryAddress: entrega.endereco,
      deliveryNumber: entrega.numero,
      totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
      products: cart,
    });

    setCheckId(id);
  };

  if (checkId !== 0) return <Navigate to={ `/customer/orders/${checkId}` } />;

  return (
    <div className="checkout-main-div">
      <table className="table">
        <thead className="table-cart-name">
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
            <td>Remover item</td>
          </tr>
        </thead>
        <tbody>
          { (cart.length > 0) ? itemCard() : null }
        </tbody>
      </table>
      <div className="price-cart">
        <p>Preço total:</p>
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          R$
          { (cart.length > 0) ? subTotal() : '0,00' }
        </p>
      </div>
      <div>
        <form className="form-checkout">
          <label className="label" htmlFor="customer_checkout__select-seller">
            <select
              id="customer_checkout__select-seller"
              data-testid="customer_checkout__select-seller"
              value={ entrega.vendedor }
              onChange={
                (e) => setEntrega((current) => ({
                  ...current,
                  vendedor: e.target.value,
                }))
              }
            >
              { vendedores.map((vendedor, index) => (
                <option
                  key={ index }
                  value={ vendedor.id }
                >
                  { vendedor.name }
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="customer_checkout__input-address">
            Endereço:
            <input
              type="text"
              id="customer_checkout__input-address"
              data-testid="customer_checkout__input-address"
              value={ entrega.endereco }
              onChange={
                (e) => setEntrega((current) => ({
                  ...current,
                  endereco: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="customer_checkout__input-number">
            Número:
            <input
              type="text"
              id="customer_checkout__input-number"
              data-testid="customer_checkout__input-address-number"
              value={ entrega.numero }
              onChange={
                (e) => setEntrega((current) => ({
                  ...current,
                  numero: e.target.value,
                }))
              }
            />
          </label>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleCheckout }
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
