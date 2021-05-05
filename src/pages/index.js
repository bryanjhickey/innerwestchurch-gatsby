import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import InfoBanner from '../components/InfoBanner';
import HeroCard from '../components/HeroCard';
import Podcast from '../components/Podcast';

export default function HomePage({ data }) {
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
      <HeroCard data={data} />
      <Podcast />
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
