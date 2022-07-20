import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../page/Login/LoginPage';
import RegisterPage from '../page/Login/RegisterPage';
import TaskPage from '../page/Task/TaskPage';
import GlobalStyle from '../style/GlobalStyle';

function LoginRoutes() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default LoginRoutes;
