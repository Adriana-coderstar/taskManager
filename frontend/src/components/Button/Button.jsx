import React from 'react';
import PropTypes from 'prop-types';
import trash from '../../img/trash.svg';
import editTask from '../../img/edit.svg';
import { Container } from './Button.style';
import { deleteTask } from '../../service/requestTask';

function Buttons({ id, show, load }) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  const handleRemove = async () => {
    await deleteTask(id, token);
    load();
  };

  const handleEdit = async () => {
    show(true);
  };

  return (
    <Container>
      <button onClick={handleEdit}>
        <img
          className="button-edit"
          src={editTask}
          alt="Button to change the typed task"
        />
      </button>
      <button onClick={handleRemove}>
        <img
          className="button-trash"
          src={trash}
          alt="Button to remove the task"
        />
      </button>
    </Container>
  );
}

Buttons.propTypes = {
  edit: PropTypes.string,
  id: PropTypes.number,
  load: PropTypes.func,
  remove: PropTypes.string,
  show: PropTypes.func,
};

export default Buttons;
