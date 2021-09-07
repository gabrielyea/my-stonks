/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import styles from './itemsGalleryStyle.module.scss';
import Item from '../item/Item';

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
};

const ItemsGallery = ({ displayNum }) => {
  const allItems = useSelector((state) => state.coins.entities);

  const createItems = () => allItems.slice(displayNum - 10, displayNum).map((item) => (
    <Item
      key={item.id}
      data={item}
    />
  ));

  return (
    <div>
      {allItems
        && (
          <motion.ul
            variants={container}
            initial="initial"
            animate="animate"
            className={styles.mainContainer}
          >
            { createItems(allItems.slice(0, 10)) }
          </motion.ul>
        )}
    </div>
  );
};

export default ItemsGallery;
