import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData';

const Skills = () => (
  <AnimatedSection id="skills" className="bg-surface/40 py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I use to build production-ready systems"
        subtitle="Backend reliability, API quality, and clean integrations are my core priorities."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card rounded-xl p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="interactive-text font-semibold text-white">{skill.name}</h3>
              <span className="text-sm text-brand">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-700/60">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-brand to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;
