import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import { localUser } from '../helpers/localStorage';

function Login() {
  const navigate = useNavigate();

  const local = localUser();

  const routes = useMemo(() => ({
    customer: '/customer/products',
    seller: 'seller/orders',
    administrator: '/admin/manage',
  }), []);

  useEffect(() => {
    let timer;

    if (local) {
      const { role } = localUser();

      const ms = 1500;
      timer = setTimeout(() => {
        navigate(routes[role], { replace: true });
      }, ms);
    }

    return () => clearTimeout(timer);
  }, [local, navigate, routes]);

  return (
    <LoginComponent />
  );
}

export default Login;
