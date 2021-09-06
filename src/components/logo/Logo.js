/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import styles from './logoStyle.module.scss';

const container = {
  initial: {
  },
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const childVariant = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Logo = (props) => {
  const { message } = props;
  const logoArr = message.split('');

  const createLogo = () => logoArr.map((letter, index) => (
    <motion.div
      variants={childVariant}
      key={letter.concat(index)}
    >
      {letter}
    </motion.div>
  ));

  return (
    <motion.div
      className={styles.mainContainer}
      variants={container}
      initial="initial"
      animate="animate"
    >
      {createLogo()}
    </motion.div>
  );
};

export default Logo;
