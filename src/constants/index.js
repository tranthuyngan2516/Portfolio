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
  postgresql,
  nodejs,
  danhoa,
  courseWeb,
  pulseops,
  revenue,
  recruitment,
} from "../assets";

export const navLinks = [
  { id: "about", en: "About", vi: "Giới thiệu" },
  { id: "projects", en: "Projects", vi: "Dự án" },
  { id: "contact", en: "Contact", vi: "Liên hệ" },
  { id: "cv", en: "CV / Resume", vi: "CV / Hồ sơ" },
];

const services = [
  {
    en: "Java Backend Developer",
    vi: "Lập trình viên Java Backend",
    icon: backend,
  },
  {
    en: "Frontend Developer (Vue/Nuxt)",
    vi: "Lập trình viên Frontend (Vue/Nuxt)",
    icon: frontend,
  },
  {
    en: "Database Management",
    vi: "Quản trị Cơ sở dữ liệu",
    icon: prototyping,
  },
  {
    en: "AI Integration & Monitoring",
    vi: "Tích hợp AI & Giám sát hệ thống",
    icon: ux,
  },
];

const technologies = [
  { name: "Java", icon: java },
  { name: "Node.js", icon: nodejs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    en: {
      title: "Freelance Software Developer",
      company_name: "Self-employed / Client Projects",
    },
    vi: {
      title: "Lập trình viên Freelance",
      company_name: "Tự doanh / Dự án Khách hàng",
    },
    icon: backend,
    iconBg: "#333333",
    date: { en: "Late 2023 - Present", vi: "Cuối 2023 - Hiện tại" },
  },
  {
    en: {
      title: "Full Stack Developer",
      company_name: "Personal & Open Source Projects",
    },
    vi: {
      title: "Lập trình viên Full Stack",
      company_name: "Dự án Cá nhân & Mã nguồn mở",
    },
    icon: frontend,
    iconBg: "#333333",
    date: { en: "2024", vi: "2024" },
  },
  {
    en: {
      title: "Software Development Student",
      company_name: "FPT Polytechnic College",
    },
    vi: {
      title: "Sinh viên Phát triển Phần mềm",
      company_name: "Trường Cao đẳng FPT Polytechnic",
    },
    icon: java,
    iconBg: "#333333",
    date: { en: "Expected Graduation: 2026", vi: "Dự kiến tốt nghiệp: 2026" },
  },
];

const projects = [
  {
    id: "project-1",
    en: {
      name: "API Observatory (PulseOps)",
      description: "Real-time API monitoring and observability platform. Features live request streaming, latency analytics (P95/P99), and AI-driven root cause analysis. Built with an event-driven architecture to ensure minimal latency overhead.",
    },
    vi: {
      name: "API Observatory (PulseOps)",
      description: "Nền tảng giám sát và quan sát API thời gian thực. Tính năng truyền phát yêu cầu trực tiếp, phân tích độ trễ (P95/P99) và phân tích nguyên nhân lỗi bằng AI. Được xây dựng với kiến trúc hướng sự kiện để đảm bảo độ trễ tối thiểu.",
    },
    tags: [
      { name: "nestjs", color: "blue-text-gradient" },
      { name: "bullmq", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
    ],
    image: pulseops,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: null,
  },
  {
    id: "project-2",
    en: {
      name: "Revenue & Expenditure System",
      description: "Comprehensive financial management system for enterprises. Digitizes budget management, contracts, and expense requests with multi-level approval workflows. Integrated with PulseOps for real-time performance monitoring.",
    },
    vi: {
      name: "Hệ thống Quản lý Thu chi",
      description: "Hệ thống quản lý tài chính toàn diện cho doanh nghiệp. Số hóa quản lý ngân sách, hợp đồng và yêu cầu chi phí với quy trình phê duyệt đa cấp. Tích hợp PulseOps để giám sát hiệu năng thời gian thực.",
    },
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "nuxt3", color: "green-text-gradient" },
      { name: "sqlserver", color: "pink-text-gradient" },
    ],
    image: revenue,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: null,
  },
  {
    id: "project-3",
    en: {
      name: "TechCore Recruitment System",
      description: "AI-powered recruitment platform that automates CV screening and interview scheduling. Integrates Google Gemini AI to extract candidate data and analyze skills, significantly reducing HR manual workload.",
    },
    vi: {
      name: "Hệ thống Tuyển dụng TechCore",
      description: "Nền tảng tuyển dụng hỗ trợ bởi AI giúp tự động hóa việc sàng lọc CV và đặt lịch phỏng vấn. Tích hợp Google Gemini AI để trích xuất dữ liệu ứng viên và phân tích kỹ năng, giúp giảm đáng kể khối lượng công việc thủ công của HR.",
    },
    tags: [
      { name: "java21", color: "blue-text-gradient" },
      { name: "gemini-ai", color: "green-text-gradient" },
      { name: "thymeleaf", color: "pink-text-gradient" },
    ],
    image: recruitment,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: null,
  },
  {
    id: "project-4",
    en: {
      name: "Danhoa Bridal",
      description: "Live e-commerce website for bridal clothing. Built with NuxtJS & Vue.js for SEO optimization and integrated with Firebase for real-time data handling. Currently serving real customers.",
    },
    vi: {
      name: "Danhoa Bridal",
      description: "Website thương mại điện tử thực tế cho cửa hàng váy cưới. Xây dựng bằng NuxtJS & Vue.js để tối ưu hóa SEO và tích hợp Firebase để xử lý dữ liệu thời gian thực. Hiện đang phục vụ khách hàng thực tế.",
    },
    tags: [
      { name: "nuxtjs", color: "blue-text-gradient" },
      { name: "vuejs", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: danhoa,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: "https://danhoabridal.com",
  },
];

export { services, technologies, experiences, projects };
