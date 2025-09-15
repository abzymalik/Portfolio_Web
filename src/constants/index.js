const navLinks = [
  { name: "About", link: "#about me" },
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
    title: "Clean Code",
    desc: "Writing scalable, well-structured, and maintainable code with a focus on clarity and long-term usability."
    
  },
  {
    imgPath: "/images/chat.png",
    title: "Continuous Learning",
    desc: "Adapting to new technologies, frameworks, and best practices to stay ahead in modern software development."
  },
  {
    imgPath: "/images/time.png",
    title: "Impact-Driven",
    desc: "Building projects that solve real-world problems, improve accessibility, and create meaningful digital experiences.."
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
    location: "Ontario, Canada · Remote",
    date: "September 2025 - Present",
    responsibilities: [
      "Achieved a 25% increase in page load speed and higher engagement from 50+ active users, through refactoring 12+ components and optimizing state management, using React.js.",
      "Achieved a 20% reduction in server load and improved system reliability, through removing 150+ redundant API requests, using a Python script integrated with Firebase."
    ]
  },
  {
    logoPath: "/images/logos/surrey_compsoc_logo.png",
    title: "CompSoc Web Developer",
    company: "University of Surrey Computer Science Society",
    location: "Guildford, UK · Hybrid",
    date: "September 2025 - Present",
    uiShots: [
      "/images/logos/compsoc-logo.jpeg",
      "/images/Surrey-CompSoc.jpeg",
      "/images/hostinger-3.png"
    ],
    responsibilities: [
      "Achieved delivery and maintenance of user-facing features for the society website, through collaboration with committee members, using React and JavaScript.",
      "Achieved seamless user experiences, through close collaboration with UI and UX designers, using design-driven development practices."
    ]
  },
  {
    // if your file has a space, either rename to cisco-logo.png or URL-encode:
    logoPath: "/images/logos/cisco logo.png",
    title: "Software Engineer Intern",
    company: "Cisco",
    location: "Reading, UK",
    date: "June 2023 - July 2023",
    responsibilities: [
      "Successfully led a team project to develop a confidence-building application that leveraged AI to help users enhance their interview performance and self-assurance.",
      "Gained valuable exposure to various departments at Cisco, including digital marketing and networking, broadening my understanding of the tech industry’s diverse career pathways."
    ]
  }
];

const projects = [
  {
    title: "Arabic YouTube Transcript Translator",
    desc: "A full-stack web application that automates transcription and translation of Arabic YouTube videos into English. Users can paste a YouTube link, " +
    "select start and end times, and generate accurate, time-stamped transcripts. The pipeline downloads and processes audio, performs Arabic speech recognition, " +
    "translates transcripts into English, and exports results in multiple formats (SRT, Markdown, PDF). Designed to make Arabic video content more accessible, especially for non-Arabic speakers and readers.",
    stack: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "Microsoft Azure Speech SDK (Arabic)", "OpenAI GPT models"],
    image: "/images/projects/ArabicYTtranslator.png",
    live: "",
    repo: "https://github.com/abzymalik/arabic-yt-translator"
  },
  {
    title: "CompSoc Website",
    desc: "Nuxt and Vue platform for events and announcements with CI CD and improved UX for students.",
    stack: ["Nuxt", "Vue", "SCSS"],
    image: "/images/CompSoc Project.png",
    live: "",
    repo: "https://github.com/surreycompsoc"
  },
  {
    title: "Morse Code Decoder",
    desc: "This embedded systems project implements a fully functional Morse Code decoder using a Raspberry Pi Pico and various hardware components" +
    "including a 7-segment display, buzzer, RGB LED, button, and potentiometer. The system interprets Morse inputs and outputs corresponding characters in real time.",
    stack: ["C", "Raspberry Pi"],
    image: "/images/projects/MorseCodeDecoder.png",
    live: "",
    repo: "https://github.com/abzymalik/MorseCode--Decoder"
  },
  {
    title: "Multithreaded OS Scheduler & File Utilities",
    desc: "Coursework project involving two core components: a Java-based simulation of CPU scheduling algorithms using multithreading " +
    "and real-time process state management; and a UNIX-style command-line utility suite implementing commands like `cat`, `wc`, `sort`, and `uniq`, with support for pipelining.",
    stack: ["Java", "Python", "Multithreading", "File I/O", "JUnit", "UNIX"],
    image: "/images/projects/os-scheduler.png",
    live: "",
    repo: "https://github.com/abzymalik/OS"
  }
];

const socialImgs = [
  {
    name: "email",
    imgPath: "/images/logos/email_logo.png",
    link: "mailto:malik.abdul0786@outlook.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Abdul%2C"
  },
  { name: "github", imgPath: "/images/github_logo.png", link: "https://github.com/abzymalik" },
  { name: "linkedin", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/abzimo-malik/" },
  { name: "cv", link: "/cv/AM's_CV.pdf" }
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,  
  navLinks,
  projects
};  