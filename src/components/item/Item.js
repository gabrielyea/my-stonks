/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './itemStyle.module.scss';

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const child = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const Item = ({ data }) => {
  const truncate = (str) => str.substring(0, 5);

  return (
    <motion.li
      className={styles.mainContainer}
      variants={variants}
    >
      <Link
        className={styles.link}
        to={`/detail/${data.id}`}
      >
        <BiRightArrowCircle className={styles.icon} />
      </Link>
      <h2>{data.symbol}</h2>
      <motion.div
        className={styles.dataContainer}
        variants={child}
        initial="initial"
        animate="animate"
      >
        <motion.p variants={child} className={styles.name}>{data.name}</motion.p>
        <motion.p variants={child}>{truncate(data.priceUsd)}</motion.p>
      </motion.div>
    </motion.li>
  );
};

export default Item;
