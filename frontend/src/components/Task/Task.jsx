import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import { updateTask } from '../../service/requestTask';

function Task({ task }) {
  const [show, setShow] = React.useState(false);
  const [inputUpdate, setInputUpdate] = React.useState('');
  const { token } = JSON.parse(localStorage.getItem('user'));

  const updateStatus = async ({ target }) => {
    await updateTask(task.id, task.task, target.value, token);
  };

  const getKeyUpdate = async (e) => {
    if (e.key === 'Enter') {
      await updateTask(task.id, inputUpdate, task.status, token);
      setShow(false);
      setInputUpdate('');
    }
  };

  return (
    <div>
      <p>{task.task}</p>
      <select onChange={updateStatus} defaultValue={task.status}>
        <option value="Pendente">Pendente</option>
        <option value="Andamento">Andamento</option>
        <option value="Concluido">Concluido</option>
      </select>
      <Button id={task.id} show={setShow} />
      {show && (
        <input
          placeholder="digite aqui"
          value={inputUpdate}
          onKeyUp={getKeyUpdate}
          onChange={({ target }) => setInputUpdate(target.value)}
        />
      )}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    task: PropTypes.string,
  }),
};

export default Task;
