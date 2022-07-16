import PropTypes from 'prop-types';
import React from 'react';
import { deleteTask } from '../../service/requestTask';

function Buttons({ id, show }) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  const handleRemove = async () => {
    await deleteTask(id, token);
  };

  const handleEdit = async () => {
    show(true);
  };

  return (
    <>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleRemove}>Deletar</button>
    </>
  );
}

Buttons.propTypes = {
  edit: PropTypes.string,
  id: PropTypes.number,
  remove: PropTypes.string,
  show: PropTypes.string,
};

export default Buttons;
