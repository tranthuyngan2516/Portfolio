import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // --- CARD ĐEN ---
        // bg-black: Nền card màu đen
        // text-white: Chữ trong card màu trắng
        // shadow-2xl: Bóng đổ sâu để card đen nổi lên trên nền trắng
        className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        {/* Tiêu đề trong card màu trắng */}
        <h3 className="text-white text-[20px] font-bold text-center font-poppins">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      {/* Text bên ngoài giữ màu ĐEN để hiện trên nền trắng */}
      <motion.div variants={textVariant()}>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-poppins">
          Introduction
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] mt-2">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // Nội dung mô tả màu xám đậm
        className="mt-4 text-gray-700 text-[17px] max-w-3xl leading-[30px] font-poppins"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center xl:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");