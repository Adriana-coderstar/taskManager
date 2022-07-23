import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;

  input {
    margin-top: 20px;
  }
`;

export const Div = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: ${({ theme }) => theme.borderBottom};
  border-radius: 20px;
  border-right: ${({ theme }) => theme.borderRight};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadown};
  color: #cfcfcf;
  margin: 0 auto;
  min-height: 66vh;
  padding-bottom: 40px;
  width: 80%;
`;
