import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useLanguage } from "../context/LanguageContext";

const CV = () => {
  const { lang } = useLanguage();

  // Style: Nền đen nhạt (#111), viền sáng mỏng, shadow nhẹ
  const cardStyle =
    "bg-[#111] border border-white/10 p-8 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-white/30 transition-all duration-300";

  const t = {
    // ... translations ...
    en: {
      subTitle: "My full profile",
      title: "Curriculum Vitae.",
      openToWork: "Open to Work",
      summaryTitle: "Profile Summary",
      summary: "Full-Stack Developer pursuing a career focused on Java Spring Boot and NestJS, building RESTful APIs and business logic. Solid foundation in database design (MySQL, SQL Server) and hands-on experience with enterprise systems through 3 projects at Mobifone in a Scrum environment. Eager to grow in a corporate setting, optimizing and operating production systems, and contributing to the full project lifecycle from design to deployment.",
      expTitle: "Key Projects & Experience",
      eduTitle: "Education",
      skillsTitle: "Technical Skills",
      download: "Download CV (PDF)",
      view: "View CV (PDF)",
      back: "Back to Portfolio",
      cvFile: "/cv/NganTran_CV_EN.pdf",
      role: "Full-Stack Developer | Mobifone Intern",
      projectRole1: "Core Backend / Architect",
      projectRole2: "Full-Stack Developer",
      projectRole3: "Backend Developer",
      projectRole4: "Freelance Developer",
      p1Desc: [
        "Built an Event-Driven Architecture capturing telemetry data without adding latency to monitored APIs.",
        "Implemented WebSocket Gateway for live request streaming and BullMQ/Redis for reliable ingestion.",
        "Developed complex aggregation logic for engineering metrics like P95/P99 latency and error tracking.",
      ],
      p2Desc: [
        "Secured financial APIs with JWT middleware and detailed RBAC role-based permissions.",
        "Wrote safe budget-allocation logic for concurrent transactions, avoiding data inconsistency.",
        "Deployed the whole system on a Linux VPS with Docker for WEB AI HACKATHON 2026.",
      ],
      p3Desc: [
        "Designed a standardized SQL Server schema for high-volume candidate records.",
        "Implemented the full pipeline from job posting and application intake to automatic status updates via validated RESTful APIs.",
      ],
      p4Desc: [
        "Modeled a multi-attribute product system (size, color, stock variants) with inventory tracking.",
        "Integrated Firebase Storage for media and Nuxt.js SSR to improve catalog page load speed.",
      ],
      eduDetail: [
        "Focus on Java, Web Development, and Database Design.",
        "Participated in hackathons and technical projects, including WEB AI HACKATHON 2026.",
        "English: TOEIC 630, reads technical documentation fluently.",
      ],
    },
    vi: {
      subTitle: "Hồ sơ chi tiết",
      title: "Sơ yếu lý lịch.",
      openToWork: "Sẵn sàng làm việc",
      summaryTitle: "Tóm tắt chuyên môn",
      summary: "Lập trình viên Full-Stack với định hướng phát triển theo Java Spring Boot và NestJS, tập trung xây dựng RESTful API và xử lý logic nghiệp vụ. Có nền tảng về thiết kế CSDL (MySQL, SQL Server) và kinh nghiệm làm việc với hệ thống doanh nghiệp qua 3 dự án tại Mobifone cùng môi trường Scrum. Mong muốn tham gia môi trường doanh nghiệp để nâng cao kỹ năng thực tế, tối ưu và vận hành hệ thống ở môi trường production, đóng góp trọn vòng đời từ thiết kế đến triển khai dự án.",
      expTitle: "Dự án tiêu biểu & Kinh nghiệm",
      eduTitle: "Học vấn",
      skillsTitle: "Kỹ năng chuyên môn",
      download: "Tải CV (PDF)",
      view: "Xem CV (PDF)",
      back: "Quay lại Portfolio",
      cvFile: "/cv/NganTran_CV_VN.pdf",
      role: "Lập trình viên Full-Stack | Thực tập sinh Mobifone",
      projectRole1: "Backend Developer",
      projectRole2: "Lập trình viên Full-Stack",
      projectRole3: "Backend Developer",
      projectRole4: "Freelance Developer",
      p1Desc: [
        "Xây dựng kiến trúc Event-Driven giúp thu thập dữ liệu telemetry mà không làm tăng độ trễ cho các API được giám sát.",
        "Triển khai WebSocket Gateway để truyền dữ liệu request trực tiếp và sử dụng BullMQ/Redis để xử lý hàng đợi tin cậy.",
        "Phát triển logic tổng hợp phức tạp cho các chỉ số kỹ thuật như độ trễ P95/P99 và theo dõi lỗi.",
      ],
      p2Desc: [
        "Bảo mật API tài chính bằng middleware JWT và phân quyền RBAC chi tiết theo nhiều vai trò.",
        "Viết logic phân bổ ngân sách an toàn cho giao dịch đồng thời, tránh sai lệch dữ liệu.",
        "Triển khai toàn bộ hệ thống trên Linux VPS với Docker cho cuộc thi WEB AI HACKATHON 2026.",
      ],
      p3Desc: [
        "Thiết kế lược đồ SQL Server chuẩn hóa cho hồ sơ ứng viên khối lượng lớn.",
        "Triển khai trọn quy trình từ đăng tin tuyển dụng, nhận hồ sơ đến tự động cập nhật trạng thái bằng API RESTful có validation.",
      ],
      p4Desc: [
        "Mô hình hóa hệ thống sản phẩm đa thuộc tính (biến thể theo size, color và tồn kho) kèm theo dõi tồn kho.",
        "Tích hợp Firebase Storage lưu media và Nuxt.js SSR cải thiện tốc độ tải trang danh mục.",
      ],
      eduDetail: [
        "Tập trung vào Java, Phát triển Web và Thiết kế Cơ sở dữ liệu.",
        "Tham gia các cuộc thi hackathon và dự án kỹ thuật, trong đó có WEB AI HACKATHON 2026.",
        "Tiếng Anh: TOEIC 630, đọc tốt tài liệu kỹ thuật.",
      ],
    }
  };

  const content = t[lang];

  return (
    <>
      <div className="flex justify-between items-center">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-neutral-400`}>
            {content.subTitle}
          </p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            {content.title}
          </h2>
        </motion.div>
      </div>

      <div className="mt-10 flex flex-col gap-10 max-w-5xl mx-auto">
        {/* 1. HEADER & CONTACT INFO */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className={cardStyle}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-white text-4xl font-bold tracking-wide">
                Trần Thị Thuý Ngân
              </h3>
              <p className="text-neutral-400 mt-2 text-lg">
                {content.role} · {lang === 'en' ? 'Can Tho, Vietnam' : 'Cần Thơ, Việt Nam'}
              </p>
            </div>
            <span className="text-white border border-white/20 bg-neutral-900 px-4 py-1 rounded-full text-sm mt-4 md:mt-0">
              {content.openToWork}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-neutral-300">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <a
                href="mailto:tranthuyngan2516@gmail.com"
                className="hover:text-white transition decoration-1 underline-offset-4 hover:underline"
              >
                tranthuyngan2516@gmail.com
              </a>
            </div>

            {/* Phone (Icon mới) */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span>0948 177 282</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/trần-thúy-ngân-thuyngan-tran-70924b393"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition decoration-1 underline-offset-4 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* GitHub (Icon mới) */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <a
                href="https://github.com/tranthuyngan2516"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition decoration-1 underline-offset-4 hover:underline"
              >
                github.com/tranthuyngan2516
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. PROFILE SUMMARY */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className={cardStyle}
        >
          <h3 className="text-white text-2xl font-bold mb-4 border-b border-white/10 pb-2 inline-block">
            {content.summaryTitle}
          </h3>
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'en' ? (
              <>
                Full-Stack Developer pursuing a career focused on
                <span className="text-white"> Java Spring Boot and NestJS</span>, building RESTful APIs and business logic. Solid foundation in
                database design (<span className="text-white">MySQL, SQL Server</span>) and hands-on experience with enterprise systems through
                <span className="text-white"> 3 projects at Mobifone</span> in a Scrum environment. Eager to grow in a corporate setting,
                optimizing and operating production systems, and contributing to the full project lifecycle from design to deployment.
              </>
            ) : (
              <>
                Lập trình viên Full-Stack với định hướng phát triển theo
                <span className="text-white"> Java Spring Boot và NestJS</span>, tập trung xây dựng RESTful API và xử lý logic nghiệp vụ. Có nền tảng vững về
                thiết kế CSDL (<span className="text-white">MySQL, SQL Server</span>) và kinh nghiệm thực tế với hệ thống doanh nghiệp qua
                <span className="text-white"> 3 dự án tại Mobifone</span> trong môi trường Scrum. Mong muốn phát triển trong môi trường doanh nghiệp,
                tối ưu và vận hành hệ thống production, đóng góp trọn vòng đời dự án từ thiết kế đến triển khai.
              </>
            )}
          </p>
        </motion.div>

        {/* 3. WORK EXPERIENCE */}
        <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
          <h3 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            {content.expTitle}
          </h3>

          <div className={cardStyle}>
            <div className="space-y-10">
              {/* Dự án 1: API Observatory */}
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h5 className="text-white text-xl font-bold">
                    🛰️ API Observatory (PulseOps)
                  </h5>
                  <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg w-fit">
                    {content.projectRole1}
                  </p>
                </div>
                <p className="text-neutral-400 mb-4 italic">Real-time API Monitoring, Debugging, and Operational Intelligence Platform.</p>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  {content.p1Desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Dự án 2: Revenue System */}
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h5 className="text-white text-xl font-bold">
                    💰 TechCore: Financial Management
                  </h5>
                  <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg w-fit">
                    {content.projectRole2}
                  </p>
                </div>
                <p className="text-neutral-400 mb-4 italic">Enterprise finance management system with RBAC, JWT-secured APIs and Docker/VPS deployment.</p>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  {content.p2Desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Dự án 3: TechCore Recruitment */}
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h5 className="text-white text-xl font-bold">
                    🚀 TechCore: Recruitment & HR Management
                  </h5>
                  <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg w-fit">
                    {content.projectRole3}
                  </p>
                </div>
                <p className="text-neutral-400 mb-4 italic">Recruitment and personnel management system covering the full hiring pipeline.</p>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  {content.p3Desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Dự án 4: Danhoa Bridal */}
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h5 className="text-white text-xl font-bold">
                    👗 DanhoaBridal (Production Backend)
                  </h5>
                  <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg w-fit">
                    {content.projectRole4}
                  </p>
                </div>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  {content.p4Desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. EDUCATION */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          className={cardStyle}
        >
          <h3 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            {content.eduTitle}
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="text-white text-xl font-bold">
                FPT Polytechnic Can Tho College
              </h4>
              <p className="text-neutral-300 mt-1">
                Major: Software Development (Phát triển Phần mềm)
              </p>
              <ul className="text-neutral-400 mt-4 list-disc list-inside space-y-1">
                {content.eduDetail.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-right">
                <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg inline-block">
                Aug 2024 - Present
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. SKILLS */}
        <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
          <h3 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            {content.skillsTitle}
          </h3>

          <div className="flex flex-col gap-4">
            {/* Proficient */}
            <div>
              <p className="text-neutral-400 mb-3 text-sm uppercase tracking-wider">
                Backend & Languages
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Java 17/21",
                  "Spring Boot",
                  "Spring Security",
                  "Spring Data JPA",
                  "NestJS",
                  "Node.js",
                  "TypeScript",
                  "MySQL",
                  "SQL Server",
                  "RESTful APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-neutral-900 text-white px-5 py-3 rounded-xl text-sm font-medium border border-neutral-700 hover:border-white transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning / Future */}
            <div className="mt-4">
              <p className="text-neutral-400 mb-3 text-sm uppercase tracking-wider">
                Frontend & DevOps
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "NuxtJS",
                  "ReactJS",
                  "Vue.js",
                  "Ant Design",
                  "Tailwind CSS",
                  "Bootstrap",
                  "TypeORM",
                  "JWT / RBAC / OAuth2",
                  "Docker",
                  "Firebase",
                  "Git / GitLab",
                  "Linux VPS",
                  "WEBGIS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#1a1a1a] text-neutral-400 px-5 py-3 rounded-xl text-sm font-medium border border-neutral-800 border-dashed hover:text-white hover:border-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* BUTTON DOWNLOAD, VIEW & BACK */}
        <div className="flex flex-col items-center gap-6 mt-12 mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={content.cvFile}
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-black font-lg rounded-full focus:outline-none ring-offset-2 focus:ring-2 ring-white"
            >
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/100 transition-all"></div>
              {content.download}
            </a>

            <a
              href={content.cvFile}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-900 font-lg rounded-full focus:outline-none ring-offset-2 focus:ring-2 ring-white border border-white/10 hover:border-white/40"
            >
              {content.view}
            </a>
          </div>

          <Link
            to="/"
            className="text-neutral-500 hover:text-white transition text-lg flex items-center gap-2"
          >
            <span>←</span> {content.back}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(CV, "cv");
