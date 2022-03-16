import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer
      className="text-white py-24"
      style={{
        background: 'linear-gradient(135deg, #336367 0%, #299ca6 100%)',
      }}
    >
      <div className="container">
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
            <a
              className="text-white hover:underline"
              href="https://www.melbourneanglican.org.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anglican Diocese of Melbourne
            </a>
          </p>
          <p className="text-xs mt-4">
            &copy; Copyright 2015 -
            {' '}
            {new Date().getFullYear()}
          </p>
          <p className="text-xs">All Rights Reserved</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
          <div className="col-span-1 text-center md:text-left py-6 md:py-0">
            <a
              className="text-xs text-white block mb-2 hover:underline font-bold"
              href="tel://0405-764-276"
            >
              0405 764 276
            </a>
            <a
              className="text-xs text-white block hover:underline font-bold"
              href="mailto:info@innerwestchurch.com.au"
            >
              info@innerwestchurch.com.au
            </a>
          </div>
          <div className="col-span-1 text-center md:text-right py-6 md:py-0">
            <p className="text-xs mb-2">
              <a
                className="text-white font-bold hover:underline text-center after:content-['_↗']"
                href="https://www.melbourneanglican.org.au/wp-content/uploads/2021/09/ADOM-Safe-Ministry-Policy-August-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safe Ministry Policy
              </a>
            </p>
            <p className="text-xs mb-10">
              <a
                className="text-white font-bold hover:underline text-center"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs">
            Website by
            {' '}
            <a
              className="text-white hover:underline text-center"
              href="https://bryanjhickey.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bryan Hickey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
