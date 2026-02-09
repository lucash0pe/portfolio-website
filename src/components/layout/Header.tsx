import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { aboutMe } from '@/data/about-me';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/', external: false },
  {
    name: 'Web3 Security Portfolio',
    items: [
      { name: 'Damn Vulnerable DeFi', path: '/damn-vulnerable-defi', external: false },
      { name: 'CodeHawks First Flights', path: '/codehawks-first-flights', external: false },
    ],
  },
  { name: 'Contact', path: '/contact', external: false },
];

/**
 * Main header component with scroll-aware styling
 * Transparent on hero section, solid when scrolled
 * Mobile responsive with hamburger menu
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Track effective dark mode by observing the <html> class (next-themes toggles this).
  const [effectiveDark, setEffectiveDark] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setEffectiveDark(document.documentElement.classList.contains('dark'));
    check();
    const mo = new MutationObserver(() => check());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);
  const isDark = mounted && (theme === 'dark' || effectiveDark);
  const solidTextClass = 'text-foreground hover:text-foreground/80';



  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'text-lg font-light tracking-widest transition-all duration-300',
              solidTextClass
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {aboutMe.name.toUpperCase()}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Group with sub-items */}
                {link.items ? (
                  <div className="relative group">
                    <button
                      className={cn(
                        "relative inline-flex items-center gap-2 text-lg leading-7 font-light tracking-wide transition-colors duration-300",
                        solidTextClass
                      )}
                      aria-haspopup="true"
                      aria-expanded={false}
                    >
                      {link.name}
                      <ChevronDown className="size-4 opacity-80" />
                    </button>

                    <div className={cn(
                      'absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-border bg-card p-2 shadow-2xl backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transform-gpu transition-all'
                    )}>
                      {link.items.map((item) => (
                        item.external ? (
                          <a
                            key={item.path}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                              className="block px-3 py-2 text-sm text-foreground hover:bg-muted/40 rounded-md transition-colors"

                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-muted/40 rounded-md transition-colors"

                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                      {/* subtle divider and footer area could be added here later */}
                    </div>
                  </div>
                ) : (
                    <Link
                    to={link.path}
                    className={cn(
                      "relative text-lg leading-7 font-light tracking-wide transition-colors duration-300",
                      solidTextClass
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                        <motion.div
                        layoutId="activeNav"
                        className={cn(
                            "absolute -bottom-1 left-0 right-0 h-px",
                            'bg-slate-900 dark:bg-white'
                          )}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-9',
                    ''
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    link.items ? (
                        <div key={link.name} className="space-y-2">
                        <div className="text-lg font-medium text-slate-900 dark:text-white">{link.name}</div>
                        <div className="pl-4 flex flex-col gap-2">
                          {link.items.map((item) => (
                                item.external ? (
                              <a
                                key={item.path}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base leading-7 font-light tracking-wide text-slate-900 dark:text-white hover:text-foreground/80"
                              >
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base leading-7 font-light tracking-wide text-slate-900 dark:text-white hover:text-foreground/80"
                              >
                                {item.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ) : (
                      link.external ? (
                        <a
                            key={link.path}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg leading-7 font-light tracking-wide text-slate-900 dark:text-white hover:text-foreground/80"
                          >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg leading-7 font-light tracking-wide text-slate-900 dark:text-white hover:text-foreground/80"
                        >
                          {link.name}
                        </Link>
                      )
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
