import React from 'react';
import { Container, Div } from './TaskPage.style';
import Task from '../../components/Task/Task';
import { getTask } from '../../service/requestTask';
import Header from '../../components/Header/Header';
import CreateTask from '../../components/CreateTask/CreateTask';

function TaskPage() {
  const [tasks, setTask] = React.useState([]);

  const { id, token } = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getTask(id, token);
      setTask(data);
    };
    fetchData();
  });

  return (
    <>
      <Header />
      <Container>
        <Div>
          <CreateTask />
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Div>
      </Container>
    </>
  );
}

export default TaskPage;
