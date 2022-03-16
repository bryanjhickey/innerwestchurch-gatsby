/* eslint-disable react/prop-types */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Leaders({ leaders }) {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-4 md:col-span-1 text-base max-w-prose mb-10">
        <h2 className="leading-6 text-primary font-semibold tracking-wide uppercase">Our Leaders</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Meet the team.
        </p>
      </div>
      <ul className="col-span-4 md:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {leaders.map((leader) => (
          <li key={leader.id} className="col-span-1">
            <div className="space-y-2 relative">
              <div className="aspect-w-3 aspect-h-2 max-w-md mx-auto">
                <GatsbyImage
                  className="object-cover shadow-lg rounded-lg"
                  image={leader.image.asset.gatsbyImageData}
                  alt={leader.name}
                />
              </div>
              <div className="h-24 text-lg leading-6 text-center font-medium space-y-1 border-b-2 border-grey-200">
                <h3>{leader.name}</h3>
                <p className="text-sm text-primary">{leader.position}</p>
                <p className="text-xs italic">{leader.role}</p>
              </div>
              <div>
                <div className="text-lg mb-6">
                  <h3 className="font-bold text-sm my-4">Why I love my neighbourhood.</h3>
                  <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
