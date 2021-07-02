import React from 'react';
import { FaMusic } from 'react-icons/fa';

export default function LatestSermons() {
  return (
    <div className="text-center py-20 flex justify-around bg-gray-200">
      <div className="mx-6">
        <p className="text-sm py-2 mb-6 font-bold w-2/3 mx-auto">Catch out latest sermons in your podcast player or browse past sermons.</p>
        <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-sm text-white tracking-wide mt-10 bg-primary text-center uppercase rounded-lg px-6 py-4">
          <FaMusic className="inline-block mr-4" />
          <span>Latest Sermons</span>
        </a>
      </div>
      <div className="mx-6">
        <p className="text-sm py-2 mb-6 font-bold w-2/3 mx-auto">Join us live on Zoom at 4pm (AEST) for our Sunday Gatherings</p>
        <a href="https://bit.ly/zoomiwc" target="_blank" rel="noreferrer" className="text-sm text-white tracking-wide mt-10 bg-primary text-center uppercase rounded-lg px-6 py-4">
          <FaMusic className="inline-block mr-4" />
          <span>Sunday LiveStream</span>
        </a>
      </div>
    </div>
  );
}
