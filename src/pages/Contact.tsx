import { motion } from 'framer-motion';
import { Mail, Linkedin, X, Github, Twitter } from 'lucide-react';
import { aboutMe } from '@/data/about-me';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import {FaXTwitter} from 'react-icons/fa6';

/**
 * Contact page with form and contact information
 * Features validated contact form and availability status
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Reach out. I am open to all opportunities.`}
      />
      
      <div className="min-h-screen">
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Contact
                </h2>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <Mail className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${aboutMe.email}`}
                      className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                    >
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
              </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
               <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Connect
                </h2>
              </div>

              <Separator />

              <div className="space-y-6">
                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <Linkedin className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">
                      LinkedIn
                    </p>
                    <a
                      href={aboutMe.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                    >
                      {aboutMe.socialHandles.linkedin}
                    </a>
                  </div>
                </div>

                {/* X */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <FaXTwitter className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">
                      X
                    </p>
                    <a
                      href={aboutMe.socialLinks.x}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                    >
                      {aboutMe.socialHandles.x}
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <Github className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">
                      GitHub
                    </p>
                    <a
                      href={aboutMe.socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                    >
                      {aboutMe.socialHandles.github}
                    </a>
                  </div>
                </div>
              </div>
              </motion.div>  
          </div>
        </div>
      </section>
        <div className="h-16" />
      </div>
    </>
  );
}
