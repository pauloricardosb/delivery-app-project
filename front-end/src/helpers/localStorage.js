export const localUser = () => {
  const local = localStorage.getItem('user');

  const user = JSON.parse(local);

  return user;
};

export const setLocalUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const localLogout = () => {
  localStorage.removeItem('user');
};

export const localCart = () => {
  const local = localStorage.getItem('carrinho');

  const user = JSON.parse(local);

  return user;
};

export const setLocalCart = (product) => {
  const cart = localCart() || [];

  const newCart = cart.filter((item) => item.name !== product.name);

  if (product.quantity > 0) {
    newCart.push(product);
  }

  console.log(newCart);

  localStorage.setItem('carrinho', JSON.stringify(newCart));
};

export const localCheckout = () => {};
