import React from 'react';
import out from '../../img/out.svg';
import emojis from '../../utils/emojis';
import { useNavigate } from 'react-router-dom';
import { Container, Welcome, ButtonOut } from './Header.style';

function Header() {
  const navigate = useNavigate();

  const emoji = React.useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Welcome>
        <h2>Welcome</h2>
        <span>{emoji}</span>
      </Welcome>
      <ButtonOut>
        <button onClick={() => navigate('/login')}>
          <img src={out} alt="Exit button" />
        </button>
      </ButtonOut>
    </Container>
  );
}

export default Header;
