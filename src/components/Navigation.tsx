'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center gap-2">
              <Image
                src="/logo.png"
                alt="Navium Logo"
                width={80}
                height={80}
                className="h-10 w-10"
                priority
              />
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Navium
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/features')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Features
              </Link>
              <Link
                href="/beta"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/beta')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Join Beta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 