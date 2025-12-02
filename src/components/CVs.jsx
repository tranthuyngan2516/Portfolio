import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const CV = () => {
  // Style: Nền đen nhạt (#111), viền sáng mỏng, shadow nhẹ
  const cardStyle =
    "bg-[#111] border border-white/10 p-8 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-white/30 transition-all duration-300";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-neutral-400`}>
          My full profile
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Curriculum Vitae.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-10 max-w-5xl mx-auto">
        {/* 1. HEADER & CONTACT INFO */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className={cardStyle}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-white text-4xl font-bold tracking-wide">
                Trần Thị Thuý Ngân (thuyngan.tran)
              </h3>
              <p className="text-neutral-400 mt-2 text-lg">
                Freelance Software Developer
              </p>
            </div>
            <span className="text-white border border-white/20 bg-neutral-900 px-4 py-1 rounded-full text-sm mt-4 md:mt-0">
              Open to Work
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
            Profile Summary
          </h3>
          <p className="text-neutral-300 leading-relaxed text-lg">
            Dedicated Freelance Developer with hands-on experience in building
            web applications using{" "}
            <span className="text-white">NuxtJS, Vue.js, and Spring Boot</span>.
            Proven ability to deliver real-world projects, including a live
            e-commerce site for a client. Strong focus on backend security,
            performance optimization, and database management. Currently
            expanding skills in modern stacks like React, Docker, and Kubernetes
            to become a comprehensive Full-stack Engineer.
          </p>
        </motion.div>

        {/* 3. WORK EXPERIENCE */}
        <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
          <h3 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            Work Experience
          </h3>

          <div className={cardStyle}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h4 className="text-white text-xl font-bold">
                Freelance Software Developer
              </h4>
              <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg w-fit">
                6 Months (Recent)
              </p>
            </div>

            <div className="space-y-6">
              {/* Dự án 1: Danhoa Bridal */}
              <div>
                <h5 className="text-white text-lg font-bold mb-2">
                  Project: DanhoaBridal.com (E-commerce)
                </h5>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  <li>
                    Designed and deployed a fully functional bridal clothing
                    sales website for a real client.
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Outcome:</span>{" "}
                    The website is currently live, stable, and actively serving
                    real customers.
                  </li>
                  <li>
                    Tech stack:{" "}
                    <span className="text-white">
                      NuxtJS, Vue.js, Bootstrap, Firebase
                    </span>
                    .
                  </li>
                </ul>
              </div>

              {/* Dự án 2: MediCare */}
              <div>
                <h5 className="text-white text-lg font-bold mb-2">
                  Project: MediCare (Patient Management)
                </h5>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  <li>
                    Developed a system for managing patient information and
                    scheduling appointments.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Key Focus:</span>{" "}
                    Prioritized Backend development to ensure user data security
                    and optimize website performance.
                  </li>
                  <li>
                    Tech stack:{" "}
                    <span className="text-white">Spring Boot, SQL Server</span>,
                    PostgreSQL, Redis, Docker.
                  </li>
                </ul>
              </div>

              {/* Các dự án khác */}
              <div>
                <h5 className="text-white text-lg font-bold mb-2">
                  Other Projects
                </h5>
                <ul className="text-neutral-300 list-disc list-inside space-y-2 marker:text-white">
                  <li>
                    <strong>Internal Employee Management System:</strong> Built
                    to handle internal HR processes using Vue.js and Firebase.
                  </li>
                  <li>
                    <strong>Online Programming Course Platform:</strong> A web
                    platform for selling and managing coding courses.
                  </li>
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
            Education
          </h3>

          {/* FPT Polytechnic */}
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-4 mb-4">
            <div>
              <h4 className="text-white text-xl font-bold">
                FPT Polytechnic College
              </h4>
              <p className="text-neutral-300 mt-1">
                Major: Software Development
              </p>
            </div>
            <div className="text-right">
              <p className="text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-lg inline-block">
                Expected: 06/2026
              </p>
            </div>
          </div>

          {/* Future Plan */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h4 className="text-neutral-400 text-lg font-bold">
                FPT University (Future Plan)
              </h4>
              <p className="text-neutral-500 mt-1">
                Plan to transfer for Bachelor's Degree after college graduation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. SKILLS */}
        <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
          <h3 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-white rounded-full"></span>
            Technical Skills
          </h3>

          <div className="flex flex-col gap-4">
            {/* Proficient */}
            <div>
              <p className="text-neutral-400 mb-3 text-sm uppercase tracking-wider">
                Proficient / Experienced
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Spring Boot",
                  "NuxtJS",
                  "Vue.js",
                  "Java",
                  "SQL Server",
                  "PostgreSQL",
                  "SQL",
                  "Firebase",
                  "Redis",
                  "Bootstrap",
                  "Git",
                  "JavaScript",
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
                Currently Learning & Improving
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Tailwind CSS",
                  "Flutter",
                  "Kubernetes",
                  "Problem Solving",
                  "Docker",
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

        {/* BUTTON DOWNLOAD & BACK */}
        <div className="flex flex-col items-center gap-6 mt-12 mb-20">
          <a
            href="/cv/NganTran_CV.pdf"
            download
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-black font-lg rounded-full focus:outline-none ring-offset-2 focus:ring-2 ring-white"
          >
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/100 transition-all"></div>
            Download CV (PDF)
          </a>

          <Link
            to="/"
            className="text-neutral-500 hover:text-white transition text-lg flex items-center gap-2"
          >
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(CV, "cv");
