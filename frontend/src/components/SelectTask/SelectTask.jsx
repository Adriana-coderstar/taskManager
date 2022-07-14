import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';

function SelectTask({ task }) {
  return (
    <div>
      <p>{task.task}</p>
      <select defaultValue={task.status}>
        <option value={'aguardando'}>Pendente</option>
        <option value={'andamento'}>Andamento</option>
        <option value={'concluido'}>Concluido</option>
      </select>
      <Button />
    </div>
  );
}

SelectTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    task: PropTypes.string,
  }),
};

export default SelectTask;
