import React from 'react';
import { requestLogin } from '../../service/requestLogin';
import { useNavigate } from 'react-router-dom';
import { Container } from './Login.style';
import Header from '../../components/Header/Header';

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
      <Header />
      <Container>
        <input
          type="email"
          value={email}
          placeholder="E-mail Adress"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <span></span>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <span className="line-span"></span>
        <button onClick={login}>Enviar</button>
        <button onClick={() => navigate('/register')}>Cadastrar</button>
      </Container>
    </section>
  );
}

export default LoginPage;
