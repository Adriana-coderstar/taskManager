import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.bgTask};
  border-radius: 20px;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  height: 6vh;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 59px;
  padding: 4px;
  position: relative;
  width: 90%;

  p {
    background-color: transparent;
    font-size: 1.4rem;
    padding-left: 5px;
    width: 9vw;
  }

  .complete {
    text-decoration: line-through;
  }

  .input-update {
    background-color: ${({ theme }) => theme.bgTask};
    bottom: 12px;
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    height: 3vh;
    left: 9px;
    position: absolute;
    width: 22vw;
    z-index: 3;
  }

  .input-update:hover {
    font-size: 1.8rem;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.1vh;

  select {
    background-color: ${({ theme }) => theme.inputTask};
    border-radius: 12px;
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
    text-align: center;
  }
`;
