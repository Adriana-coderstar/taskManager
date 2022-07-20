import React from 'react';
import { createTask } from '../../service/requestTask';
import { Container } from './CreateTask.style';
import Button from '../../img/buttonAdd.svg';

function CreateTask() {
  const [input, setInput] = React.useState('');
  const { token, id } = JSON.parse(localStorage.getItem('user'));

  const handleClick = async () => {
    await createTask(id, input, 'Pendente', token);
    setInput('');
  };

  const getKeyUpInput = async (event) => {
    if (event.key === 'Enter') {
      await createTask(id, input, 'Pendente', token);
      setInput('');
    }
  };

  return (
    <Container>
      <input
        type="text"
        value={input}
        placeholder="Add new task"
        onKeyUp={getKeyUpInput}
        onChange={({ target: { value } }) => setInput(value)}
      />

      <button type="button" onClick={handleClick}>
        <img src={Button} alt="Button will add a task to your task list" />
      </button>
    </Container>
  );
}

export default CreateTask;
