import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme.ts';
import { GlobalStyle } from './styles/global.ts';

import { SignIn } from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
