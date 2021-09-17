/* eslint-disable react/prop-types */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Logo from './Logo';

export default function Banner({ banner }) {
  // const BannerImage = banner.image.asset.GatsbyImageData;
  return (
    <div>
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

            <div className="w-full py-10 max-w-xs md:max-w-md md:py-36 lg:max-w-lg 2xl:max-w-2xl xl:py-20 2xl:py-72 px-12">
              <h1 className="font-light text-4xl lg:text-5xl">
                {banner.title}
              </h1>
              <p className="mt-12 font-light text-lg lg:text-xl">
                { banner.copy }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
