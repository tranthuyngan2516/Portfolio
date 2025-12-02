import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex flex-col justify-center items-center">

      {/* 1. BACKGROUND: Hiệu ứng Spotlight Xám & Grid */}
      <div className="absolute inset-0 z-0">
        {/* Spotlight: Thay vì đen xì, dùng màu Xám Đậm (neutral-900) tỏa ra */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>

        {/* Grid Pattern: Lưới mờ màu trắng tạo chiều sâu công nghệ */}
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Lời chào */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tên dùng màu trắng hoàn toàn, font đậm */}
          <h1 className={`${styles.heroHeadText} text-neutral-400 font-poppins`}>
            Hi, I'm <br className="sm:hidden" />
            <span className="text-white font-black tracking-wider">Thuy Ngan</span>
          </h1>
        </motion.div>

        {/* Mô tả vai trò & Kỹ năng (Java Spring Boot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6"
        >
          <p className={`${styles.heroSubText} mt-2 text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            A passionate <span className="text-white font-bold border-b border-white/50">Backend Developer</span> specializing in building
            secure, scalable systems with <br className="hidden sm:block" />
            {/* Highlight bằng màu trắng sáng */}
            <span className="text-white font-bold">Java, Spring Boot</span> & <span className="text-white font-bold">SQL</span>.
          </p>
        </motion.div>

        {/* Nút điều hướng: Trắng Đen tương phản cao */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
            {/* Nút chính: Nền Trắng - Chữ Đen (Rất nổi bật trên nền tối) */}
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Projects
            </a>

            {/* Nút phụ: Trong suốt - Viền Trắng */}
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all"
            >
              Contact Me
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