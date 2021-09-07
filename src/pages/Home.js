import { useDispatch, useSelector } from 'react-redux';
import {
  AnimatePresence, AnimateSharedLayout, motion, useCycle,
} from 'framer-motion';
import { useState } from 'react';
import { fetchAllCoins } from '../redux/slices/coinsSlice';
import Loader from '../components/loader/Loader';
import { ReactComponent as Logo } from './doge.svg';
import styles from './homeStyle.module.scss';
import ItemsGallery from '../components/gallery/ItemsGallery';
import Options from '../components/options/Options';
import Dialog from '../components/dialog/Dialog';

const container = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

const Home = () => {
  const loading = useSelector((state) => state.coins.loading);
  const list = useSelector((state) => state.coins.entities);
  const dispatch = useDispatch();
  const [open, toggleOpen] = useCycle(false, true);
  const [filter, setFilter] = useState(10);

  const callDispatch = () => {
    dispatch(fetchAllCoins());
  };

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.mainContainer}
    >
      <AnimateSharedLayout>
        <motion.header className={styles.header}>
          <motion.div
            className={styles.doggoContainer}
            layout
          >
            <motion.div
              layout
            >
              <Logo
                className={styles.icon}
                onClick={() => toggleOpen()}
              />
            </motion.div>
            <AnimatePresence exitBeforeEnter initial={false}>
              {loading === 'pending' && (
                <Dialog
                  index={1}
                  message="CLICK ME!!"
                />
              )}
              {open && (
              <>
                <Dialog
                  index={0}
                  message="Hemloo, Pick a rank!"
                />
              </>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className={styles.titleContainer}
            initial={{ scale: 1 }}
            animate={open ? { scale: 1.5 } : { scale: 1 }}
            layout
          >
            {open ? (
              <Options
                setFilter={setFilter}
                filter={filter}
              />
            )
              : <h1>Cryptocurrencies</h1>}
          </motion.div>
        </motion.header>
      </AnimateSharedLayout>
      <motion.div
        className={styles.sectionTitle}
      >
        <p>All crypto currencies</p>
      </motion.div>
      <Loader
        loading={loading}
        callDispatch={callDispatch}
        list={list}
      >
        <ItemsGallery
          displayNum={filter}
        />
      </Loader>
    </motion.div>
  );
};
export default Home;
