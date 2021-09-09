/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './loaderStyle.module.scss';
import { ReactComponent as Logo } from '../../pages/doge.svg';

const container = {
  initial: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const ballVariants = {
  animate: {
    rotate: 360,
    borderRadius: ['50%%', '50%'],
    x: 75,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1,
      ease: 'easeInOut',
    },
  },
  initial: {
    x: -75,
  },
};

const Loader = ({
  children, loading, callDispatch, list, reload = false, status, position = '25%',
}) => {
  useEffect(() => {
    if (list.length === 0 || reload) {
      callDispatch();
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading === 'pending' ? (
          <motion.div
            key="loader"
            className={styles.mainContainer}
            variants={container}
            initial="loading"
            animate="loading"
            exit="hidden"
            style={{ top: position }}
          >
            {}
            <motion.div>
              {status === 'normal' ? (
                <p>LOADING</p>) : (
                  <p>ERROR: TOO MANY REQUESTS</p>)}

            </motion.div>
            <motion.div
              className={styles.ball}
              variants={ballVariants}
              initial="initial"
              animate="animate"
            >
              <Logo />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="component"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
