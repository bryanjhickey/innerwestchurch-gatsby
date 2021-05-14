import React from 'react';
import PropTypes from 'prop-types';

export default function FriendsofIWC({ stJudes, soma, cityToCity }) {
  return (
    <div id="friends">
      <h3 className="text-4xl mt-24">
        Friends of Inner West
      </h3>
      <div className="flex justify-center content-center mt-20 space-y-6 space-x-24">
        <img src={stJudes.publicURL} alt="" />
        <img src={soma.publicURL} alt="" />
        <img src={cityToCity.publicURL} alt="" />
      </div>
    </div>
  );
}

FriendsofIWC.propTypes = {
  stJudes: PropTypes.string.isRequired,
  soma: PropTypes.string.isRequired,
  cityToCity: PropTypes.string.isRequired,
};
