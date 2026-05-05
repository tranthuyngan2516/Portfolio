import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      subTitle: "What's Next?",
      title: "Let's Work Together.",
      description: "I’m currently open for new opportunities and collaborations. Whether it’s a project, a question, or just a quick hello — feel free to reach out. I’ll get back to you as soon as possible.",
      sayHello: "Say Hello",
      footer: "Designed & Built by ThuyNgan.Tran",
    },
    vi: {
      subTitle: "Tiếp theo là gì?",
      title: "Cùng nhau hợp tác nhé.",
      description: "Tôi hiện đang sẵn sàng cho các cơ hội và sự hợp tác mới. Cho dù đó là một dự án, một câu hỏi, hay chỉ là một lời chào nhanh — đừng ngần ngại liên hệ. Tôi sẽ phản hồi sớm nhất có thể.",
      sayHello: "Gửi Email cho tôi",
      footer: "Thiết kế & Xây dựng bởi ThuyNgan.Tran",
    }
  };

  const content = t[lang];

  return (
    <div className="xl:mt-12 flex flex-col items-center justify-center text-center gap-10 overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-2 font-poppins">
          {content.subTitle}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">
          {content.title}
        </h2>
        <p className="text-neutral-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide">
          {content.description}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <a
          href="mailto:tranthuyngan2516@gmail.com"
          className="relative px-12 py-6 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 border border-neutral-800 hover:border-white/50 transition-all duration-300"
        >
          <span className="flex items-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="pl-6 text-neutral-300 group-hover:text-white text-xl font-medium transition-colors tracking-wide">
              {content.sayHello}
            </span>
          </span>
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.4, 1)}
        className="flex gap-6 mt-4"
      >
        <div
          onClick={() =>
            window.open("https://github.com/tranthuyngan2516", "_blank")
          }
          className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-all duration-300 group"
        >
          <img
            src={github}
            alt="github"
            className="w-8 h-8 opacity-60 group-hover:opacity-100 group-hover:invert transition-all"
          />
        </div>

        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/trần-thúy-ngân-thuyngan-tran-70924b393",
              "_blank"
            )
          }
          className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group"
        >
          <svg
            className="w-7 h-7 fill-neutral-400 group-hover:fill-white transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.6, 1)}
        className="text-neutral-600 text-[14px] mt-10 tracking-wide"
      >
        {content.footer}
      </motion.p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
