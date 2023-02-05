import React from 'react';
import PropTypes from 'prop-types';

export default function InfoBanner({ title, info }) {
  return (
    <div className="py-6 px-2 bg-gray-100">
      <div className="container">
        <div className="max-w-lg mx-auto">
             <h3 className="text-center text-sm mt-1 lg:text-sm leading-tight font-bold pb-2">
          {title}
        </h3>
        <p className="text-center font-light text-xs mt-1 lg:text-sm leading-tight pb-1">{info}</p>

        <p className="text-center font-light text-xs mt-1 lg:text-sm leading-tight">
          Follow us on
          {' '}
          <a
            href="http://www.facebook.com/innerwestchurch"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          {' '}
          for further updates on our gatherings.
        </p>
        </div>
      </div>
    </div>
  );
}

InfoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
