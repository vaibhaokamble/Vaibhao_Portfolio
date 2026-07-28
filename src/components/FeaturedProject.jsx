import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { featuredProject } from '../data/portfolioData';

const FeaturedProject = () => (
  <AnimatedSection id="featured-project" className="py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Featured"
        title={featuredProject.title}
        subtitle="A highlighted production-style project with secure authentication and scalable user flows."
      />

      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="glass-card grid gap-6 rounded-2xl p-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="interactive-text leading-relaxed text-slate-300">{featuredProject.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredProject.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-brand/35 bg-brand/10 px-3 py-1 text-xs text-brand">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={featuredProject.github}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-brand hover:text-brand"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={featuredProject.demo}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>

        <div className="min-h-56 rounded-xl border border-dashed border-white/20 bg-gradient-to-br from-brand/15 via-transparent to-accent/20 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Project Image Placeholder</p>
          <div className="mt-4 h-40 rounded-lg border border-white/10 bg-slate-950/40" />
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default FeaturedProject;
