import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/80 py-8 section-padding">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-slate-400">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        <a
          href={profile.socialLinks.linkedin}
          aria-label="LinkedIn"
          className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-brand hover:text-brand"
        >
          <FiLinkedin />
        </a>
        <a
          href={profile.socialLinks.github}
          aria-label="GitHub"
          className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-brand hover:text-brand"
        >
          <FiGithub />
        </a>
        <a
          href={profile.socialLinks.email}
          aria-label="Email"
          className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-brand hover:text-brand"
        >
          <FiMail />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
