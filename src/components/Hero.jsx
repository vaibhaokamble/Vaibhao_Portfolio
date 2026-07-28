import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { skills } from '../data/portfolioData';

const typingWords = skills.map((skill) => skill.name);

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = typingWords[wordIndex] || '';
  const displayText = currentWord.slice(0, charIndex);

  useEffect(() => {
    if (!currentWord) return;

    let timer;

    if (isPaused) {
      timer = setTimeout(() => setIsPaused(false), 900);
      return () => clearTimeout(timer);
    }

    const speed = isDeleting ? 45 : 95;
    timer = setTimeout(() => {
      if (!isDeleting) {
        const next = charIndex + 1;
        setCharIndex(next);

        if (next >= currentWord.length) {
          setIsPaused(true);
          setIsDeleting(true);
        }
      } else {
        const next = Math.max(charIndex - 1, 0);
        setCharIndex(next);

        if (next === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, currentWord, isDeleting, isPaused]);

  return (
    <section id="home" className="relative overflow-hidden bg-mesh pb-20 pt-28 section-padding sm:pt-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.26em] text-brand/85">Welcome to my portfolio</p>
          <h1 className="interactive-text font-heading text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="interactive-text mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">{profile.role}</p>
          <p className="interactive-text mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">{profile.subtitle}</p>

          <div className="mt-5 h-8 text-lg font-medium text-brand sm:text-xl">
            <span className="text-slate-200">Typing Skills:</span> {displayText}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-brand align-middle" />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.03] hover:bg-teal-300"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-brand hover:text-brand"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="glass-card relative rounded-3xl p-6 shadow-glow"
        >
          <div className="rounded-2xl border border-white/10 bg-surface/80 p-6">
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0.2 }}
              transition={{ type: 'spring', stiffness: 180, damping: 16 }}
              className="mx-auto mb-6 w-full max-w-[260px]"
            >
              <div className="relative rounded-3xl border border-brand/40 bg-gradient-to-b from-brand/10 to-accent/10 p-2">
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} profile`}
                  className="h-[260px] w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>

            <p className="text-sm uppercase tracking-[0.2em] text-brand">Core Focus</p>
            <h3 className="interactive-text mt-3 font-heading text-2xl font-bold">Scalable API-Driven Products</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li className="interactive-text">- Spring Boot Microservices</li>
              <li className="interactive-text">- JWT Authentication & Security</li>
              <li className="interactive-text">- MySQL Schema Design</li>
              <li className="interactive-text">- React + REST Integration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
