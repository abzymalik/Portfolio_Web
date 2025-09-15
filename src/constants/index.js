
import { Code2, BookOpen, Globe } from "lucide-react";

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" }
];

const words = [
  { text: "software engineer", imgPath: "/images/ideas.svg" },
  { text: "problem solver", imgPath: "/images/concepts.svg" },
  { text: "tech enthusiast", imgPath: "/images/designs.svg" },
  { text: "computer science student", imgPath: "/images/code.svg" }
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

// abilities now use Lucide icons
const abilities = [
  {
    Icon: Code2,
    title: "Clean Code",
    color: "text-yellow-400",
    desc:
      "Writing scalable, well structured, and maintainable code with a focus on clarity and long term usability."
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    color: "text-green-400",
    desc:
      "Adapting to new technologies, frameworks, and best practices to stay ahead in modern software development."
  },
  {
    Icon: Globe,
    title: "Impact Driven",
    color: "text-pink-400",
    desc:
      "Building projects that solve real world problems, improve accessibility, and create meaningful digital experiences."
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
      "Achieved a 25% increase in page load speed and higher engagement from 50+ active users through refactoring 12+ components and optimizing state management with React.",
      "Reduced server load by 20% by eliminating 150+ redundant API requests using a Python script integrated with Firebase."
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
      "Delivered and maintained user facing features for the society website through collaboration with committee members using React and JavaScript.",
      "Improved UX by working closely with designers and applying design driven development practices."
    ]
  },
  {
    // better to rename the file to cisco-logo.png or URL encode the space
    logoPath: "/images/logos/cisco%20logo.png",
    title: "Software Engineer Intern",
    company: "Cisco",
    location: "Reading, UK",
    date: "June 2023 - July 2023",
    responsibilities: [
      "Led a team project to build an AI powered confidence coaching app for interview preparation.",
      "Gained exposure to multiple departments including digital marketing and networking."
    ]
  }
];

const projects = [
  {
    title: "Arabic YouTube Transcript Translator",
    desc:
      "Full stack app that automates transcription and translation of Arabic YouTube videos into English. Paste a link, set start and end times, and generate accurate time stamped transcripts. Pipeline downloads audio, performs Arabic speech recognition, translates to English, and exports SRT, Markdown, and PDF.",
    stack: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Azure Speech SDK (Arabic)",
      "OpenAI GPT",
    ],
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
    desc:
      "Embedded systems project using a Raspberry Pi Pico with a seven segment display, buzzer, RGB LED, button, and potentiometer. Decodes Morse input and outputs characters in real time.",
    stack: ["C", "Raspberry Pi"],
    image: "/images/projects/MorseCodeDecoder.png",
    live: "",
    repo: "https://github.com/abzymalik/MorseCode--Decoder"
  },
  {
    title: "Multithreaded OS Scheduler and File Utilities",
    desc:
      "Coursework with a Java simulation of CPU scheduling algorithms using multithreading and real time process state management, plus a UNIX style utility suite implementing cat, wc, sort, and uniq with pipelines.",
    stack: ["Java", "Python", "Multithreading", "File I O", "JUnit", "UNIX"],
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