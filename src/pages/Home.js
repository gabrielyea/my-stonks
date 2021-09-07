/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { BiBitcoin } from 'react-icons/bi';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAllCoins } from '../redux/slices/coinsSlice';
import Loader from '../components/loader/Loader';
import { ReactComponent as Logo } from './doge.svg';
import styles from './homeStyle.module.scss';
import ItemsGallery from '../components/gallery/ItemsGallery';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Home = () => {
  const loading = useSelector((state) => state.coins.loading);
  const list = useSelector((state) => state.coins.entities);
  const dispatch = useDispatch();

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

      <header className={styles.header}>
        <Logo className={styles.icon} />
        <div>
          <h1>Cryptocurrencies</h1>
        </div>
      </header>
      <div className={styles.sectionTitle}>
        <p>All crypto currencies</p>
      </div>
      <Loader
        loading={loading}
        callDispatch={callDispatch}
        list={list}
      >
        <ItemsGallery />
      </Loader>
    </motion.div>
  );
};
export default Home;
