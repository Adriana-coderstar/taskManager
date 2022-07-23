import styled from 'styled-components';
import { ReactComponent as Button } from '../../img/buttonAdd.svg';

export const Container = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;

  input {
    align-items: center;
    background-color: ${({ theme }) => theme.inputTask};
    border-radius: 12px;
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    height: 4vh;
    margin-bottom: 24px;
    width: 64%;
    padding-left: 12px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
    padding: 10px;
  }
`;

export const ButtonAdd = styled(Button)`
  cursor: pointer;
  height: 7.8vh;
  margin: 0;
  padding: 0;
  width: auto;
`;
