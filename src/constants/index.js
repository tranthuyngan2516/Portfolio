import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  java,
  tailwind,
  git,
  docker,
  kubernetes,
  postgresql,
  // komikult,
  // leaderboard,
  // math,
  // movie,
  // nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

// Import ảnh dự án thật của bạn
import danhoa from "../assets/projects/danhoabridal.jpeg";
import courseWeb from "../assets/projects/Space_E-learning.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv", // Thêm lại link CV nếu bạn muốn giữ nút điều hướng này
    title: "CV / Resume",
  },
];

const services = [
  {
    title: "Freelancer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Cover Hunt",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Kelhel",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Danhoa Bridal",
    description:
      "A real-world e-commerce website for bridal clothing deployed for a client. Built with NuxtJS & Vue.js for SEO optimization and high performance, integrated with Firebase. The site is currently live and stable.",
    tags: [
      {
        name: "nuxtjs",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: danhoa, // Sử dụng biến ảnh đã import ở trên
    source_code_link: "https://github.com/tranthuyngan2516", // Link GitHub của bạn
    demo_link: "https://danhoabridal.com", // Link website thật
  },
  {
    id: "project-2",
    name: "E-Learning Platform",
    description:
      "An online platform for selling and managing programming courses. Allows instructors to upload content and students to track progress. Built with Java Servlet and pure HTML/CSS.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "servlet",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: courseWeb,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: "https://space-e-learning.onrender.com",
  },
];

export { services, technologies, experiences, projects };
