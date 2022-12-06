const MIN_LENGTH_NAME = 12;
const MIN_LENGTH_PASSWORD = 6;
const EMAIL_REGEX = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

export const validateLogin = (email, password) => (
  EMAIL_REGEX.test(email) && password.length >= MIN_LENGTH_PASSWORD
);

export const validateUser = (name, email, password) => {
  const validate = validateLogin(email, password);

  return validate && name.length >= MIN_LENGTH_NAME;
};
