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
  reactjs,
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
    en: "Java Spring Boot Backend",
    vi: "Backend Java Spring Boot",
    icon: backend,
  },
  {
    en: "NestJS & Node.js Backend",
    vi: "Backend NestJS & Node.js",
    icon: nodejs,
  },
  {
    en: "Database Design (MySQL, SQL Server)",
    vi: "Thiết kế CSDL (MySQL, SQL Server)",
    icon: prototyping,
  },
  {
    en: "Full-Stack Development (Scrum)",
    vi: "Phát triển Full-Stack (Scrum)",
    icon: frontend,
  },
];

const technologies = [
  { name: "Java", icon: java },
  { name: "Node.js", icon: nodejs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "ReactJS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "PostgreSQL", icon: postgresql },
];

const experiences = [
  {
    en: {
      title: "Full-Stack Developer Intern",
      company_name: "Mobifone Digital Solution Business Center",
      description: [
        "Joined 3 enterprise web projects from day one, owning features full-cycle: requirement analysis, design, module/API development, testing and handover, working in Scrum (daily standups, weekly progress meetings).",
        "Built around 10 modules from scratch (Controller, Service, Repository, Entity) with NestJS, TypeScript, MySQL and TypeORM; accumulated 150+ commits on shared GitLab repositories.",
        "Took over and stabilized the WEBGIS & Industrial Zone Management system (KCN/KCX Can Tho): fixed 10+ production bugs and developed 2 new modules.",
        "Developed 2 modules (initiative domain & initiative type management) for the People's Committee's Initiative Management System, with full CRUD APIs and validation, self-tested before QA handover.",
        "Acted as project tester: wrote 15-50 test cases per project, testing features directly on near-production environments across 10-15 screens per project.",
      ],
    },
    vi: {
      title: "Thực tập sinh Lập trình viên Full-Stack",
      company_name: "Trung tâm Kinh doanh Giải pháp số - Mobifone",
      description: [
        "Tham gia 3 dự án web doanh nghiệp ngay từ đầu, sở hữu tính năng trọn vòng đời: phân tích yêu cầu, thiết kế, phát triển module/API, kiểm thử và bàn giao, theo quy trình Scrum.",
        "Xây dựng khoảng 10 module từ đầu (Controller, Service, Repository, Entity) bằng NestJS, TypeScript, MySQL và TypeORM; hơn 150 commits trên các repository GitLab chung.",
        "Tiếp nhận và ổn định hệ thống WEBGIS và Quản lý khu công nghiệp (KCN/KCX Cần Thơ), xử lý hơn 10 lỗi trên production và phát triển thêm 2 module mới.",
        "Phát triển 2 module cho Hệ thống Quản lý Sáng kiến của UBND phường, gồm API CRUD đầy đủ kèm validation; tự kiểm thử trước khi bàn giao cho QA.",
        "Đóng vai trò tester của dự án: viết 15-50 test cases mỗi dự án, kiểm thử trực tiếp trên môi trường gần production qua 10-15 màn hình mỗi dự án.",
      ],
    },
    icon: backend,
    iconBg: "#333333",
    date: { en: "Jun 2026 - Present", vi: "T6/2026 - Hiện tại" },
  },
  {
    en: {
      title: "Backend Developer (Freelance)",
      company_name: "SME Clients (e.g. DanHoaBridal)",
      description: [
        "Delivered 2 production backend systems for SME clients (including the DanHoaBridal fashion business).",
        "Converted complex ERDs into standardized SQL Server schemas with indexing strategies that noticeably improved query response times.",
        "Built maintainable CRUD RESTful APIs and business logic with Java Spring Boot (MVC + Spring Data JPA); managed remote work, Git branching and merge conflicts over 10 months of development.",
      ],
    },
    vi: {
      title: "Backend Developer (Freelance)",
      company_name: "Khách hàng Doanh nghiệp (VD: DanHoaBridal)",
      description: [
        "Bàn giao 2 hệ thống backend production cho khách hàng doanh nghiệp vừa và nhỏ (trong đó có hộ kinh doanh thời trang DanHoaBridal).",
        "Chuyển đổi ERD phức tạp thành lược đồ SQL Server chuẩn hóa với chiến lược indexing cải thiện rõ rệt thời gian phản hồi truy vấn.",
        "Xây dựng CRUD RESTful API và nghiệp vụ dễ bảo trì bằng Java Spring Boot (MVC + Spring Data JPA); làm việc từ xa với quy trình Git branching trong 10 tháng phát triển.",
      ],
    },
    icon: nodejs,
    iconBg: "#333333",
    date: { en: "Nov 2025 - Mar 2026", vi: "T11/2025 - T3/2026" },
  },
  {
    en: {
      title: "Software Development Student",
      company_name: "FPT Polytechnic Can Tho College",
      description: [
        "Majoring in Software Development with focus on Java, Web Development and Database Design.",
        "Participated in hackathons and technical projects, including the WEB AI HACKATHON 2026.",
        "English: TOEIC 630, comfortable reading technical documentation.",
      ],
    },
    vi: {
      title: "Sinh viên Phát triển Phần mềm",
      company_name: "Cao đẳng FPT Polytechnic Cần Thơ",
      description: [
        "Chuyên ngành Phát triển Phần mềm, tập trung vào Java, Phát triển Web và Thiết kế CSDL.",
        "Tham gia các cuộc thi hackathon và dự án kỹ thuật, trong đó có WEB AI HACKATHON 2026.",
        "Tiếng Anh: TOEIC 630, đọc tốt tài liệu kỹ thuật.",
      ],
    },
    icon: java,
    iconBg: "#333333",
    date: { en: "Aug 2024 - Present", vi: "T8/2024 - Hiện tại" },
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
      name: "TechCore: Financial Management",
      description: "Enterprise finance management system with detailed RBAC role-based access and JWT-secured APIs. Handles safe budget allocation for concurrent transactions, avoiding data inconsistency. Deployed on a Linux VPS with Docker for the WEB AI HACKATHON 2026.",
    },
    vi: {
      name: "TechCore: Quản lý Thu - Chi",
      description: "Hệ thống quản lý tài chính doanh nghiệp với phân quyền RBAC chi tiết theo nhiều vai trò và API bảo mật bằng JWT. Xử lý logic phân bổ ngân sách an toàn cho giao dịch đồng thời, tránh sai lệch dữ liệu. Triển khai trên Linux VPS với Docker cho cuộc thi WEB AI HACKATHON 2026.",
    },
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "nuxtjs", color: "green-text-gradient" },
      { name: "sqlserver", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: revenue,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: null,
  },
  {
    id: "project-3",
    en: {
      name: "TechCore: Recruitment & HR",
      description: "Recruitment and personnel management system built on a standardized SQL Server schema for high-volume candidate records. Covers the full pipeline from job posting to application intake with RESTful APIs, validation and automatic status updates.",
    },
    vi: {
      name: "TechCore: Tuyển dụng & Nhân sự",
      description: "Hệ thống tuyển dụng và quản lý nhân sự với lược đồ SQL Server chuẩn hóa cho hồ sơ ứng viên khối lượng lớn. Triển khai trọn quy trình từ đăng tin tuyển dụng, nhận hồ sơ ứng tuyển đến tự động cập nhật trạng thái bằng API RESTful có validation.",
    },
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "sqlserver", color: "green-text-gradient" },
      { name: "validation", color: "pink-text-gradient" },
    ],
    image: recruitment,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: null,
  },
  {
    id: "project-4",
    en: {
      name: "DanhoaBridal",
      description: "Live fashion e-commerce backend. Models a multi-attribute product system (size, color, stock variants) with inventory tracking; integrates Firebase Storage for media and Nuxt.js SSR to improve catalog page load speed.",
    },
    vi: {
      name: "DanhoaBridal",
      description: "Backend thương mại điện tử thời trang thực tế. Mô hình hóa hệ thống sản phẩm đa thuộc tính (biến thể theo size, color và tồn kho) kèm theo dõi tồn kho; tích hợp Firebase Storage lưu media và Nuxt.js SSR cải thiện tốc độ tải trang danh mục.",
    },
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "nuxtjs-ssr", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "sqlserver", color: "blue-text-gradient" },
    ],
    image: danhoa,
    source_code_link: "https://github.com/tranthuyngan2516",
    demo_link: "https://danhoabridal.com",
  },
];

export { services, technologies, experiences, projects };
