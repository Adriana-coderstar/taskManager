import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from './Login.style';
import Header from '../../components/Header/Header';
import { createUsers } from '../../service/requestLogin';

function RegisterPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLogged, setIsLogged] = React.useState(false);

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUsers({ email, password });
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  if (isLogged) return <Navigate to={'/login'} />;
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
        <span></span>
        <button type="button" onClick={register}>
          Criar conta
        </button>
      </Container>
    </section>
  );
}

export default RegisterPage;
