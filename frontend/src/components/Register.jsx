import React from 'react';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      </form>
    </section>
  );
}

export default Register;
