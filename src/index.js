import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <ColorModeScript />
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
