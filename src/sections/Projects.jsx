import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const TechChip = ({ label }) => (
  <span className="text-xs px-2 py-1 rounded-full border border-white/15 bg-white/5">
    {label}
  </span>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding md:mt-40 mt-20 xl:px-0 px-5"
    >
      <TitleHeader title="Projects" sub="Things I built" />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
          >
            {/* Project thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Project details */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-white/70 mt-2">{p.desc}</p>
              </div>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s, i) => (
                  <TechChip key={`${p.title}-stack-${i}`} label={s} />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg border border-white/15 hover:border-white/30 transition-colors"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg border border-white/15 hover:border-white/30 transition-colors"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;