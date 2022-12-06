export const localUser = () => {
  const local = localStorage.getItem('user');

  const user = JSON.parse(local);

  return user;
};

export const setLocalUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const localCheckout = () => {};
