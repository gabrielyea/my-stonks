import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
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
    <nav className={style.container}>
      <div className={style.contentHolder}>

        <div>
          <motion.img
            src="https://image.flaticon.com/icons/png/512/3212/3212567.png"
            alt="Space Traverler&apos;s Hub logo"
            initial="initial"
            animate="animate"
            variants={variants}
          />
          <Logo message="Space Traveler's Hub" />
        </div>

        <div>
          <ul>
            {linksList}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
