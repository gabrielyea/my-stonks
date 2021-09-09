/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { HiCog, HiMicrophone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import style from './navbarStyle.module.scss';
import themes from '../../utils/themes';
import useThemify from '../customHooks/useThemify';

const Navbar = () => {
  const [setTheme] = useThemify(themes);
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

  const test = () => {
    setTheme('blue');
  };

  return (
    <nav className={style.mainContainer}>
      <div
        className={style.contentHolder}
      >
        <NavLink to={links[0].path}>
          <IoIosArrowBack className={style.icon} />
        </NavLink>
        <p>2021</p>
      </div>

      <p style={{ alignSelf: 'center' }}>Crypto Coins</p>
      <div
        className={style.contentHolder}
      >
        <HiMicrophone />
        <HiCog onClick={() => test()} />
      </div>
    </nav>
  );
};

export default Navbar;
