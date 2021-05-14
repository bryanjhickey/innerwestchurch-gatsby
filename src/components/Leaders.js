import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const people = [
  {
    name: 'Pete Greenwood',
    role: 'Pastor',
    imageUrl:
      'http://innerwestchurch.com.au/wp-content/uploads/2020/10/40e3ba1f8eba76ff3a76acb4e65b5f76-lossy.jpg',
    bio: 'Some sample text goes here. Something personal. Something witty. Just a little to help us know you.',
    instagramURL: '#',
    facebookURL: '#',
  },
  {
    name: 'Catherine Austin',
    role: 'Discipleship & Mission Pastor',
    imageUrl:
      'http://innerwestchurch.com.au/wp-content/uploads/2020/10/WhatsApp-Image-2020-08-19-at-12.38.56-PM1-600x600.jpeg',
    bio: 'Some sample text goes here. Something personal. Something witty. Just a little to help us know you.',
    instagramURL: '#',
    facebookURL: '#',
  },
  {
    name: 'Jon Tran',
    role: 'Pastor',
    imageUrl:
      'https://scontent.fmel7-1.fna.fbcdn.net/v/t1.18169-9/14192658_10154567735988623_8226773193472746462_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=zjH4R8cpKC8AX-vxuNU&_nc_ht=scontent.fmel7-1.fna&oh=33a37213127029960963ea20a6ffcd90&oe=60C3E163',
    bio: 'Some sample text goes here. Something personal. Something witty. Just a little to help us know you.',
    instagramURL: '#',
    facebookURL: '#',
  },
];

export default function Leaders() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl pb-2 mb-4 border-b-2 border-primary" style={{ width: 'max-content' }}>Our Leaders</h2>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-full w-2/3 mx-auto mb-10" src={person.imageUrl} alt="" />
                    </div>
                    <div className="text-lg leading-6 text-center font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500 text-sm">{person.bio}</p>
                    </div>

                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a href={person.instagramURL} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Instagram</span>
                          <FaInstagram className="" />
                        </a>
                      </li>
                      <li>
                        <a href={person.facebookURL} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Facebook</span>
                          <FaFacebook className="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
