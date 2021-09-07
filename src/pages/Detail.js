/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import styles from './detailStyle.module.scss';

const truncate = (str) => (str !== null ? str.substring(0, 15) : 'None');

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

const child1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildre: 0.1,
      delayChildren: 0.2,
    },
  },
};

const child2 = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const DataSet = ({ data }) => (
  <motion.li variants={child2} className={styles.dataSet}>
    <h4>{data[0]}</h4>
    <p>{truncate(data[1])}</p>
  </motion.li>
);

const Detail = ({ data }) => {
  const createList = () => Object.entries(data).map(
    (point) => <DataSet key={point} data={point} />,
  );

  return (
    <motion.div
      key={data.key}
      className={styles.mainContainer}
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.header
        variants={child1}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={child1}>{data.symbol}</motion.h2>
        <motion.div variants={child2} initial="initial" animate="animate" className={styles.textContent}>
          <motion.h3 variants={child2}>{data.name}</motion.h3>
          <motion.p variants={child2}>
            {' '}
            Rank
            {data.rank}
          </motion.p>
        </motion.div>
      </motion.header>
      <div className={styles.sectionTitle}>
        <p>
          {data.name}
          {' '}
          stats
        </p>
      </div>
      <motion.ul variants={child2} animate="animate" initial="initial">
        {createList().slice(2, 11)}
      </motion.ul>
    </motion.div>
  );
};

export default Detail;
