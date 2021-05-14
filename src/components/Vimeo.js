import React from 'react';
import PropTypes from 'prop-types';

// TODO: Create better UX for video.
// TODO: Image placeholders and load on click functions.
// TODO: Might need to change to YouTube videos or Vimeo Pro?

export default function Vimeo({ videoID }) {
  return (
    <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
      <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" title={`vimeo${videoID}`} src={`https://player.vimeo.com/video/${videoID}?autoplay=0&amp;controls=0&amp;byline=0&amp;autopause=0&amp;color=28a0aa`} />
    </div>
  );
}

Vimeo.propTypes = {
  videoID: PropTypes.string.isRequired,
};
