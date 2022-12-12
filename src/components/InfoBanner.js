import React from 'react';
import PropTypes from 'prop-types';

export default function InfoBanner({ title, info }) {
  return (
    <div className="py-6 px-2 bg-gray-100">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h3 className="text-center text-2xl leading-tight font-bold mb-2">
            🎄 Christmas Services 🎄
          </h3>
          <p className="text-center font-light leading-tight mb-1">
            Join us for our Christmas service on 18th of December at 4pm (
            <a href="https://www.google.com.au/maps/place/Flemington+Presbyterian+Church/@-37.7871713,144.9309824,15z/data=!4m5!3m4!1s0x0:0xa229dbecd9c19001!8m2!3d-37.7871713!4d144.9309824" target="_blank" rel="noopener noreferrer">Flemington Prebyterian</a>
            )
            . We&apos;ll be taking a short break from 19/12 to the 07/01. Normal services resume on the 8th of January.
          </p>

          {/* <p className="text-center font-light text-xs mt-1 lg:text-sm leading-tight">
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
          </p> */}
        </div>
      </div>
    </div>
  );
}

InfoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
