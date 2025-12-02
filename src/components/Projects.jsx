import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PropTypes from "prop-types";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.75)}
      // --- THAY ĐỔI 1: Thêm sự kiện onClick để mở link Demo ---
      onClick={() => demo_link && window.open(demo_link, "_blank")}
      // --- THAY ĐỔI 2: Thêm 'cursor-pointer' nếu có link ---
      className={`bg-black border border-white/10 p-6 rounded-2xl w-[360px] flex-shrink-0 shadow-none hover:border-white/30 transition-all duration-300 group ${
        demo_link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Project Image */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* GitHub icon – visible on hover */}
        {source_code_link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
            <div
              onClick={(e) => {
                // Giữ dòng này để không bị kích hoạt click của cả Card
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <img src={github} alt="github" className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="px-4 py-2 bg-[#111] text-gray-300 text-xs font-medium rounded-full"
          >
            #{tag.name}
          </span>
        ))}
      </div>

      {/* --- ĐÃ XÓA PHẦN NÚT LIVE DEMO Ở ĐÂY --- */}
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  source_code_link: PropTypes.string,
  demo_link: PropTypes.string,
};

const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      {/* Title */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          My Work
        </p>
        <h2 className="text-6xl font-bold text-white mt-4">Projects.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-20 px-6"
      >
        Projects I have built from scratch – showcasing my skills,
        problem-solving abilities, and passion for coding.
      </motion.p>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-10">
        {/* Left Button */}
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

        {/* Right Button */}
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

        {/* Project List */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="snap-center">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
