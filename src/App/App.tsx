import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Header from '../features/Header/Header';
import Main from '../features/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Main />
    </div>
  );
}

export default App;
