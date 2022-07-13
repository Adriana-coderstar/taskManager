import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createUsers = async (email, password) => {
  api.post('/register', email, password);
};

export const requestLogin = async (email, password, token) =>
  api.post('/login', email, password, { headers: { Authorization: token } });
