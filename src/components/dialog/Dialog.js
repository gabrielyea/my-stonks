/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import styles from './dialogStyle.module.scss';

const variant1 = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const variant2 = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0.5,
    scale: 0.5,
    transition: {
      duration: 0.5,
      flip: 3,
    },
  },
};

const variants = [variant1, variant2];

const Dialog = ({ index, message }) => {
  const state = useSelector((state) => state.coins.status);
  return (
    <motion.div
      className={styles.dialog}
      variants={variants[index]}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      {state === 'normal' ? (
        <p>{message}</p>
      ) : (
        <p>You should try reloading...</p>)}
    </motion.div>
  );
};

export default Dialog;
