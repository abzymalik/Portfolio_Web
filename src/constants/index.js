const navLinks = [
  { name: "About Me", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" }
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" }
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" }
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high quality results while maintaining attention to every detail."
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity."
  },
  {
    imgPath: "/images/time.png",
    title: "On Time Delivery",
    desc: "Making sure projects are completed on schedule with quality and care."
  }
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" }
];

const techStackIcons = [
  { name: "React Developer", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python Developer", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend Developer", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Interactive Developer", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Project Manager", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] }
];

const expCards = [
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "CompSoc Web Developer",
    date: "September 2025 - Present",
    uiShots: [
      "/images/logos/compsoc-logo.jpeg",
      "/images/Surrey-CompSoc.jpeg",
      "/images/hostinger-3.png"
    ],
    responsibilities: [
      "Developed and maintained user facing features for the society website.",
      "Collaborated closely with UI and UX designers to ensure seamless user experiences.",
      "Optimized web applications for speed and scalability using React and JavaScript."
    ]
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker web applications with focus on scalability.",
      "Worked with backend engineers to integrate APIs with the frontend.",
      "Contributed to open source projects used in the Docker ecosystem."
    ]
  },
  {
    review: "Adrian’s work on Appwrite mobile app brought a high level of quality and efficiency.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross platform mobile apps with React Native using Appwrite services.",
      "Improved app performance and UX through code optimization and testing.",
      "Implemented features based on product feedback in tight sprints."
    ]
  }
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" }
];

/** New projects data */
const projects = [
  {
    title: "CompSoc Website",
    desc: "Nuxt and Vue platform for events and announcements with CI CD and improved UX for students.",
    stack: ["Nuxt", "Vue", "SCSS", "GitHub Actions"],
    image: "/images/projects/compsoc.png",
    live: "",                           // add your link if live
    repo: "https://github.com/surreycompsoc"
  },
  {
    title: "Arabic YouTube Transcript Translator",
    desc: "Distributed pipeline with Celery and Redis to fetch, translate, and export SRT PDF and Markdown.",
    stack: ["Python", "Celery", "Redis", "OAuth"],
    image: "/images/projects/translator.png",
    live: "",
    repo: "https://github.com/abzymalik/arabic-yt-translator"
  },
  {
    title: "OS Scheduler",
    desc: "Java implementation of FCFS Priority and Round Robin scheduling with tests and CLI.",
    stack: ["Java", "JUnit"],
    image: "/images/projects/os-scheduler.png",
    live: "",
    repo: "https://github.com/abzymalik/OS"
  }
];

const testimonials = [
  // keep or remove if you no longer render this section
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects
};