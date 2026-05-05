import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      greeting: "Hi, I'm",
      role: "A passionate Backend Developer specializing in building secure, scalable systems with Java, Spring Boot & SQL.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    vi: {
      greeting: "Xin chào, mình là",
      role: "Một Backend Developer đầy đam mê, chuyên xây dựng các hệ thống an toàn và có khả năng mở rộng với Java, Spring Boot & SQL.",
      viewProjects: "Xem Dự án",
      contactMe: "Liên hệ",
    }
  };

  const content = t[lang];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex flex-col justify-center items-center">
      {/* ... keep background as is ... */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`${styles.heroHeadText} text-neutral-400 font-poppins`}>
            {content.greeting} <br className="sm:hidden" />
            <span className="text-white font-black tracking-wider">Thuy Ngan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6"
        >
          <p className={`${styles.heroSubText} mt-2 text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            {content.role}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {content.viewProjects}
            </a>

            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all"
            >
              {content.contactMe}
            </a>
        </motion.div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/20 flex justify-center items-start p-2 hover:border-white/50 transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;