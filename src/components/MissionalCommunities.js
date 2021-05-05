/* eslint-disable react/destructuring-assignment */
import React from 'react';

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

function CommunityVision(props) {
  return (
    <div>
      <h4 className="text-primary font-medium mb-4">{props.title}</h4>
      <p className="font-light text-sm">{props.description}</p>
    </div>
  );
}

export default function MissionalCommunities() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-primary text-5xl font-light mb-10">Missional Communities</h3>
          <p className="font-light">
            Inner West Church is formed around several ‘Missional Communities’.
          </p>
          <p className="italic font-light mt-4">Missional Communities are small groups of Christians on mission with God, depending on the Spirit, showing and sharing the gospel of Jesus in everyday life.</p>
          <h4 className="font-medium text-primary mt-10 mb-8">
            What are we called to be?
          </h4>
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
