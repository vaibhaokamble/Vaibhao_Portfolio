const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand/80">{eyebrow}</p>
    <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base text-slate-300">{subtitle}</p>}
  </div>
);

export default SectionTitle;
