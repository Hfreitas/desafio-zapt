import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { GlobalStyle, theme } from './styles';

import '@fontsource/plus-jakarta-sans';
import '@fontsource/inter';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
