import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about me" ref={sectionRef} className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">ABOUT ME</h2>
  
      <p className="text-lg leading-8 opacity-90">
      Hi, I’m a Computer Science BSc student at the University of Surrey, currently preparing for my second year
      and an industrial placement. I’m passionate about software engineering and enjoy exploring the full spectrum of computer science, 
      from building practical applications to understanding the theory that powers them.
      I’ve gained experience working with Java, Python, C, JavaScript, and SQL, and I enjoy applying these skills across a variety of projects.
      Some of my key highlights are showcased below!
      </p>
  
      <p className="text-lg leading-8 opacity-90 mt-4">
      Beyond coursework, I’m actively involved in my university community as a Student Ambassador, Course Representative, and CompSoc 
      committee member, where I collaborate with students and staff to improve the academic and social experience. These roles have 
      strengthened my teamwork, leadership, and communication skills alongside my technical growth.
      </p>

      <p className="text-lg leading-8 opacity-90 mt-4">
      Right now, I’m focused on expanding my knowledge in cloud computing, DevOps, and AI/ML, while also refining my problem-solving skills through hackathons and side projects. I’m motivated by curiosity and the challenge of solving real-world problems with creative technical solutions.
      </p>
    </section>
  );;
};

export default AppShowcase;
