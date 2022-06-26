import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as api from '../service/request';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLogged, setIsLogged] = React.useState(false);

  const login = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.requestLogin({
        email,
        password,
      });
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  if (isLogged) return <Navigate to="/tasks" />;

  return (
    <section>
      <form>
        <input
          style={{ margin: '5px' }}
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input
          style={{ margin: '5px' }}
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button style={{ margin: '5px' }} onClick={login}>
          Enviar
        </button>
        <button onSubmit={() => navigate('/register')}>Cadastrar</button>
      </form>
    </section>
  );
}

export default Login;
