import React from 'react';
import PropTypes from 'prop-types';

function StatusButton({ status, user, isDisabled, handleStatus }) {
  const message = {
    delivery: 'MARCAR COMO ENTREGUE',
    preparing: 'PREPARAR PEDIDO',
    dispatch: 'SAIU PARA ENTREGA',
  };

  return (
    <button
      type="button"
      data-testid={ `${user}_order_details__button-${status}-check` }
      disabled={ isDisabled }
      onClick={ handleStatus }
    >
      { message[status] }
    </button>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleStatus: PropTypes.func.isRequired,
};

export default StatusButton;
