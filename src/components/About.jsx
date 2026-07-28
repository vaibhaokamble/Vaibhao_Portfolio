import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { profile } from '../data/portfolioData';

const About = () => (
  <AnimatedSection id="about" className="py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="About"
        title="Building robust backend architecture for real-world products"
        subtitle="Focused on Java and API-first development with practical enterprise workflows."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-6">
          <p className="interactive-text leading-relaxed text-slate-300">{profile.summary}</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="interactive-text font-heading text-xl font-semibold text-white">Professional Snapshot</h3>
          <p className="interactive-text mt-4 text-slate-300">
            Currently contributing at Koderz Technology as a Java Full Stack Developer, delivering
            backend systems, REST APIs, and reliable service integrations. Hands-on with Spring Boot,
            secure authentication, and backend performance optimization.
          </p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default About;
