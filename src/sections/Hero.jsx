// src/sections/Hero.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text .line",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power2.out" }
    );
  }, []);

  const handleSeeMyWork = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 relative">
          {/* left side */}
          <div className="hero-text z-10">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1]">
              <span className="line block">I am Abdul,</span>
              <span className="line block">Computer Science Student</span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/70 text-lg md:text-xl">
              I build practical applications, explore systems and algorithms, and ship projects that create value.
            </p>

            {/* primary CTA only */}
            <div className="mt-8">
              <button
                type="button"
                onClick={handleSeeMyWork}
                className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                See my work
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="relative h-[360px] md:h-[460px] lg:h-[540px]">
            {/* keep pointer events off so canvas never blocks clicks */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <HeroExperience />
            </div>
          </div>

          {/* scroll cue */}
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="absolute left-0 -bottom-2 inline-flex items-center gap-2 rounded-full px-3 py-2 text-white/70 hover:text-white transition"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
            <span className="sr-only">Scroll</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;