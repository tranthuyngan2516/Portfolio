import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../context/LanguageContext";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full"
    >
      <div
        className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center font-poppins">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      subTitle: "Introduction",
      title: "Overview.",
      description: "I'm a dedicated software developer specializing in building secure, scalable backend systems with Java and Spring Boot. With experience in modern frontend frameworks like NuxtJS and Vue.js, I bridge the gap between robust server-side logic and intuitive user interfaces. I'm a continuous learner currently expanding my expertise in cloud-native technologies like Docker and Kubernetes to deliver high-performance, real-world solutions. Let's build something great together!",
    },
    vi: {
      subTitle: "Giới thiệu",
      title: "Tổng quan.",
      description: "Tôi là một nhà phát triển phần mềm tận tâm, chuyên xây dựng các hệ thống backend an toàn và có khả năng mở rộng bằng Java và Spring Boot. Với kinh nghiệm về các framework frontend hiện đại như NuxtJS và Vue.js, tôi kết nối logic máy chủ mạnh mẽ với giao diện người dùng trực quan. Tôi không ngừng học hỏi và hiện đang mở rộng chuyên môn sang các công nghệ cloud-native như Docker và Kubernetes để cung cấp các giải pháp hiệu suất cao trong thực tế. Hãy cùng nhau xây dựng những điều tuyệt vời!",
    }
  };

  const content = t[lang];

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-poppins">
          {content.subTitle}
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] mt-2">
          {content.title}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-700 text-[17px] max-w-3xl leading-[30px] font-poppins"
      >
        {content.description}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center xl:justify-start">
        {services.map((service, index) => (
          <ServiceCard
            key={service[lang]}
            index={index}
            title={service[lang]}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");