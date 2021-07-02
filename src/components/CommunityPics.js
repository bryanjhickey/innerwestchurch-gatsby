import React from 'react';
import {
  FaFacebook, FaInstagram,
} from 'react-icons/fa';

export default function CommunityPics() {
  return (
    <div id="communityPics">
      <h3 className="text-3xl">Community Pics.</h3>
      <p className="text-sm mt-4">Every family needs a photo album… ours just happens to be digital!</p>
      <div className="flex w-full justify-center mt-10">
        <a href="https://www.facebook.com/innerwestchurch/" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
          <FaFacebook className="inline-block mr-4" />
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/innerwestchurch/" target="_blank" rel="noreferrer" className="text-base text-white tracking-wide bg-primary text-center rounded-sm uppercase px-6 py-4 mx-10">
          <FaInstagram className="inline-block mr-4" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}
