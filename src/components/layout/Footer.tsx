import { Github, Linkedin } from 'lucide-react';
import {FaXTwitter} from 'react-icons/fa6';
import { aboutMe } from '@/data/about-me';
import { Separator } from '@/components/ui/separator';

/**
 * Minimal footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {aboutMe.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {aboutMe.socialLinks.linkedin && (
              <a
                href={aboutMe.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
            {aboutMe.socialLinks.x && (
              <a
                href={aboutMe.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X"
              >
                <FaXTwitter className="size-5" />
              </a>
            )}
            {aboutMe.socialLinks.github && (
              <a
                href={aboutMe.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
