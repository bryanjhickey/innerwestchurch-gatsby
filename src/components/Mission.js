import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({
  // eslint-disable-next-line react/prop-types
  id, goal, description,
}) {
  return (
    <div key={id} className="col-span-1">
      <h3 className="text-3xl font-light tracking-tight sm:text-4xl pb-2 mb-4 border-b-2 border-primary" style={{ width: 'max-content' }}>{goal}</h3>
      <p className="font-light text-sm">
        {description}
      </p>
    </div>
  );
}
Mission.propTypes = {
  goal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
