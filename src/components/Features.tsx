'use client';

import React from 'react';

const Features = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful Features</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Everything you need to manage your codebase
          </p>
          <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600">
            DevFinder combines the power of the command line with the convenience of a modern file explorer.
          </p>
        </div>
        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-2xl sm:max-w-4xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
              <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7 text-gray-900">
                <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                </svg>
                Terminal Integration
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-sm sm:text-base leading-6 text-gray-600">
                <p className="flex-auto">Seamlessly switch between terminal and file explorer with a single keyboard shortcut.</p>
              </dd>
            </div>
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
              <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7 text-gray-900">
                <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                Secure by Default
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-sm sm:text-base leading-6 text-gray-600">
                <p className="flex-auto">Built with security in mind, keeping your code and data safe at all times.</p>
              </dd>
            </div>
            <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200">
              <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7 text-gray-900">
                <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                </svg>
                Real-time Sync
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-sm sm:text-base leading-6 text-gray-600">
                <p className="flex-auto">Changes in your file system are instantly reflected in the interface.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features; 