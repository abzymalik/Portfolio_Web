// src/sections/Hero.jsx
import { useRef, useEffect, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

/* ------------------------- ScrambleWord component ------------------------- */
/* Scrambles characters, then resolves to the target text on every change.   */
const ScrambleWord = ({ text, className, duration = 20000 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const CHARS = "!<>-_\\/[]{}—=+*^?#$%&@";
    const el = ref.current;
    const from = el.textContent || "";
    const to = text;
    const maxLen = Math.max(from.length, to.length);
    const start = performance.now();

    // Prebuild a schedule for each character
    const schedule = Array.from({ length: maxLen }).map((_, i) => {
      const fromChar = from[i] || "";
      const toChar = to[i] || "";
      const startAt = Math.floor(Math.random() * 300); // when scrambling starts for this index
      const endAt = startAt + Math.floor(600 + Math.random() * 400); // when it resolves
      return { fromChar, toChar, startAt, endAt, char: fromChar };
    });

    let rafId;
    const tick = (t) => {
      const elapsed = t - start;
      let output = "";
      let done = 0;

      for (let i = 0; i < schedule.length; i++) {
        const s = schedule[i];
        if (elapsed < s.startAt) {
          output += s.fromChar;
        } else if (elapsed >= s.endAt) {
          output += s.toChar;
          done++;
        } else {
          // still scrambling
          output += CHARS[(Math.random() * CHARS.length) | 0];
        }
      }

      el.textContent = output;

      if (done === schedule.length || elapsed >= duration) {
        el.textContent = to; // ensure final
        cancelAnimationFrame(rafId);
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [text, duration]);

  return <span ref={ref} className={className} />;
};
/* ------------------------------------------------------------------------- */

const ROTATE_MS = 3000; // how long before moving to the next phrase

const Hero = () => {
  const heroRef = useRef(null);
  const [idx, setIdx] = useState(0);

  // rotate through the words array
  const labels = useMemo(() => words.map((w) => w.text), []);
  const current = labels[idx] || "software engineer";

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % labels.length),
      ROTATE_MS
    );
    return () => clearInterval(timer);
  }, [labels.length]);

  // subtle entrance for headline, sub, and CTA
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-line", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from(".hero-sub", { y: 12, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-cta", { y: 12, opacity: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: heroRef }
  );

  // robust smooth scroll accounting for a fixed navbar
  const onSeeMyWork = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (!target) return;
    const OFFSET = 96; // adjust if your navbar is taller/shorter
    const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", "#projects");
  };

  return (
    <section id="hero" ref={heroRef} className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* isolate so z-index behaves predictably */}
        <div className="grid items-center gap-10 md:grid-cols-2 relative [isolation:isolate]">
          {/* left: headline + sub + CTA */}
          <div className="relative z-20">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1]">
            <span className="hero-line block">I am Abdul,</span>
            <span className="hero-line block">
              a{" "}
                <ScrambleWord
                  text={current}
                  className="capitalize"
                  duration={1200}
                />
              </span>
            </h1>

            <p className="hero-sub mt-6 max-w-2xl text-white/70 text-lg md:text-xl">
              I build practical applications, explore systems and algorithms, and ship projects that create value.
            </p>

            <div className="hero-cta mt-12 relative z-50 pointer-events-auto">
              <a
                href="#projects"
                onClick={onSeeMyWork}
                aria-label="See my work"
                className="group inline-flex items-center justify-center gap-3
                           rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           px-10 py-5 text-lg font-semibold text-white shadow-xl
                           hover:opacity-90 transition
                           focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>See my work</span>
                <ChevronDown className="h-6 w-6 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* right: 3D/canvas animation — never intercept clicks */}
          <div className="relative h-[360px] md:h-[460px] lg:h-[540px]">
            <div className="pointer-events-none absolute inset-0 z-0">
              <HeroExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;