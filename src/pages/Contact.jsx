import React, { useId, useState } from "react";
import { useInView } from "react-intersection-observer";

// Fade-in animation wrapper (reusable)
const FadeIn = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// Reusable Input (handles input + textarea + a11y)
const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  rows,
  error,
  touched,
  autoComplete,
}) => {
  const baseId = useId();
  const inputId = `${name}-${baseId}`;
  const errorId = `${name}-error-${baseId}`;
  const isInvalid = Boolean(error && touched);

  const baseClasses =
    "mt-1 w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition";
  const validRing = "border-gray-300 focus:ring-[#8A553F]";
  const invalidRing = "border-red-500 focus:ring-red-500";

  return (
    <label htmlFor={inputId} className="block">
      <span className="text-[#8A553F] font-semibold">{label}</span>
      {type === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          rows={rows || 4}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={isInvalid ? "true" : "false"}
          aria-describedby={isInvalid ? errorId : undefined}
          className={`${baseClasses} ${isInvalid ? invalidRing : validRing}`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={isInvalid ? "true" : "false"}
          aria-describedby={isInvalid ? errorId : undefined}
          className={`${baseClasses} ${isInvalid ? invalidRing : validRing}`}
        />
      )}
      {isInvalid && (
        <span id={errorId} className="text-red-600 text-sm mt-1 block">
          {error}
        </span>
      )}
    </label>
  );
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  // Simple, clear validation rules
  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    else if (data.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!data.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Enter a valid email address.";
    if (!data.message.trim()) e.message = "Please enter a message.";
    else if (data.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate(form);
    setErrors(v);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(v).length) return;

    try {
      setStatus({ loading: true, success: false, error: false });
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "d1978068-1bab-44c2-a9cc-89756855c9a7",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, success: true, error: false });
        setForm({ name: "", email: "", message: "" });
        setTouched({});
        setErrors({});
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section
      className="min-h-screen bg-[#FFE9E2] px-5 sm:px-10 py-10 flex justify-center items-center"
      aria-labelledby="contact-heading"
    >
      <div className="bg-[#FFFAEC] rounded-2xl shadow-md hover:shadow-lg border border-transparent hover:border-[#8A553F] transition p-6 sm:p-10 max-w-3xl w-full">
        <FadeIn>
          <h1 id="contact-heading" className="text-[#8A553F] text-3xl sm:text-4xl font-bold text-center mb-6">
            Contact Us
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-[#5A3E2B] text-lg text-center mb-8">
            Have a question, custom order request, or just want to say hello? Fill out the form
            and I’ll respond as soon as possible. 💌
          </p>
        </FadeIn>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <FadeIn delay={200}>
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your full name"
              autoComplete="name"
              error={errors.name}
              touched={touched.name}
            />
          </FadeIn>

          <FadeIn delay={300}>
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              autoComplete="email"
              error={errors.email}
              touched={touched.email}
            />
          </FadeIn>

          <FadeIn delay={400}>
            <Field
              label="Message"
              name="message"
              type="textarea"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Share a few details about your request…"
              autoComplete="off"
              error={errors.message}
              touched={touched.message}
            />
          </FadeIn>

          <FadeIn delay={500}>
            <button
              type="submit"
              disabled={status.loading}
              aria-busy={status.loading ? "true" : "false"}
              className="w-full bg-[#8A553F] text-white py-3 rounded-xl font-medium transition transform hover:scale-[1.02] hover:bg-[#704431] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.loading ? "Sending…" : "Send Message"}
            </button>
          </FadeIn>

          {/* Live region for status updates */}
          <div aria-live="polite" role="status" className="min-h-[1.5rem]">
            {status.success && (
              <p className="text-green-700 text-center mt-4">
                ✅ Your message has been sent successfully!
              </p>
            )}
            {status.error && (
              <p className="text-red-700 text-center mt-4">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
