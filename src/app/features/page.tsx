import Features from '@/components/Features';
import { Metadata } from 'next';

const additionalFeatures = [
  {
    name: 'Customizable Interface',
    description: 'Tailor Navium to your workflow with customizable themes, layouts, and keyboard shortcuts.',
    details: [
      'Choose from popular developer themes like Dracula, One Dark, and Nord',
      'Customize the layout to prioritize either the terminal or file explorer',
      'Set up your preferred keyboard shortcuts for common actions',
    ],
  },
  {
    name: 'Advanced File Operations',
    description: 'Perform complex file operations with ease using both visual and command-line interfaces.',
    details: [
      'Drag and drop files between directories',
      'Bulk rename files with pattern matching',
      'Quick file search with fuzzy matching',
      'Preview files without opening them',
    ],
  },
  {
    name: 'Developer Tools Integration',
    description: 'Seamlessly integrate with your favorite developer tools and workflows.',
    details: [
      'Git integration for version control',
      'VS Code-style quick file navigation',
      'Terminal multiplexing support',
      'Plugin system for extending functionality',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 to-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Navium Features
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how Navium can transform your development workflow with its powerful features and intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Advanced Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Take your development workflow to the next level
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {additionalFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <ul className="mt-6 list-disc pl-4 space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Features - Navium',
  description: 'Tailor Navium to your workflow with customizable themes, layouts, and keyboard shortcuts.',
}; 