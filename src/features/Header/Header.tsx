import React from 'react';
import logo from './Group 1.png';
import style from './Header.module.css';

function Header(): JSX.Element {
  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo Landville Group" />
      <div className={style.nav}>
        <span className={style.link}>Our Services</span>
        <span className={style.link}>LandSupplier</span>
        <span className={style.link}>LandVille</span>
      </div>
      <button type="button" className={style.btn}>Contact Us</button>
    </div>
  );
}

export default Header;
