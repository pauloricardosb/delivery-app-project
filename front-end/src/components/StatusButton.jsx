import React from 'react';
import PropTypes from 'prop-types';

function StatusButton({ status, user }) {
  const message = {
    delivery: 'MARCAR COMO ENTREGUE',
    preparing: 'PREPARAR PEDIDO',
    dispatch: 'SAIU PARA ENTREGA',
  };

  return (
    <button
      type="button"
      data-testid={ `${user}_order_details__button-${status}-check` }
      disabled
    >
      { message[status] }
    </button>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default StatusButton;
