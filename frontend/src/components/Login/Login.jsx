import React from 'react';
import * as api from '../../service/requestLogin';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.requestLogin({
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(data));
      navigate(`/task/${data.id}`);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

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
        <button onClick={() => navigate('/register')}>Cadastrar</button>
      </form>
    </section>
  );
}

export default Login;
