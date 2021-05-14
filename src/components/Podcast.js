import React from 'react';
import { FaMusic } from 'react-icons/fa';

export default function Podcast() {
  return (
    <div className="text-center py-20">
      <h3 className="text-3xl font-light tracking-tight sm:text-4xl mx-auto mb-16">Latest Sermons</h3>
      <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4">
        <FaMusic className="inline-block mr-4" />
        <span>Get more on iTunes</span>
      </a>
    </div>
  );
}
