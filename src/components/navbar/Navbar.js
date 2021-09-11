import { HiCog, HiMicrophone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import style from './navbarStyle.module.scss';
import useToggle from '../customHooks/useToggle';
import MenuOptions from '../options/MenuOptions';

const Navbar = () => {
  const [open, toggleOpen] = useToggle(false, true);
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

  return (
    <nav className={style.mainContainer}>
      <div
        className={style.contentHolder}
      >
        <NavLink to={links[0].path}>
          <IoIosArrowBack className={style.icon} />
        </NavLink>
      </div>

      <p style={{ alignSelf: 'center' }}>Crypto Coins</p>
      <div
        className={style.contentHolder}
      >
        <HiMicrophone />
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          whileHover={{ scale: 2 }}
          whileTap={{ rotateZ: 360 }}
        >
          <HiCog onClick={() => toggleOpen()} />
        </motion.div>
        <AnimatePresence>
          {open && (
            <MenuOptions toggleMenu={toggleOpen} />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
