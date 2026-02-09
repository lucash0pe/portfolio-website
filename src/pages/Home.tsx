import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { aboutMe} from '@/data/about-me';
// ...existing imports
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';
import background from '@/assets/particles-background.webp';


export default function Home() {
  const bioClean = aboutMe.biography.replace(/\s+/g, ' ').trim().replace(/\.+$/, '');
  const bioParts = bioClean.split('. ');
  const bioFirst = bioParts[0] || '';
  const bioSecond = bioParts[1] || '';
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hero follows the global theme (no local toggle). Default to light until mounted.
  const heroLight = mounted ? theme !== 'dark' : true;

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Muted background, concise content (no big name) */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero follows global theme; no local toggle UI */}

        {/* Background Image (muted or brighter when toggled) */}
        <div className="absolute inset-0">
          <img
            src={background}
            alt="Web3 vibe background"
            className={`w-full h-full object-cover ${
              heroLight
                ? 'opacity-10 saturate-50 brightness-105'
                : 'opacity-40 saturate-75 blur-sm'
            }`}
          />
          {/* Theme-aware overlay: darker by default, white/bright when toggled */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              heroLight
                ? 'from-white/95 via-white/90 to-white/85'
                : 'from-black/30 via-black/60 to-black/80'
            }`}
          />
        </div>

        {/* Hero Content - concise, no large name (header already shows name) */}
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            className="max-w-4xl w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            {/* Split biography into two focused lines */}
            <div className="space-y-4">
              <p className={`text-3xl sm:text-2xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto ${
                heroLight ? 'text-slate-900' : 'text-white'
              }`}>
                {bioFirst && `${bioFirst}`}
              </p>

              <p className={`text-base sm:text-xl md:text-2xl max-w-2xl mx-auto ${
                heroLight ? 'text-slate-700' : 'text-white/85'
              }`}>
                {bioSecond && `${bioSecond}`}
              </p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <a
                  href="https://lucash0pe.github.io/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:opacity-95 transition bg-white text-slate-900 ${
                    heroLight ? 'border border-slate-900' : ''
                  }`}
                  aria-label="Open resume PDF"
                >
                  Resume
                </a>

              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <ScrollIndicator />
          </motion.div> */}
        </div>
      </section>

        {/* Web3 Security Portfolio Section */}
        {/* <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
                Web3 Security Portfolio
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <Link
                  to="/damn-vulnerable-defi"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
                >
                  Damn Vulnerable DeFi
                </Link>

                <Link
                  to="/codehawks-first-flights"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
                >
                  CodeHawks First Flights
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        

           {/* 
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/damn-vulnerable-defi"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
         
          </ScrollReveal>
             */ }
        
      </div>
    </>
  );
}
