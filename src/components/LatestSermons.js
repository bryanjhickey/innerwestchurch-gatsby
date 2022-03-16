import React from 'react';
import { FaMusic } from 'react-icons/fa';

export default function LatestSermons() {
  return (
    <div className="text-center bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-2 px-4 py-8">
          <div className="col-span-2 md:col-span-1 p-4">
            <a
              href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white tracking-wide mt-10 bg-primary text-center uppercase rounded-lg px-6 py-4"
            >
              <FaMusic className="inline-block mr-4" />
              <span>Latest Sermons</span>
            </a>
            <p className="text-sm font-bold my-6">
              Catch out latest sermons in your podcast player or browse past
              sermons.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 p-4">
            <a
              href="https://bit.ly/zoomiwc"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white tracking-wide mt-10 bg-primary text-center uppercase rounded-lg px-6 py-4"
            >
              <FaMusic className="inline-block mr-4" />
              <span>Sunday LiveStream</span>
            </a>
            <p className="text-sm font-bold my-6">
              Join us live on Zoom at 4pm (AEST) for our Sunday Gatherings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
