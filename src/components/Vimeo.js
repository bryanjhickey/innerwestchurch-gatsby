/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import ReactPlayer from 'react-player';

export default function Vimeo(props) {
  return (
    <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
      <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" title={`vimeo${props.videoID}`} src={`https://player.vimeo.com/video/${props.videoID}?autoplay=0&amp;controls=0&amp;byline=0&amp;autopause=0&amp;color=28a0aa`} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true" />
    </div>
  );
}
