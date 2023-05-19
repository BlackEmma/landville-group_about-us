import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from '../features/Header/Header';
import Main from '../features/Main/Main';
import Footer from '../features/Footer/Footer';
import StyledDivider from '../Components/StyledDivider/StyledDivider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <StyledDivider height="1px" />
      <Main />
      <StyledDivider height="2px" />
      <Footer />
    </div>
  );
}

export default App;
