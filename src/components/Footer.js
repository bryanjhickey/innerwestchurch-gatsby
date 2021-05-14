import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 text-white py-24 px-10" style={{ background: 'linear-gradient(135deg, #336367 0%, #299ca6 100%)' }}>
      <div className="text-center lg:text-left">
        <a className="text-xs text-white block hover:underline" href="tel://0405-764-276">0405 764 276</a>
        <a className="text-xs text-white block hover:underline" href="mailto:info@innerwestchurch.com.au">info@innerwestchurch.com.au</a>
      </div>
      <div className="text-center">
        <div className="w-64 mx-auto mb-10 pt-10">
          <Link className="text-white" to="/">
            <Logo />
          </Link>
        </div>
        <p className="text-xs">
          Inner West Church is an Authorised Congregation
          <br />
          within the
          {' '}
          <a className="text-white hover:underline" href="https://www.melbourneanglican.org.au/" target="_blank" rel="noopener noreferrer">Anglican Diocese of Melbourne</a>
        </p>
      </div>
      <div className="text-center lg:text-right">
        <p className="text-xs pt-10">
          &copy; Copyright 2015 -
          {' '}
          {new Date().getFullYear()}
        </p>
        <p className="text-xs">All Rights Reserved</p>
        <p className="text-xs">
          Website by
          {' '}
          <a className="text-white hover:underline" href="https://bryanjhickey.com.au" target="_blank" rel="noopener noreferrer">Bryan Hickey</a>
        </p>
      </div>

    </footer>
  );
}
