// src/sections/Hero.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const heroRef = useRef(null);

  // Animate only elements inside heroRef
  useGSAP(
    () => {
      const lines = gsap.utils.toArray(".line");
      // set initial state
      gsap.set(lines, { y: 40, opacity: 0, willChange: "transform, opacity", force3D: true });

      // timeline so sequencing is consistent
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(lines, { y: 0, opacity: 1, stagger: 0.15, duration: 0.9 })
        .from(".hero-sub", { y: 12, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-cta", { y: 12, opacity: 0, duration: 0.5 }, "-=0.25");
    },
    { scope: heroRef } // very important
  );

  // robust smooth scroll with fixed-navbar offset
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (!target) return;
    const OFFSET = 96; // tweak if your navbar height differs
    const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", "#projects");
  };

  return (
    <section id="hero" ref={heroRef} className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* isolation keeps z-index sane so CTA is always clickable */}
        <div className="grid items-center gap-10 md:grid-cols-2 relative [isolation:isolate]">
          {/* left side */}
          <div className="hero-text relative z-20">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1]">
              <span className="line block">I am Abdul,</span>
              <span className="line block">Computer Science Student</span>
            </h1>

            <p className="hero-sub mt-6 max-w-2xl text-white/70 text-lg md:text-xl">
              I build practical applications, explore systems and algorithms, and ship projects that create value.
            </p>

            {/* big CTA with inline arrow */}
            <div className="mt-12 hero-cta relative z-50 pointer-events-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
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

          {/* right side */}
          <div className="relative h-[360px] md:h-[460px] lg:h-[540px]">
            {/* ensure the canvas never intercepts clicks */}
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