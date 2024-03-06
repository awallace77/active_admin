import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

