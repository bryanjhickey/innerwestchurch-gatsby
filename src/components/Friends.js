import React from 'react';
import CityToCity from './svg/CityToCity';
import SomaAustralia from './svg/SomaAustralia';
import StJudes from './svg/StJudes';

export default function Friends() {
  return (
    <div id="friends" className="pt-20">
      <h3 className="text-3xl">
        Friends of Inner West
      </h3>
      <div className="grid grid-cols-3 max-w-2xl mx-auto gap-6 pt-10">
        <div className="self-center">
          <div className="w-2/3 mx-auto">
            <a href="https://somaaustralia.org.au/" className="text-white space-x-4">
              <SomaAustralia />
            </a>
          </div>
        </div>
        <div className="self-center">
          <div className="w-2/3 mx-auto">
            <a href="https://stjudes.org.au/" className="text-white">
              <StJudes />
            </a>
          </div>
        </div>
        <div className="self-center">
          <a href="https://citytocityaustralia.org.au/" className="text-white">
            <CityToCity />
          </a>
        </div>
      </div>
    </div>
  );
}
