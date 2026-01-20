import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import {FirstFlightCard} from '@/components/first-flights/FirstFlightCard';
import { useState, useMemo } from 'react';
import { FIRST_FLIGHT_CONTESTS } from '@/data/first-flights';



type SortOrder = 'newest' | 'oldest';

function LiveContestsSection() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const sorted = useMemo(() => {
    const copy = [...FIRST_FLIGHT_CONTESTS];
    copy.sort((a, b) => {
      return sortOrder === 'newest' ? b.number - a.number : a.number - b.number;
    });
    return copy;
  }, [sortOrder]);

  return (
    <section className="space-y-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-light tracking-wide">My Live Contests</h2>

        {/* Newest/Oldest Toggle */}
        <div className="inline-flex rounded-xl border border-border bg-background/40 p-1">
          <button
            type="button"
            onClick={() => setSortOrder('newest')}
            className={[
              'px-3 py-1.5 text-sm font-light tracking-wide rounded-lg transition',
              sortOrder === 'newest'
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            ].join(' ')}
          >
            Newest
          </button>

          <button
            type="button"
            onClick={() => setSortOrder('oldest')}
            className={[
              'px-3 py-1.5 text-sm font-light tracking-wide rounded-lg transition',
              sortOrder === 'oldest'
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            ].join(' ')}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {sorted.map((c) => (
          <FirstFlightCard key={c.number} {...c} />
        ))}
      </div>
    </section>
  );
}

export default function CodeHawksFirstFlights() {
  const [active, setActive] = useState<'competitions' | 'resources'>('competitions');

  return (
    <>
      <SEOHead
        title="CodeHawks First Flights"
        description="The CodeHawks First Flights that I have participated in, showcasing my skills in smart contract security."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="pt-18 pb-12 px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
                CodeHawks First Flights
              </h1>
              <img
                src="/logos/codehawks.png"   // put the file in public/logos/...
                alt="CodeHawks"
                className="h-14 md:h-16 lg:h-18 w-auto object-contain"
              />
            </div>

          {/* ✅ Clickable headers (tabs) */}
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md border border-border bg-background/60 p-1">
                  <button
                    type="button"
                    onClick={() => setActive('competitions')}
                    className={[
                      'px-5 py-2 text-sm md:text-base font-light tracking-wide rounded-sm transition',
                      active === 'competitions'
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground',
                    ].join(' ')}
                    aria-pressed={active === 'competitions'}
                  >
                    Live Contests
                  </button>

                  {/* <button
                    type="button"
                    onClick={() => setActive('resources')}
                    className={[
                      'px-5 py-2 text-sm md:text-base font-light tracking-wide rounded-sm transition',
                      active === 'resources'
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground',
                    ].join(' ')}
                    aria-pressed={active === 'resources'}
                  >
                    Learning Resources
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ✅ Content that changes underneath based on tab */}
        <section className="pt-8 md:pt-10 md:pb-12 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {active === 'competitions' ? (
              <LiveContestsSection />
            )
            
            
            
            
            
            
            
            
            : (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Learning Resources</h2>
                <p className="text-muted-foreground">
                  Show your resources content here (links, steps, guides, etc).
                </p>
                {/* ...alternate content */}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}