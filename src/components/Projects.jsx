import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <AnimatedSection id="projects" className="bg-surface/40 py-20 section-padding">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work and practical implementations"
        subtitle="Each project combines backend engineering with clean API-driven interfaces."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
