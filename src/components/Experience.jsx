import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { experiences } from '../data/portfolioData';

const Experience = () => (
  <AnimatedSection id="experience" className="py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Experience"
        title="Professional journey in Java full stack development"
      />

      <div className="relative space-y-6 border-l border-white/15 pl-6">
        {experiences.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="glass-card relative rounded-2xl p-5"
          >
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-brand" />
            <p className="text-sm text-brand">{item.duration}</p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-slate-300">{item.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {item.responsibilities.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;
