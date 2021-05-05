import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import InfoBanner from '../components/InfoBanner';

export default function HomePage({ data }) {
  const bannerImage = getImage(data.imageSharp);
  return (
    <Layout>
      <div className="bg-indigo-400 text-center">
        <div className="block sm:hidden">Extra Small</div>
        <div className="hidden sm:block md:hidden">Small</div>
        <div className="hidden md:block lg:hidden">Medium</div>
        <div className="hidden lg:block xl:hidden">Large</div>
        <div className="hidden xl:block 2xl:hidden">Extra Large</div>
        <div className="hidden 2xl:block">2XL</div>
      </div>
      <InfoBanner />
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
              <div className="w-full py-20 max-w-xs md:max-w-md md:py-36 lg:max-w-lg 2xl:max-w-2xl xl:py-52 2xl:py-64">
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
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    imageSharp(id: {eq: "bdd61cdc-217c-521f-84b6-33774db1859e"}) {
      gatsbyImageData(
         width: 1900
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
    }
  }
`;
