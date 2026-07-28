import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const initialState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-20 section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something impactful"
          subtitle="Send a message and I will get back to you soon."
        />

        <form onSubmit={handleSubmit} className="glass-card max-w-3xl rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none focus:border-brand"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none focus:border-brand"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none focus:border-brand"
            />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-5 rounded-lg bg-brand px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-sm text-brand">
              Message submitted successfully. Connect this form to your backend or email service.
            </p>
          )}
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
