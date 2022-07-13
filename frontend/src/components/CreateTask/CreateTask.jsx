import React from 'react';
import { createTask } from '../../service/requestTask';

function CreateTask() {
  const [input, setInput] = React.useState('');
  const { token, id } = JSON.parse(localStorage.getItem('user'));

  const handleClick = async () => {
    await createTask(id, input, 'Pendente', token);
  };

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
      />

      <button type="button" onClick={handleClick}>
        Adiciona
      </button>
    </form>
  );
}

export default CreateTask;
