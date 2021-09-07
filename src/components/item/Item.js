/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './itemStyle.module.scss';

const variants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const Item = (props) => {
  const { data } = props;

  const truncate = (str) => str.substring(0, 5);

  return (
    <motion.li
      className={styles.mainContainer}
      variants={variants}
    >
      <Link
        className={styles.link}
        to={data.id}
      >
        <BiRightArrowCircle className={styles.icon} />
      </Link>
      <h2>{data.symbol}</h2>
      <div className={styles.dataContainer}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.price}>{truncate(data.priceUsd)}</p>
      </div>
    </motion.li>
  );
};

export default Item;
