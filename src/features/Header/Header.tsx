import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ContactForm from '../ContactForm/ContactForm';
import logo from './Group 1.png';
import style from './Header.module.css';

function Header(): JSX.Element {
  return (
    <>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="logo Landville Group" />
        <nav className={style.nav}>
            <Link to="/ourservices" className={style.link}>Our Services</Link>
            <Link to="/landsupplier" className={style.link}>LandSupplier</Link>
            <Link to="/landville" className={style.link}>LandVille</Link>
        </nav>
        <ContactForm />
      </div>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
    </>
  );
}

export default Header;
