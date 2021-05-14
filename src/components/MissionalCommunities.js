/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const visions = [
  {
    title: 'Family',
    description: 'The Bible teaches that we have been adopted into God’s family through Jesus. This compels us to love one another as brothers and sisters. We treat each other as children of God in everything — sharing our money, time, resources, needs, hurts, successes. We value knowing each other’s stories, and delight in sharing the family’s strengths and struggles. The best way to be in community is to live life together as God’s family.',
  },
  {
    title: 'Servants',
    description: 'When we were at our lowest, Jesus came to serve us by giving his life for us. This truth frees us up to follow his example by serving the least, the last, and the lost. Living as servants of the King, we give of ourselves, presenting a visible truth to Jesus’ kingdom and the power of the gospel to change lives.',

  },
  {
    title: 'Disciples',
    description: 'Just as Jesus was sent to reach us, so we are in turn sent to our communities to proclaim the good news of God’s kingdom — the Gospel — fulfilling the commission of Jesus.',
  },
  {
    title: 'Missionaries',
    description: 'By living as family, servants and missionaries, we become lifelong followers of Jesus—this is what it means to be disciples. As His disciples, we embrace the gospel, are embodied in a new identity and are empowered to obey his commands. Missional communities offer a rich environment for every disciple to flourish.',
  },

];

function CommunityVision({ title, description }) {
  return (
    <div>
      <h4 className="font-medium mb-4">{title}</h4>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
}

export default function MissionalCommunities() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container">
        <div className="grid gap-12 grid-cols-4 pb-20">
          <div className="text-left lg:text-center col-span-4 lg:col-span-2 lg:col-start-2">
            <h3 className="text-3xl font-light tracking-tight pb-2 sm:text-4xl border-b-2 border-primary lg:mx-auto mb-10" style={{ width: 'max-content' }}>Missional Communities</h3>
            <p className="font-light">
              Inner West Church is formed around several ‘Missional Communities’.
            </p>
            <p className="italic font-light text-gray-500 text-sm my-4 border-l-2 border-gray-900 pl-2">Missional Communities are small groups of Christians on mission with God, depending on the Spirit, showing and sharing the gospel of Jesus in everyday life.</p>
            <h4 className="font-medium text-primary text-xl mt-9">
              What are we called to be?
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {visions.map((vision) => (
            <div key={vision.title} className="col-span-1">
              <CommunityVision
                className="col-span-1"
                title={vision.title}
                description={vision.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
CommunityVision.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
