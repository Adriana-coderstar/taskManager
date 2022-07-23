import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  backdrop-filter: ${({ theme }) => theme.backdropFilter};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 25px;
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 160px auto;
  min-height: 62vh;
  width: 25vw;

  input {
    background: none;
    border: unset;
    box-sizing: border-box;
    font-size: 1.3rem;
    height: 9vh;
    outline: none;
    width: 60%;
  }

  input[type='email'] {
    background-image: ${({ theme }) => theme.imgEmail};
    background-position: ${({ theme }) => theme.positionImg};
    background-repeat: no-repeat;
    background-size: ${({ theme }) => theme.sizeImg};
    color: ${({ theme }) => theme.text};
    padding-left: 22px;
    text-indent: 20px;
  }

  input[type='password'] {
    background-image: ${({ theme }) => theme.imgPadlock};
    background-position: ${({ theme }) => theme.positionPadlock};
    background-repeat: no-repeat;
    background-size: ${({ theme }) => theme.sizePadlock};
    color: ${({ theme }) => theme.text};
    padding-left: 22px;
    text-indent: 20px;
  }

  ::placeholder {
    margin-bottom: 10px;
  }

  span {
    background: ${({ theme }) => theme.spanColor};
    height: 1px;
    margin-bottom: 25px;
    transition: 0.3s ease-in-out;
    width: 60%;
  }

  span::after {
    content: '';
    background: #6467e8;
    display: block;
    height: 0.8px;
    margin-bottom: 16px;
    transition: 0.3s ease-in-out;
    width: 0;
  }

  input:focus + span::after {
    width: 100%;
  }

  button {
    background-color: ${({ theme }) => theme.buttonColor};
    border-radius: 6px;
    border: unset;
    box-shadow: ${({ theme }) => theme.buttonLoginShadow};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 50px;
    outline: none;
    padding: 15px 20px;
    width: 50%;
  }

  button:hover {
    transition: 1ms;
    width: 60%;
  }
`;
