import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider }  from 'styled-components';
import { App } from 'components/App';

const theme = {
  color: {
    black: '#000',
    white: '#fff',
    accent: 'orangered',
  },
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
