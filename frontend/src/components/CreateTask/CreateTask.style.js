import styled from 'styled-components';
import { ReactComponent as Button } from '../../img/buttonAdd.svg';

export const Container = styled.div`
  align-items: center;
  background: transparent;
  padding: 20px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;

  input {
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.inputTask};
    border-radius: 12px;
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    align-items: center;
    height: 4vh;
    width: 64%;
    padding-left: 12px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
  }
`;

export const ButtonAdd = styled(Button)`
  margin: 0;
  padding: 0;
  width: auto;
  height: 77px;
`;
