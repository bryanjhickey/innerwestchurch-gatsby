import React from 'react';
import PropTypes from 'prop-types';
import Vimeo from './Vimeo';

export default function Mission({
  // eslint-disable-next-line react/prop-types
  id, goal, description, video,
}) {
  return (
    <section key={id}>
      <hr className="border-primary border-1 max-w-lg mx-auto my-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto py-10">
        <div className="col-span-1 flex content-center items-center">
          <div>
            <h3 className="text-3xl font-light tracking-tight sm:text-4xl pb-2 mb-4 border-b-2 border-primary" style={{ width: 'max-content' }}>{goal}</h3>
            <p className="font-light text-sm">
              {description}
            </p>
          </div>
        </div>
        <div className="col-span-2 p-20">
          <Vimeo className="max-w-full" videoID={video} />
        </div>
      </div>
    </section>
  );
}
Mission.propTypes = {
  goal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};
