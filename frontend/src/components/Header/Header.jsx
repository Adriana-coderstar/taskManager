import PropTypes from 'prop-types';
import React from 'react';
import out from '../../img/out.svg';
import emojis from '../../utils/emojis';
import { useNavigate } from 'react-router-dom';
import { Container, Welcome, ButtonOut } from './Header.style';

function Header({ id }) {
  const navigate = useNavigate();

  const { pathname } = window.location;

  console.log(pathname);
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
        {pathname === `/task/${id}` && (
          <button onClick={() => navigate('/login')}>
            <img src={out} alt="Exit button" />
          </button>
        )}
      </ButtonOut>
    </Container>
  );
}

Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
