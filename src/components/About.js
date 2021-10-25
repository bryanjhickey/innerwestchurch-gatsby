import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      gathered: file(relativePath: {eq: "gathered.jpeg"}) {
        publicURL
      }
    }
  `);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="text-base max-w-prose my-10">
        <h2 className="leading-6 text-primary font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          The Inner West Church Story
        </p>
      </div>
      <div className="grid grid-col-1 grid-row-2 lg:grid-row-1 lg:grid-cols-2 gap-12">
        <div className="row-start-2 row-span-1 lg:row-start-1 lg:col-span-1 lg:col-start-1 prose prose-indigo prose-lg text-gray-500">
          <p>
            Our story began in 2014 when a small bunch of friends began to gather around a shared love for Jesus and for the inner west of Melbourne. Out of that grew a desire to start a church where people could learn how the message of Jesus impacts the ordinary stuff of life.
          </p>
          <p>
            In 2015 that small group had grown and Inner West Church was launched in the suburb of Kensington. Over the years God has formed us into a family who are growing in love for God, each other and our neighbourhoods.
          </p>
          <p>
            We gather on Sundays around the Christian practices of hearing from the Bible, prayer, singing, and sharing the Lord’s Supper. During the week we live out our faith in smaller groups called Missional Communities, where we share the ebb and flow of everyday life.
          </p>
          <p>
            Our hope is that everyone who calls Inner West home would encounter Jesus, learn how to follow Him, and, alongside others, serve His mission.
          </p>
          <p>
            If you’d like to find out more, we’d love to meet you at one of our Sunday gatherings, or you can always contact us at:
            {' '}
            <a href="mailto:info@innerwestchurch.com.au">info@innerwestchurch.com.au</a>
            {' '}
            or
            {' '}
            <a href="tel:0405764276">0405 764 276</a>
            .
          </p>
        </div>
        <div className="row-start-1 row-span-1 lg:col-span-1 lg:col-start-2">
          <img src={data.gathered.publicURL} alt="gathered church" />
        </div>
      </div>
    </div>
  );
}
