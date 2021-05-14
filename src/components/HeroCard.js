import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Logo from './Logo';

export default function HeroCard({ banner }) {
  return (
    <>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0" />
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <GatsbyImage
              className="h-full w-full object-cover"
              image={banner.image.asset.gatsbyImageData}
              alt={banner.title}
            />
          </div>
          <div className="relative text-white">
            <div className="w-52 sm:w-64 lg:w-80 h-auto p-4">
              <Logo />
            </div>
            <div className="container">
              <div className="w-full py-20 max-w-xs md:max-w-md md:py-36 lg:max-w-lg 2xl:max-w-2xl xl:py-20 2xl:py-72">
                <h1 className="font-light text-4xl lg:text-5xl">
                  Everyday church for
                  everyday people
                  following Jesus in
                  everyday life
                </h1>
                <p className="mt-12 font-light text-lg lg:text-xl">
                  Because Jesus wants to be with us in the ordinary stuff…
                  {' '}
                  <br className="hidden lg:visible" />
                  {' '}
                  It’s more than a Sunday thing, it’s an everyday thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
HeroCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  banner: PropTypes.object.isRequired,
};
