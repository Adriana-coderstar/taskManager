import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createTask = async (id, task, status, token) => {
  const { data } = api.post(
    `/task/${id}`,
    { task, status },
    {
      headers: {
        Authorization: `token ${token}`,
      },
    },
  );
  return data;
};

export const getTask = async (id, token) => {
  const { data } = await api.get(`/task/${id}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return data;
};

export const updateTask = async (id, task, status, token) => {
  const { data } = api.put(
    '/task',
    { id, task, status },
    {
      headers: {
        Authorization: `token ${token}`,
      },
    },
  );
  return data;
};

export const deleteTask = async (id, token) => {
  const { data } = api.delete(`/task/${id}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return data;
};
