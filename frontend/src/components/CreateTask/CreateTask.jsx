import React from 'react';
import { createTask } from '../../service/requestTask';

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
    <section>
      <input
        type="text"
        value={input}
        onKeyUp={getKeyUpInput}
        onChange={({ target: { value } }) => setInput(value)}
      />

      <button type="button" onClick={handleClick}>
        Adiciona
      </button>
    </section>
  );
}

export default CreateTask;
