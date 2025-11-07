import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // animate each card as it enters the viewport
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // animate the timeline line scale on scroll
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    // fade and slide in the text blocks
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                {/* Timeline + text only */}
                <div className="xl:w-full">
                  <div className="flex items-start relative">
                    {/* Purple timeline line on far left */}
                    <div className="absolute left-0 top-0 bottom-0">
                      <div className="timeline w-[2px] h-full bg-gradient-to-b from-[#8b5cf6] via-[#a78bfa] to-[#ec4899]" />
                    </div>

                    {/* Content shifted to the right */}
                    <div className="expText pl-6 flex xl:gap-20 md:gap-10 gap-5 relative z-20 w-full">
                      <div className="timeline-logo shrink-0">
                        <img
                          src={card.logoPath}
                          alt={`${card.company} logo`}
                          className="h-16 w-16 object-contain rounded-full"
                        />
                      </div>

                      <div className="w-full">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>

                        {/* Company + Location on the SAME row */}
                        <div className="mt-1 flex items-center gap-4 w-full">
                          {/* left grows to push location right */}
                          <p className="text-gray-300 text-sm italic flex-1">
                            {card.company}
                          </p>
                          {/* keep location on one line & right aligned */}
                          <p className="text-gray-400 text-sm whitespace-nowrap text-right">
                            {card.location}
                          </p>
                        </div>

                        <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>

                        <p className="text-[#839CB5] italic">Responsibilities & Achievments: </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;