/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Banner from '../components/Banner';
import LatestSermons from '../components/LatestSermons';
import InfoBanner from '../components/InfoBanner';
import Footer from '../components/Footer';
import About from '../components/About';
import CommunityPics from '../components/CommunityPics';
import Friends from '../components/Friends';
import Leaders from '../components/Leaders';
import MissionalCommunities from '../components/MissionalCommunities';

export default function HomePage({ data }) {
  const { banner } = data;
  const leaders = data.leaders.nodes;
  const MissionalFocalPoints = data.MissionalFocalPoints.nodes;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inner West Church - Everyday church for everyday life</title>
        <link rel="canonical" href="https://localhost:8000/" />
        <meta name="description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />
      </Helmet>

      <div className="container">
        <InfoBanner title="Get to know us at our Sunday Gatherings" info="4:00pm – 26 Norwood Street Flemington (St. Stephen’s Presbyterian)" />
        <Banner banner={banner} />
        <LatestSermons />
        <About />
      </div>

      <section className="py-20 text-center text-white font-light" style={{ background: 'linear-gradient(135deg, #336367 0%, #299ca6 100%)' }}>
        <div className="container">
          <CommunityPics />
          <Friends />
        </div>
      </section>

      <div className="container my-24">
        <Leaders leaders={leaders} />
      </div>
      <MissionalCommunities MissionalFocalPoints={MissionalFocalPoints} />
      <Footer />
    </>
  );
}

export const query = graphql`
query MyQuery {
    banner: sanityBanner(id: {eq: "-303f4449-570e-5049-b712-7125453ac99e"}) {
      title
      copy
      image {
        asset {
         gatsbyImageData
       }
      }
  }
  MissionalFocalPoints: allSanityMissionalFocalPoints(sort: {fields: _createdAt}) {
  nodes {
      title
      description
    }
  }
  leaders: allSanityStaff(sort: {fields: _createdAt}) {
    nodes {
      id
      bio
      name
      role
      position
      image {
        asset {
            gatsbyImageData(
              width: 500
              aspectRatio: 1.2
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
}
`;
