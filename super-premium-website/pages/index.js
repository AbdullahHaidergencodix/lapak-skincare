import Head from "next/head";
import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   ABDULLAH HAIDER — Co-Founder & CEO, Gencodix
   Super-Premium Personal Website
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Intersection Observer Hook ──────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Navbar ──────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl font-display font-bold gold-text tracking-tight">
            AH
          </span>
          <span className="hidden sm:inline text-xs font-mono text-white/30 tracking-[0.25em] uppercase mt-1">
            Gencodix
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Philosophy", "Solutions", "Process", "Proof", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-body font-medium text-white/40 tracking-[0.2em] uppercase hover:text-gold-300 transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="cta-button px-6 py-2.5 rounded text-xs tracking-[0.15em]"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="radial-glow top-1/4 left-1/4 animate-subtle-float" />
      <div className="radial-glow bottom-1/4 right-1/4 animate-subtle-float" style={{ animationDelay: "3s" }} />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in opacity-0">
          <span className="inline-block font-mono text-[11px] text-gold-300/60 tracking-[0.4em] uppercase mb-8">
            Abdullah Haider &mdash; Co-Founder &amp; CEO, Gencodix
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-delay opacity-0 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          <span className="text-white">We Don&rsquo;t Solve</span>
          <br />
          <span className="gold-text">Easy Problems.</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-in-delay-2 opacity-0 max-w-2xl mx-auto text-base sm:text-lg text-white/40 font-light leading-relaxed mb-12">
          I architect digital ecosystems that turn complexity into competitive
          advantage. If your challenge is ordinary, we&rsquo;re not the right fit.
          If it&rsquo;s the kind that keeps your board awake &mdash; let&rsquo;s talk.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-delay-3 opacity-0 flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#contact"
            className="cta-button px-10 py-4 rounded-sm text-sm tracking-[0.15em]"
          >
            Apply to Work Together
          </a>
          <a
            href="#philosophy"
            className="ghost-button px-10 py-4 rounded-sm text-sm tracking-[0.15em]"
          >
            See the Approach
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-delay-3 opacity-0">
        <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-300/40 to-transparent" />
      </div>
    </section>
  );
}

// ── Philosophy ──────────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-44">
      <div className="section-divider max-w-7xl mx-auto mb-32" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div className="reveal">
          <span className="font-mono text-[11px] text-gold-300/50 tracking-[0.4em] uppercase block mb-6">
            001 &mdash; Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Every Problem Has<br />
            <span className="gold-text">an Elegant Exit.</span>
          </h2>
          <p className="text-white/35 text-base leading-relaxed mb-6">
            Most agencies deliver websites. We deliver strategic advantages
            disguised as digital experiences. At Gencodix, the solution is never
            a template &mdash; it&rsquo;s an architecture built around the exact
            pressure points of your business.
          </p>
          <p className="text-white/35 text-base leading-relaxed">
            I founded Gencodix on a single conviction: technology should dissolve
            problems, not decorate them. Every engagement begins with understanding
            the forces your business is fighting &mdash; and ends with those forces
            working in your favor.
          </p>
        </div>

        {/* Right — Portrait Card */}
        <div className="reveal flex justify-center">
          <div className="relative group">
            {/* Gold border frame */}
            <div className="absolute -inset-3 border border-gold-300/10 rounded-sm group-hover:border-gold-300/25 transition-all duration-700" />
            <div className="absolute -inset-6 border border-gold-300/5 rounded-sm" />

            <div className="relative w-72 sm:w-80 h-96 sm:h-[440px] bg-dark-700 rounded-sm overflow-hidden">
              {/* Replace /profile.jpg with your actual photo in /public */}
              <img
                src="/profile.jpg"
                alt="Abdullah Haider"
                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.querySelector(".fallback").style.display = "flex";
                }}
              />
              <div
                className="fallback absolute inset-0 hidden items-center justify-center"
              >
                <span className="font-display text-7xl gold-text font-bold">AH</span>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-lg text-white font-semibold">
                  Abdullah Haider
                </p>
                <p className="font-mono text-[10px] text-gold-300/50 tracking-[0.3em] uppercase mt-1">
                  Co-Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solutions ───────────────────────────────────────────────────────────
