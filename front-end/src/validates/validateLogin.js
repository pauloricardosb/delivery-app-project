export const validateLogin = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!email.match(emailRegex)) {
    return false;
  };
  if (password.length < 6) {
    return false;
  }
  return true;
}

export const validateUser = (name, email, password) => {
  const validate = validateLogin(email, password);

  if(!validate || name.length < 12) {
    return false;
  }
  return true;
}
