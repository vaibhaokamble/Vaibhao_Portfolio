import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData';

const Certifications = () => (
  <AnimatedSection id="certifications" className="py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Certifications" title="Professional certifications" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => (
          <div key={certificate} className="glass-card rounded-xl p-5">
            <div className="mb-4 h-32 rounded-lg border border-dashed border-white/20 bg-slate-900/50" />
            <p className="font-medium text-slate-200">{certificate}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Certifications;
