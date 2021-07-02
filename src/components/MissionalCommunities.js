/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// const visions = [
//   {
//     title: 'Family',
//     description: 'The Bible teaches that we have been adopted into God’s family through Jesus. This compels us to love and serve one another as brothers and sisters. We treat each other as children of God in everything — sharing our money, time, resources, needs, hurts, successes. We value knowing each other’s stories, and delight in sharing the family’s strengths and struggles. The best way to be in community is to live life together as God’s family.',
//   },
//   {
//     title: 'Disciples',
//     description: 'Christians are called to be lifelong followers of Jesus Christ—this is what it means to be disciples. As His disciples, we are empowered by the Spirit to increasingly understand God’s Word, embrace the Gospel, embody our new identity in Christ, and obey Christ’s commands',
//   },
//   {
//     title: 'Witnesses',
//     description: 'Just as Jesus was sent to reach us, so we, in turn, are sent by the Holy Spirit into our communities, to proclaim the Good News of God’s Kingdom. A witness is simply someone who experiences the love of God in Christ and goes out to tell others how this love has transformed their life. The best context for this to happen is in relationships;as we make friends we can invite them to encounter Christ in Christian community.',

//   },
// ];

function CommunityVision({ title, description }) {
  return (
    <div>
      <h4 className="font-medium mb-4">{title}</h4>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
}

export default function MissionalCommunities({ MissionalFocalPoints }) {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container">
        <div className="grid gap-12 grid-cols-5 pb-20">
          <div className="col-span-2 text-base max-w-prose mb-10">
            <h2 className="leading-6 text-primary font-semibold tracking-wide uppercase">Missional Communities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
              What we are called to be.
            </p>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/akRSX6QL-d8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="mt-1 text-xs">What is a Missional Community?</p>
          </div>

          <div className="col-span-3 gap-12">
            <div className="grid grid-cols-2 gap-12">
              {MissionalFocalPoints.map((MissionalFocalPoint) => (
                <div key={MissionalFocalPoint.title} className="col-span-1">
                  <CommunityVision
                    className="col-span-1"
                    title={MissionalFocalPoint.title}
                    description={MissionalFocalPoint.description}
                  />
                </div>
              ))}
              <div>
                <p className="italic font-light text-gray-500 text-base border-l-2 border-primary pl-4 mt-12">Missional Communities are small groups of Christians on mission with God, depending on the Spirit, showing and sharing the gospel of Jesus in everyday life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
CommunityVision.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
