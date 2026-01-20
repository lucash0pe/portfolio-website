import { motion } from 'framer-motion';
import { aboutMe} from '@/data/about-me';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import background from '@/assets/particles-background.webp';


export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with web3 background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={background}
            alt="Web3 vibe background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.div
            className="text-center space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {aboutMe.name.toUpperCase()}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light tracking-wide text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {aboutMe.tagline}
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  About Me
                </h2>
            <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
              <p>
                {aboutMe.biography.split('\n\n')[0]}
              </p>
            </div>
                {/* <Link
                  to="/codehawks-first-flights"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About My Work</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link> */}
              </div>
            </ScrollReveal>
          </div>
        </section>

        

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
