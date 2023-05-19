/* eslint-disable max-len */
import React from 'react';
import style from './Main.module.css';

function Main(): JSX.Element {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <p className={style.welcome}>Welcome to Landville Group Holdings</p>
        <div className={style.info}>
          <p>
            Landville Group provides cutting-edge and results-driven tools and services for<br />real estate professionals,
            enabling them to enhance and expand their brands.
          </p>
          <p>
            Additionally, we offer a comprehensive marketplace solution for buyers to<br />discover exceptional vacant land
            deals online with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
