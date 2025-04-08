import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BetaSignup from '@/components/BetaSignup';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <BetaSignup variant="home" />
          </div>
        </div>
      </div>
    </main>
  );
}
