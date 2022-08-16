/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, Div } from './TaskPage.style';
import Task from '../../components/Task/Task';
import { getTask } from '../../service/requestTask';
import Header from '../../components/Header/Header';
import CreateTask from '../../components/CreateTask/CreateTask';

function TaskPage() {
  const [tasks, setTask] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { id, token } = JSON.parse(localStorage.getItem('user'));

  const fetchData = async () => {
    setLoading(true);
    const data = await getTask(id, token);
    setTask(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header id={id} />
      <Container>
        <Div>
          <CreateTask load={fetchData} />
          {!loading &&
            tasks.map((task) => (
              <Task load={fetchData} key={task.id} task={task} />
            ))}
        </Div>
      </Container>
    </>
  );
}

export default TaskPage;
