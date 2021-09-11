/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import styles from './optionsStyle.module.scss';

const Options = ({ filter, setFilter }) => {
  const set = (num) => {
    if (filter + num > 100) {
      setFilter(10);
      return;
    } if (filter + num < 10) {
      setFilter(100);
      return;
    }
    setFilter(filter + num);
  };

  return (
    <motion.div
      className={styles.optionsContainer}
      layout
    >
      Top
      {' '}
      {filter}
      !
      <motion.div
        style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em',
        }}
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => set(10)}
        >
          <IoIosAddCircle className={styles.icon} />
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => set(-10)}
        >
          <IoIosRemoveCircle className={styles.icon} />
        </motion.button>
      </motion.div>

    </motion.div>
  );
};

export default Options;
