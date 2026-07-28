import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    whileHover={{ y: -8, scale: 1.01 }}
    className="glass-card rounded-2xl p-5"
  >
    <h3 className="interactive-text font-heading text-xl font-semibold text-white">{project.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

    <div className="mt-4 flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200">
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-5 flex gap-3">
      <a
        href={project.github}
        className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white transition hover:border-brand hover:text-brand"
      >
        <FiGithub /> GitHub
      </a>
      <a
        href={project.demo}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
      >
        <FiExternalLink /> Live Demo
      </a>
    </div>
  </motion.article>
);

export default ProjectCard;
