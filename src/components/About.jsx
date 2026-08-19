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
      description: "I'm a Full-Stack Developer based in Can Tho, currently interning at Mobifone Digital Solution Business Center. I specialize in building secure, scalable enterprise systems with Java Spring Boot and NestJS, working full-cycle (analysis, design, development, testing, delivery) in Scrum environments. With hands-on experience in database design, RESTful APIs, and deployment on Linux VPS with Docker, I love turning complex business requirements into reliable real-world solutions. Let's build something great together!",
    },
    vi: {
      subTitle: "Giới thiệu",
      title: "Tổng quan.",
      description: "Tôi là một Full-Stack Developer tại Cần Thơ, hiện đang thực tập tại Trung tâm Kinh doanh Giải pháp số - Mobifone. Tôi chuyên xây dựng các hệ thống doanh nghiệp an toàn và có khả năng mở rộng với Java Spring Boot và NestJS, tham gia trọn vòng đời dự án (phân tích, thiết kế, phát triển, kiểm thử, bàn giao) theo quy trình Scrum. Với kinh nghiệm thực tế về thiết kế CSDL, RESTful API và triển khai trên Linux VPS với Docker, tôi luôn đam mê biến các yêu cầu nghiệp vụ phức tạp thành giải pháp đáng tin cậy. Hãy cùng nhau xây dựng những điều tuyệt vời!",
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