import NavbarComponent from '../components/NavbarComponent';
import OrderCard from '../components/OrderCard';
import { requestSellerOrders } from '../helpers/APIRequests';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { name, token } = localUser();

      setToken(token);

      const requestOrders = await requestSellerOrders('/seller/orders/', { name });

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
        userType="seller_orders"
      />
    ));

    return cards;
  };

  return (
    <div>
      <NavbarComponent />
      <main>
        { orders.length > 0 ? orderCards() : null }
      </main>
    </div>
  );
}

export default SellerOrders;
