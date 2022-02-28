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

        <title>Everyday church for everyday people following Jesus in everyday life</title>
        <meta name="title" content="Everyday church for everyday people following Jesus in everyday life" />
        <meta name="description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://innerwestchurch.com.au/" />
        <meta property="og:title" content="Everyday church for everyday people following Jesus in everyday life" />
        <meta property="og:description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://innerwestchurch.com.au/" />
        <meta property="twitter:title" content="Everyday church for everyday people following Jesus in everyday life" />
        <meta property="twitter:description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />
        <meta property="twitter:image" content="" />
      </Helmet>

      <div className="container">
        <InfoBanner title="Get to know us at our Sunday Gatherings" info="26 Norwood Street Flemington (St. Stephen’s Presbyterian)" />
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