function Solutions() {
  const services = [
    {
      num: "01",
      title: "Web Strategy & Architecture",
      desc: "We don\u2019t build websites. We engineer conversion ecosystems \u2014 every pixel mapped to a business objective, every interaction designed to compound value over time.",
    },
    {
      num: "02",
      title: "Brand System Design",
      desc: "Identity systems that command authority on sight. We build brands that make your competition look like they\u2019re still figuring things out.",
    },
    {
      num: "03",
      title: "Custom Software & AI Solutions",
      desc: "When off-the-shelf fails, we build from first principles. Intelligent systems, automation architectures, and software that becomes your unfair advantage.",
    },
    {
      num: "04",
      title: "Growth & Performance Engineering",
      desc: "We reverse-engineer your revenue model and build the technical and strategic infrastructure to scale it \u2014 predictably, relentlessly, profitably.",
    },
  ];

  return (
    <section id="solutions" className="relative py-32 md:py-44">
      <div className="section-divider max-w-7xl mx-auto mb-32" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-20">
          <span className="font-mono text-[11px] text-gold-300/50 tracking-[0.4em] uppercase block mb-6">
            002 &mdash; Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            High-Value Problems.<br />
            <span className="gold-text">Higher-Value Solutions.</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/35 text-base leading-relaxed">
            We take on a limited number of engagements per quarter. Each one
            receives the full force of our strategic and technical depth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="reveal glass glass-hover rounded-sm p-8 md:p-10 group cursor-default transition-all duration-500"
            >
              <span className="font-mono text-gold-300/30 text-sm tracking-widest block mb-4 group-hover:text-gold-300/60 transition-colors">
                {s.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-white font-semibold mb-4 group-hover:text-gold-200 transition-colors">
                {s.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ─────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      num: "I",
      title: "Application & Discovery",
      desc: "You apply. We evaluate fit. If aligned, we conduct a deep strategic audit \u2014 understanding your market, your pressure points, and the real problem beneath the surface.",
    },
    {
      num: "II",
      title: "Strategy & Architecture",
      desc: "We map the solution before we touch a single line of code. Business logic, user psychology, technical infrastructure \u2014 everything is designed with surgical intent.",
    },
    {
      num: "III",
      title: "Build & Refine",
      desc: "Execution at the highest level. Our team builds in focused sprints with continuous refinement, ensuring every detail meets the standard your brand demands.",
    },
    {
      num: "IV",
      title: "Launch & Compound",
      desc: "We don\u2019t just launch and leave. We optimize, measure, and iterate \u2014 ensuring your investment compounds in value long after go-live.",
    },
  ];

  return (
    <section id="process" className="relative py-32 md:py-44">
      <div className="section-divider max-w-7xl mx-auto mb-32" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-20">
          <span className="font-mono text-[11px] text-gold-300/50 tracking-[0.4em] uppercase block mb-6">
            003 &mdash; Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Precision Over<br />
            <span className="gold-text">Haste.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-300/20 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 last:mb-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <span className="font-display text-5xl font-bold gold-text opacity-20 block mb-3">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl text-white font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full border border-gold-300/40 bg-dark-900 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-300" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Proof / Trust ───────────────────────────────────────────────────────
function Proof() {
  const stats = [
    { value: "40+", label: "Engagements Delivered" },
    { value: "96%", label: "Client Retention Rate" },
    { value: "3.2\u00d7", label: "Avg. ROI Increase" },
    { value: "<12", label: "Clients Per Year" },
  ];

  const testimonials = [
    {
      quote:
        "Gencodix didn\u2019t just build us a website \u2014 they rebuilt how we think about our entire digital presence. The ROI has been extraordinary.",
      author: "CEO, Series B SaaS Company",
    },
    {
      quote:
        "Abdullah sees what others miss. His team turned a failing product launch into our highest-performing quarter in five years.",
      author: "Founder, D2C Brand",
    },
  ];

  return (
    <section id="proof" className="relative py-32 md:py-44">
      <div className="section-divider max-w-7xl mx-auto mb-32" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-20">
          <span className="font-mono text-[11px] text-gold-300/50 tracking-[0.4em] uppercase block mb-6">
            004 &mdash; Proof
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Results Speak.<br />
            <span className="gold-text">We Don&rsquo;t Have To.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-sm p-8 text-center group hover:border-gold-300/20 transition-all duration-500"
            >
              <span className="font-display text-4xl md:text-5xl font-bold gold-text block mb-2">
                {s.value}
              </span>
              <span className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal glass rounded-sm p-10 relative"
            >
              <span className="font-display text-6xl gold-text opacity-10 absolute top-4 left-6">
                &ldquo;
              </span>
              <p className="text-white/50 text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>
              <p className="font-mono text-[10px] text-gold-300/40 tracking-[0.2em] uppercase">
                &mdash; {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Strip Placeholder */}
        <div className="reveal mt-20 text-center">
          <p className="font-mono text-[10px] text-white/15 tracking-[0.3em] uppercase mb-8">
            Trusted by forward-thinking brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-20">
            {["Brand", "Brand", "Brand", "Brand", "Brand"].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl text-white/40 font-bold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA / Contact ───────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="section-divider max-w-7xl mx-auto mb-32" />
      <div className="radial-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div className="reveal">
          <span className="font-mono text-[11px] text-gold-300/50 tracking-[0.4em] uppercase block mb-6">
            005 &mdash; Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            This Isn&rsquo;t for<br />
            <span className="gold-text">Everyone.</span>
          </h2>
          <p className="text-white/35 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            We work with a deliberately small number of clients each year.
            If you&rsquo;re building something that matters &mdash; something complex,
            ambitious, and worth doing right &mdash; apply below. We&rsquo;ll be
            in touch within 48 hours.
          </p>

          <a
            href="https://www.gencodix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block px-14 py-5 rounded-sm text-sm tracking-[0.2em] mb-8"
          >
            Apply to Work Together
          </a>

          <p className="font-mono text-[10px] text-white/15 tracking-[0.2em] uppercase">
            Average response time: 48 hours
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-bold gold-text">AH</span>
          <span className="text-white/15 text-xs">|</span>
          <span className="font-mono text-[10px] text-white/20 tracking-[0.2em] uppercase">
            Gencodix
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.gencodix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase hover:text-gold-300/60 transition-colors"
          >
            Gencodix.com
          </a>
        </div>

        <p className="font-mono text-[10px] text-white/10 tracking-[0.15em]">
          &copy; {new Date().getFullYear()} Abdullah Haider. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ── Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Head>
        <title>Abdullah Haider | Co-Founder &amp; CEO, Gencodix</title>
        <meta
          name="description"
          content="We don't solve easy problems. Abdullah Haider and Gencodix architect digital ecosystems that turn complexity into competitive advantage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="noise-overlay">
        <Navbar />
        <Hero />
        <Philosophy />
        <Solutions />
        <Process />
        <Proof />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
