import React from 'react';
import Vimeo from './Vimeo';

export default function Mission(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto py-10">
      <div className="col-span-1 flex content-center items-center">
        <div>
          <h3 className="text-primary font-light text-3xl mb-8">{props.goal}</h3>
          <p className="font-light text-sm">
            {props.description}
          </p>
        </div>
      </div>
      <div className="col-span-2 p-20">
        <Vimeo className="max-w-full" videoID={props.video} />
      </div>
    </div>

  );
}
