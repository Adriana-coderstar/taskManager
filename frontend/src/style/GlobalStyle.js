import { createGlobalStyle } from 'styled-components';
import emailLight from '../img/email-light.svg';
import emailDark from '../img/email.svg';
import padlockDark from '../img/padlock.svg';
import padlockLight from '../img/padlock-light.svg';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body{
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }
    
    button {
      cursor: pointer;
    }
`;

export const darkTheme = {
  background: '#21213e',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  bgTask: '#21213e',
  borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
  boxShadown: 'inset -2px -2px rgba(0, 0, 0, 0.4)',
  buttonColor: '#6467e8',
  buttonLoginShadow: 'inset -3px -3px rgba(0, 0, 0, 0.4)',
  imgEmail: `url(${emailDark})`,
  imgPadlock: `url(${padlockDark})`,
  inputTask: '#21213e',
  positionImg: '3px 24px',
  positionPadlock: '-135px -69px',
  sizeImg: '60px 63px;',
  sizePadlock: '304px 232px',
  spanColor: '#cfcfcf',
  text: '#cfcfcf',
};

export const lightTheme = {
  background:
    'linear-gradient(to left top, #ffffff, #f4f3fb, #e9e8f7, #dddcf3, #d0d1ef, #cbd2f0, #c5d4f0, #c0d5f0, #c9e1f2, #d7ebf4, #e8f4f7, #fbfdfd);',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  bgTask: '#edecf8',
  border: '1px solid rgba(255, 255, 255, 0.8)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3  )',
  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
  buttonColor: '#cccff7',
  buttonLoginShadow: 'inset -3px -3px rgba(0, 0, 0, 0.1)',
  imgEmail: `url(${emailLight})`,
  imgPadlock: `url(${padlockLight})`,
  inputTask: '#edecf8',
  positionImg: '-9px -24px;',
  positionPadlock: '-135px -73px',
  sizeImg: '58px 152px;',
  sizePadlock: '304px 279px',
  spanColor: '#8f8e8a',
  text: '#49516F',
};
