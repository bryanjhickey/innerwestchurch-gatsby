import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Logo from './Logo';

export default function HeroCard({ data }) {
  const bannerImage = getImage(data.imageSharp);
  return (
    <>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0" />
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <GatsbyImage
              className="h-full w-full object-cover"
              image={bannerImage}
              alt="Alt Text"
            />
          </div>
          <div className="relative text-white">
            <div className="w-52 sm:w-64 lg:w-80 h-auto p-4">
              <Logo />
            </div>
            <div className="container">
              <div className="w-full py-20 max-w-xs md:max-w-md md:py-36 lg:max-w-lg 2xl:max-w-2xl xl:py-20 2xl:py-64">
                <h1 className="font-light text-4xl md:text-5xl lg:text-6xl">
                  Everyday church for
                  everyday people
                  following Jesus in
                  everyday life
                </h1>
                <p className="mt-12 text-lg md:text-xl lg:text-2xl">
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
