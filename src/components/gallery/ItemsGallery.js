/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import styles from './itemsGalleryStyle.module.scss';
import Filter from '../filter/Filter';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const ItemsGallery = ({ list, displayNum }) => (
  <div title="gallery">
    {list
        && (
          <motion.ul
            data-testid="gallery"
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.mainContainer}
          >
            <Filter list={list} filterValue={displayNum} />
          </motion.ul>
        )}
  </div>
);

export default ItemsGallery;
