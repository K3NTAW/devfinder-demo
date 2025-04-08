import BetaSignup from '@/components/BetaSignup';

export default function BetaPage() {
  return (
    <main>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Join the DevFinder Beta
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Be among the first to experience the future of developer file management. Help us shape DevFinder into the perfect tool for developers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BetaSignup />
    </main>
  );
} 