import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function CommunityPics() {
  return (
    <div id="communityPics">
      <h3 className="text-4xl">Community Pics.</h3>
      <p className="text-sm mt-4">Every family needs a photo album… ours just happens to be digital!</p>
      <div className="flex w-full justify-center mt-10">
        <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
          <FaFacebookF className="inline-block mr-4" />
          <span>Facebook</span>
        </a>
        <a href="https://itunes.apple.com/au/podcast/inner-west-church-sermons/id1133412833?mt=2" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
          <FaInstagram className="inline-block mr-4" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}
