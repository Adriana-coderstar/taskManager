import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  backdrop-filter: ${({ theme }) => theme.backdropFilter};
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: ${({ theme }) => theme.borderBottom};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-around;
  min-height: 12vh;
  width: 100%;
`;

export const Welcome = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: row;

  h2 {
    background: transparent;
    font-size: 2rem;
    margin-right: 20px;
  }

  span {
    background: transparent;
    font-size: 2.3rem;
  }
`;

export const ButtonOut = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: row;

  img {
    background: transparent;
    height: 6vh;
  }

  button {
    background: transparent;
    font-size: 1.8rem;
    padding: 5px;
  }
`;
