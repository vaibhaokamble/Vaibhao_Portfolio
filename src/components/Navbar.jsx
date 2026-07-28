import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, profile } from '../data/portfolioData';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItemClass =
    'interactive-text text-sm font-medium text-slate-200 transition hover:text-brand focus:outline-none focus:text-brand';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        shadow ? 'border-white/10 bg-base/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between section-padding">
        <a href="#home" className="font-heading text-lg font-bold tracking-wide text-white">
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navItemClass}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-surface/95 p-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navItemClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
