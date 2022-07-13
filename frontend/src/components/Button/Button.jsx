import PropTypes from 'prop-types';
import React from 'react';

function Buttons({ remove, edit }) {
  return (
    <>
      <button onClick={edit}>Editar</button>
      <button onClick={remove}>Deletar</button>
    </>
  );
}

Buttons.propTypes = {
  edit: PropTypes.string,
  remove: PropTypes.string,
};

export default Buttons;
