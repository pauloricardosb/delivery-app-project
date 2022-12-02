export const localUser = () => {
  const local = localStorage.getItem('user');

  const user = JSON.parse(local);

  return user;
};

export const localCheckout = () => {};
