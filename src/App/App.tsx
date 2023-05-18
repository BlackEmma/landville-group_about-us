import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from '../features/Header/Header';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <header className="App-header" />
    </div>
  );
}

export default App;
