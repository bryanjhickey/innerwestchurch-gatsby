/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { FaFacebook, FaInstagram, FaMusic } from 'react-icons/fa';
import Layout from '../components/Layout';
import HeroCard from '../components/HeroCard';
import Mission from '../components/Mission';
import MissionalCommunities from '../components/MissionalCommunities';
import Leaders from '../components/Leaders';
import Footer from '../components/Footer';
import SomaAustralia from '../components/svg/SomaAustralia';
import StJudes from '../components/svg/StJudes.js';
import CityToCity from '../components/svg/CityToCity';

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inner West Church - Everyday church for everyday life</title>
        <link rel="canonical" href="https://localhost:8000/" />
        <meta name="description" content="Inner West Church is a church of local people learning to follow Jesus together, on mission with God, in the everyday stuff of life." />
      </Helmet>
      <Layout>
        <div className="text-center py-6">
          <h3 className="text-primary font-medium text-base lg:text-lg">Get to know us at our Sunday Gatherings</h3>
          <p className="text-xs mt-2 lg:text-sm">4:00pm – 26 Norwood Street Flemington (St. Stephen’s Presbyterian)</p>
          <p className="text-xs mt-2 lg:text-sm">
            Follow us on
            {' '}
            <a href="http://www.facebook.com/innerwestchurch" target="_blank" rel="noreferrer">Facebook</a>
            {' '}
            for further updates on our gatherings.
          </p>
        </div>
        <HeroCard banner={banner} />
        <div className="container">
          <div className="text-center py-20">
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl mx-auto mb-16">Latest Sermons</h3>
            <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4">
              <FaMusic className="inline-block mr-4" />
              <span>Get more on iTunes</span>
            </a>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
            {missionGoals.map((missionGoal) => (
              <Mission
                key={missionGoal.id}
                goal={missionGoal.goal}
                video={missionGoal.video}
                description={missionGoal.description}
              />
            ))}
          </section>
        </div>
        <section className="py-20 text-center text-white font-light" style={{ background: 'linear-gradient(135deg, #336367 0%, #299ca6 100%)' }}>
          <div id="communityPics">
            <h3 className="text-4xl">Community Pics.</h3>
            <p className="text-sm mt-4">Every family needs a photo album… ours just happens to be digital!</p>
            <div className="flex w-full justify-center mt-10">
              <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
                <FaFacebook className="inline-block mr-4" />
                <span>Facebook</span>
              </a>
              <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
                <FaInstagram className="inline-block mr-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div id="friends">
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl mt-24 mx-auto" style={{ width: 'max-content' }}>
              Friends of Inner West
            </h3>
            <div className="container flex flex-col md:flex-row mx-auto justify-center content-center mt-20">
              <div className="w-1/3 self-center">
                <a href="https://somaaustralia.org.au/" className="text-white space-x-4">
                  <SomaAustralia />
                </a>
              </div>
              <div className="w-1/3 self-center">
                <a href="https://stjudes.org.au/" className="text-white">
                  <StJudes />
                </a>
              </div>
              <div className="w-1/3 self-center">
                <a href="https://citytocityaustralia.org.au/" className="text-white">
                  <CityToCity />
                </a>
              </div>
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
}
`;
