import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { services } from '../data/portfolioData';

const Services = () => (
  <AnimatedSection id="services" className="bg-surface/40 py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Services" title="How I can contribute" />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="glass-card rounded-xl p-5 transition hover:-translate-y-1">
            <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Services;
