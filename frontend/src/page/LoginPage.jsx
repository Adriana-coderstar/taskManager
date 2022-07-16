import React from 'react';
import { requestLogin } from '../service/requestLogin';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await requestLogin({
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(data));
      navigate(`/task/${data.id}`);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <section>
      <form>
        <input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button onClick={login}>Enviar</button>
        <button onClick={() => navigate('/register')}>Cadastrar</button>
      </form>
    </section>
  );
}

export default LoginPage;
