import React from 'react';
import { FacebookRounded, Instagram, Twitter, LinkedIn, YouTube, AlternateEmail } from '@mui/icons-material';
import style from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={style.container}>
      <span className={style.message}>
        Please feel welcome to get in touch and connect with us anytime.
      </span>
      <div className={style.links}>
        <a href="https://www.facebook.com/">
          <FacebookRounded />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedIn />
        </a>
        <a href="https://www.youtube.com/">
          <YouTube />
        </a>
        <a href="https://twitter.com/">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/">
          <Instagram />
        </a>
        <a href="https://www.google.com/intl/ru/gmail/about/">
          <AlternateEmail />
        </a>
      </div>
      <span className={style.copyrights}>
        © 2023 LandvilleGroup. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
