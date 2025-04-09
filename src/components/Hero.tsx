'use client';

import React from 'react';
import DevFinderPreview from './DevFinderPreview';

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 to-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Developer&apos;s File Explorer
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the perfect blend of command-line power and visual file management. Navium brings the best of both worlds to your development workflow.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/beta"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
            >
              Join Beta
            </a>
            <a href="/features" className="text-base font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="w-[600px]">
            <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <DevFinderPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 