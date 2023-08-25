import { motion } from "framer-motion";
import { Section } from 'components/Section/Section';
import { WrapStyle } from './Home.module';



const Home = () => {
  return (
 <motion.div
    className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    > 
    <WrapStyle>
      <Section key= {Section} title="Телефонна книга - свобода спілкування! 🗺️" />

    </WrapStyle>
      </motion.div>
  );
};

export default Home;
