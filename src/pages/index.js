/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import InfoBanner from '../components/InfoBanner';
import HeroCard from '../components/HeroCard';
import Podcast from '../components/Podcast';
import Mission from '../components/Mission';
import MissionalCommunities from '../components/MissionalCommunities';
import CommunityPics from '../components/CommunityPics';
import Leaders from '../components/Leaders';
import Footer from '../components/Footer';

const missionGoals = [
  {
    id: '1',
    goal: 'Connect',
    description: 'Everyone feels the need for deep connections, yet so often we feel alone in a crowd. Let’s share life together.',
    video: '259283510',
  },
  {
    id: '2',
    goal: 'Restore',
    description: 'Seeing a person, community or city restored is a thrilling thing. That’s why we’re so excited to be part of the greatest restoration project in history, and we’d love for you to take part in it.',
    video: '259297482',
  },
  {
    id: '3',
    goal: 'Share',
    description: 'The best stories are never hidden, they’re made to be shared by people like us. Be connected, be restored, share the story',
    video: '259299777',
  },
];

export default function HomePage({ data }) {
  const { banner } = data;
  const { stJudes, soma, cityToCity } = data;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inner West Church - Everyday church for everyday life</title>
        <link rel="canonical" href="https://localhost:8000/" />
        <meta name="description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />
      </Helmet>
      <Layout>
        <InfoBanner />
        <HeroCard banner={banner} />
        <Podcast />
        <div className="container">
          {missionGoals.map((missionGoal) => (
            <Mission
              key={missionGoal.id}
              goal={missionGoal.goal}
              video={missionGoal.video}
              description={missionGoal.description}
            />
          ))}
        </div>
        <section className="py-20 text-center text-white font-light" style={{ background: 'linear-gradient(135deg, #336367 0%, #299ca6 100%)' }}>
          <CommunityPics />
          <div id="friends">
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl mt-24 mx-auto" style={{ width: 'max-content' }}>
              Friends of Inner West
            </h3>
            <div className="container flex flex-col md:flex-row mx-auto justify-center content-center mt-20">
              <div className="w-1/3 self-center"><a href="https://somaaustralia.org.au/"><img className="w-36 mx-auto py-10" src={soma.publicURL} alt="Soma Australia" /></a></div>
              <div className="w-1/3 self-center"><a href="https://stjudes.org.au/"><img className="w-40 mx-auto py-10" src={stJudes.publicURL} alt="St Jude's Church" /></a></div>
              <div className="w-1/3 self-center"><a href="https://citytocityaustralia.org.au/"><img className="w-60 mx-auto py-10" src={cityToCity.publicURL} alt="City to City Australia" /></a></div>
            </div>
          </div>
        </section>
        <Leaders />
        <MissionalCommunities />
        <Footer banner="banner" />
      </Layout>
    </>
  );
}

export const query = graphql`
query MyQuery {
  banner: sanityBanner(id: {eq: "-303f4449-570e-5049-b712-7125453ac99e"}) {
    title
    image {
      asset {
         gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
      }
    }
  }
  stJudes: file(id: {eq: "4fcb0cfb-7093-5d0b-bcc8-6a451e5f8e74"}) {
    id
    publicURL
  }
  soma: file(id: {eq: "1b4d86fa-26d7-52d0-81f2-d0daebcdcbe0"}) {
    id
    publicURL
  }
  cityToCity: file(id: {eq: "b6fb6262-52b4-5a20-b8a7-f524cdffdff1"}) {
    id
    publicURL
  }
}
`;
