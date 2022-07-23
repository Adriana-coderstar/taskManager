import React from 'react';
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './style/theme/useDarkMode';
import { Toggle } from './components/Toogle/Toggle';
import { darkTheme, lightTheme } from './style/GlobalStyle';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
