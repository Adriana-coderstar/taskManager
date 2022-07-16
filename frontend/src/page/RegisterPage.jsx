import React from 'react';
import { createUsers } from '../service/requestLogin';
import { Navigate } from 'react-router-dom';

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

        <button type="button" onClick={register}>
          Criar conta
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
