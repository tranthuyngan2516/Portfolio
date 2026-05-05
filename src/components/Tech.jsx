import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';

const Tech = () => {
  const { lang } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>
          {lang === 'en' ? 'My skills' : 'Kỹ năng của tôi'}
        </p>
        <h2 className={styles.sectionHeadTextLight}>
          {lang === 'en' ? 'Technologies.' : 'Công nghệ.'}
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
