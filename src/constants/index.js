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
    logoPath: "/images/logos/tidaltasksailogo.png",
    title: "Software Engineer Intern",
    company: "TidalTasks AI",
    location: " Ontario, Canada - Remote",
    date: "September 2025 - Present",
    responsibilities: [
      "Achieved a 25% increase in page load speed and higher engagement from 50+ active users, " + 
      "through refactoring 12+ components and optimizing state management, using React.js.",
      "Achieved a 20% reduction in server load and improved system reliability, through removing 150+ "  +
      "redundant API requests, using a Python script integrated with Firebase."
    ]
  },

  {
    logoPath: "/images/logos/surrey_compsoc_logo.png",
    title: "CompSoc Web Developer",
    company: "University of Surrey Computer Science Society",
    location: "Guildford, UK - Hybrid",
    date: "September 2025 - Present",
    uiShots: [
      "/images/logos/compsoc-logo.jpeg",
      "/images/Surrey-CompSoc.jpeg",
      "/images/hostinger-3.png"
    ],
    responsibilities: [
      "Achieved delivery and maintenance of user-facing features for the society website," +
      "through collaboration with committee members, using React and JavaScript.",
      "Achieved seamless user experiences, through close collaboration with UI and UX designers, " +
      "using design-driven development practices.",
    ]
  },
  {
    logoPath: "public/images/logos/cisco logo.png",
    title: "Software Engineer Intern",
    company: "Cisco",
    location: " Reading, UK",
    date: "June 2023 - July 2023",
    responsibilities: [
      "Successfully led a team project to develop a confidence-building application that leveraged AI " +
      "to help users enhance their interview performance and self-assurance.",
      "Gained valuable exposure to various departments at Cisco, including digital marketing and networking, " +
      "broadening my understanding of the tech industry’s diverse career pathways.",
    ]
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" }
];

/** New projects data */
const projects = [
  {
    title: "Arabic YouTube Transcript Translator",
    desc: "Distributed pipeline with Celery and Redis to fetch, translate, and export SRT PDF and Markdown.",
    stack: ["Python", "Flask", "Celery", "Redis", "OAuth"],
    image: "images/projects/ArabicYTtranslator.png",
    live: "",
    repo: "https://github.com/abzymalik/arabic-yt-translator"
  },
  {
    title: "CompSoc Website",
    desc: "Nuxt and Vue platform for events and announcements with CI CD and improved UX for students.",
    stack: ["Nuxt", "Vue", "SCSS"],
    image: "/images/projects/compsoc.png",
    live: "",                           // add your link if live
    repo: "https://github.com/surreycompsoc"
  },
  {
    title: "Morse Code Decoder",
    desc: "Built a Morse Code Decoder in C for microcontrollers, capable of translating encoded signals into text in real time. Designed with efficient algorithms to ensure accurate decoding and full compliance with project requirements.",
    stack: ["C", "Microcontrollers", "Embedded Systems"],
    image: "public/images/projects/MorseCodeDecoder.png",
    live: "",                           // add your link if live
    repo: "https://github.com/abzymalik/MorseCode--Decoder"
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
  { name: "github", imgPath: "/images/Github.png", link: "https://github.com/abzymalik"},
  { name: "linkedin", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/abzimo-malik/ "}
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