import { useEffect, useMemo, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { profile } from '../data/portfolioData';

const GithubStats = () => {
  const [stats, setStats] = useState({ repos: 0, followers: 0, stars: 0 });
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`),
          fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=100`)
        ]);

        const user = await userRes.json();
        const repos = await repoRes.json();

        const stars = Array.isArray(repos)
          ? repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
          : 0;

        const languageMap = Array.isArray(repos)
          ? repos.reduce((acc, repo) => {
              if (!repo.language) return acc;
              acc[repo.language] = (acc[repo.language] || 0) + 1;
              return acc;
            }, {})
          : {};

        const topLanguages = Object.entries(languageMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);

        setStats({
          repos: user.public_repos || 0,
          followers: user.followers || 0,
          stars
        });
        setLanguages(topLanguages);
      } catch (error) {
        setLanguages([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const cards = useMemo(
    () => [
      { label: 'Public Repositories', value: stats.repos },
      { label: 'Followers', value: stats.followers },
      { label: 'Total Stars', value: stats.stars }
    ],
    [stats]
  );

  return (
    <AnimatedSection id="github" className="py-20 section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="GitHub"
          title="GitHub activity overview"
          subtitle="Data fetched from GitHub public API to display profile statistics and top languages."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label} className="glass-card rounded-xl p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
              <p className="mt-2 font-heading text-3xl font-bold text-brand">
                {loading ? '...' : card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 glass-card rounded-xl p-5">
          <h3 className="font-heading text-xl font-semibold text-white">Top Languages</h3>
          {loading ? (
            <p className="mt-3 text-slate-400">Loading languages...</p>
          ) : languages.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map(([language, count]) => (
                <span key={language} className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm text-brand">
                  {language}: {count} repos
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-slate-400">No language data available for the configured username.</p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GithubStats;
