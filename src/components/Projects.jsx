import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({
  project,
  lang,
}) => {
  const { name, description } = project[lang];
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.75)}
      onClick={() => project.demo_link && window.open(project.demo_link, "_blank")}
      className={`bg-black border border-white/10 p-6 rounded-2xl w-[360px] flex-shrink-0 shadow-none hover:border-white/30 transition-all duration-300 group flex flex-col h-full min-h-[480px] ${
        project.demo_link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {project.source_code_link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.source_code_link, "_blank");
              }}
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <img src={github} alt="github" className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="px-4 py-2 bg-[#111] text-gray-300 text-xs font-medium rounded-full"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { lang } = useLanguage();

  const t = {
    en: {
      subTitle: "My Work",
      title: "Projects.",
      description: "Projects I have built from scratch – showcasing my skills, problem-solving abilities, and passion for coding.",
    },
    vi: {
      subTitle: "Sản phẩm của tôi",
      title: "Dự án.",
      description: "Các dự án tôi đã xây dựng từ đầu – thể hiện kỹ năng, khả năng giải quyết vấn đề và niềm đam mê lập trình của mình.",
    }
  };

  const content = t[lang];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 380;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    const { current } = scrollRef;
    setCanScrollLeft(current.scrollLeft > 50);
    setCanScrollRight(
      current.scrollLeft < current.scrollWidth - current.clientWidth - 50
    );
  };

  return (
    <div className="-mt-24 pb-20 bg-black">
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          {content.subTitle}
        </p>
        <h2 className="text-6xl font-bold text-white mt-4">{content.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-20 px-6"
      >
        {content.description}
      </motion.p>

      <div className="relative max-w-7xl mx-auto px-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black border border-gray-700 rounded-full flex items-center justify-center transition ${
            !canScrollLeft
              ? "opacity-30 cursor-not-allowed"
              : "hover:border-white"
          }`}
        >
          <span className="text-white text-2xl">‹</span>
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black border border-gray-700 rounded-full flex items-center justify-center transition ${
            !canScrollRight
              ? "opacity-30 cursor-not-allowed"
              : "hover:border-white"
          }`}
        >
          <span className="text-white text-2xl">›</span>
        </button>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="snap-center">
              <ProjectCard project={project} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
