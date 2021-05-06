import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import InfoBanner from '../components/InfoBanner';
import HeroCard from '../components/HeroCard';
import Podcast from '../components/Podcast';
import Mission from '../components/Mission';
import MissionalCommunities from '../components/MissionalCommunities';

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
  return (
    <Layout>
      <div className="fixed w-full bg-indigo-400 text-center">
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
      <div className="container">
        {missionGoals.map((missionGoal) => (
          <section key={missionGoal.id}>
            <hr className="border-primary border-1 max-w-lg mx-auto my-10" />
            <Mission
              goal={missionGoal.goal}
              video={missionGoal.video}
              description={missionGoal.description}
            />
          </section>
        ))}
      </div>
      <MissionalCommunities />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    imageSharp(id: {eq: "bdd61cdc-217c-521f-84b6-33774db1859e"}) {
      fluid(fit: COVER, maxWidth: 2100) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
`;
