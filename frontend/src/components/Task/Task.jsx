import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import { Container, Selected } from './Task.style';
import { updateTask } from '../../service/requestTask';

function Task({ task, load }) {
  const [show, setShow] = React.useState(false);
  const [inputUpdate, setInputUpdate] = React.useState(task.task);
  const { token } = JSON.parse(localStorage.getItem('user'));

  const updateStatus = async ({ target }) => {
    await updateTask(task.id, task.task, target.value, token);
    load();
  };

  const getKeyUpdate = async (e) => {
    if (e.key === 'Enter') {
      await updateTask(task.id, inputUpdate, task.status, token);
      setShow(false);
      load();
    }
  };

  return (
    <Container>
      <div>
        <p className={task.status === 'Concluido' ? 'complete' : ''}>
          {task.task}
        </p>
      </div>
      <Selected>
        <select onChange={updateStatus} defaultValue={task.status}>
          <option value="Pendente">Pendente</option>
          <option value="Andamento">Andamento</option>
          <option value="Concluido">Concluido</option>
        </select>
        <Button load={load} id={task.id} show={setShow} />
      </Selected>

      {show && (
        <input
          className="input-update"
          placeholder="add new task"
          value={inputUpdate}
          onKeyUp={getKeyUpdate}
          onChange={({ target }) => setInputUpdate(target.value)}
        />
      )}
    </Container>
  );
}

Task.propTypes = {
  load: PropTypes.func,
  task: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    task: PropTypes.string,
  }),
};

export default Task;
