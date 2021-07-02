import React from 'react';
import PropTypes from 'prop-types';

export default function InfoBanner({ title, info }) {
  return (
    <div className="py-6 bg-gray-100">
      <h3 className="text-center font-light text-xs mt-1 lg:text-sm leading-tight">
        <span className="font-bold">{title}</span>
        {' '}
        -
        {' '}
        {info}
      </h3>
      <p className="text-center font-light text-xs mt-1 lg:text-sm leading-tight">
        Follow us on
        {' '}
        <a href="http://www.facebook.com/innerwestchurch" target="_blank" rel="noreferrer">Facebook</a>
        {' '}
        for further updates on our gatherings.
      </p>
    </div>
  );
}

InfoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
