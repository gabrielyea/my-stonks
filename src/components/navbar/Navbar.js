/* eslint-disable no-unused-vars */
import React from 'react';
import { HiCog, HiMicrophone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import style from './navbarStyle.module.scss';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/detail',
      text: 'Detail',
    },
  ];

  const linksList = links.map((link) => (
    <li key={link.id}>
      <NavLink
        className={style.link}
        to={link.path}
        activeClassName={style.active}
        exact
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={style.mainContainer}>
      <div
        className={style.contentHolder}
      >
        <IoIosArrowBack />
        <p>2021</p>
      </div>

      <p style={{ alignSelf: 'center' }}>Crypto Coins</p>
      <div
        className={style.contentHolder}
      >
        <HiMicrophone />
        <HiCog />
      </div>
    </nav>
  );
};

export default Navbar;
