import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import TaskPage from '../page/TaskPage';

function LoginRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tasks" element={<TaskPage />} />
    </Routes>
  );
}

export default LoginRoutes;
