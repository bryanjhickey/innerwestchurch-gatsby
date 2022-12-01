import React from 'react';
import { FaMusic } from 'react-icons/fa';

export default function LatestSermons() {
  return (
    <div className="text-center bg-gray-200">
      <div className="container">        
              <div className="p-4">
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
      </div>
    </div>
  );
}
