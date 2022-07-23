import React from 'react';
import { createTask } from '../../service/requestTask';
import { ButtonAdd, Container } from './CreateTask.style';

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
      <ButtonAdd onClick={handleClick} />
    </Container>
  );
}

export default CreateTask;
