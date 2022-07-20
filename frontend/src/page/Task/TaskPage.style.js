import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: ${({ theme }) => theme.borderBottom};
  border-right: ${({ theme }) => theme.borderRight};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadown};
  color: #cfcfcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px auto;
  min-height: 650px;
  padding-bottom: 40px;
  width: 60%;

  input {
    margin-top: 20px;
  }
`;
