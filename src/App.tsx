import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeTemplate from './components/templates/HomeTemplate/HomeTemplate';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { ImageProvider } from './contexts/ImageContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ImageProvider>
         <HomeTemplate />
      </ImageProvider>
      
    </ThemeProvider>
  );
}

export default App;
