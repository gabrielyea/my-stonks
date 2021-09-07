/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
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
  loading: {
    flip: Infinity,
    duration: 1,
    ease: 'easeInOut',
  },
};

const ballVariants = {
  animate: {
    rotate: 360,
    borderRadius: ['50%%', '50%'],
    x: 75,
    transition: {
      flip: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
  initial: {
    x: -75,
  },
};
const Loader = ({
  children, loading, callDispatch, list,
}) => {
  const state = useSelector((state) => state.coins.status);
  useEffect(() => {
    callDispatch();
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading === 'pending' && list.length === 0 ? (
          <motion.div
            key="loader"
            className={styles.mainContainer}
            variants={container}
            initial="loading"
            animate="loading"
            exit="hidden"
          >
            {}
            <motion.div>
              {state === 'normal' ? (
                <p>LOADING</p>) : (
                  <p>ERROR: TOO MANY REQUEST</p>)}

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
            variants={container}
            initial="hidden"
            animate="show"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
