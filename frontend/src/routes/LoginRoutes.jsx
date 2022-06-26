import React from 'react';
import { Navigate, Router, Routes } from 'react-router-dom';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import TaskPage from '../page/TaskPage';

function LoginRoutes() {
  return (
    <Router>
      <Routes path="/" element={<Navigate to="/login" />} />
      <Routes path="/login" element={<LoginPage />} />
      <Routes path="/register" element={<RegisterPage />} />
      <Routes path="/task" element={<TaskPage />} />
    </Router>
  );
}

export default LoginRoutes;
