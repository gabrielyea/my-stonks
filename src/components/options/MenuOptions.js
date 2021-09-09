/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import themes from '../../utils/themes';
import useThemify from '../customHooks/useThemify';
import styles from './optionsStyle.module.scss';

const container = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

const parent = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const children = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1,
  },
};

const MenuOptions = ({ toggleMenu }) => {
  const [theme, setTheme] = useThemify('pink', themes);

  return (
    <motion.div
      className={styles.menuContainer}
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.ul
        variants={parent}
        initial="initial"
        animate="animate"
        exit="exit"
        style={theme === 'pink' ? { border: 'solid 4px #5687e3' } : { border: 'solid 4px #f94e90' }}
      >
        <motion.li
          key="pink"
          variants={children}
          style={{ backgroundColor: '#f94e90' }}
          onClick={() => {
            setTheme('pink');
            toggleMenu();
          }}
        >
          pink
        </motion.li>
        <motion.li
          key="blue"
          variants={children}
          style={{ backgroundColor: '#5687e3' }}
          onClick={() => {
            setTheme('blue');
            toggleMenu();
          }}
        >
          blue
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
export default MenuOptions;
