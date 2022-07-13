import React, { useEffect } from 'react';
import { getTask } from '../service/requestTask';
import CreateTask from '../components/CreateTask/CreateTask';
import Task from '../components/Task/Task';

function TaskPage() {
  const [tasks, setTask] = React.useState([]);

  const { id, token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTask(id, token);
      setTask(data);
    };
    fetchData();
  });

  return (
    <div>
      <CreateTask />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskPage;
