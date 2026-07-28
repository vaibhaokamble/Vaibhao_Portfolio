import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData';

const Education = () => (
  <AnimatedSection id="education" className="bg-surface/40 py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Education" title="Academic foundation" />
      <div className="glass-card max-w-3xl rounded-2xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-white">{education.degree}</h3>
        <p className="mt-2 text-slate-300">{education.institute}</p>
        <p className="text-slate-400">{education.university}</p>
      </div>
    </div>
  </AnimatedSection>
);

export default Education;
