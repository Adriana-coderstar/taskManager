import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -480px;
  position: absolute;
  width: 80%;

  input {
    background-color: ${({ theme }) => theme.inputTask};
    border-radius: 22px;
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    height: 4vh;
    margin-left: 42px;
    padding: 25px;
    width: 64%;
  }

  input::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
  }

  img {
    background: transparent;
    cursor: pointer;
    margin-left: -10px;
    margin-top: 29px;
    width: 5vw;
  }

  button {
    background: transparent;
  }
`;
