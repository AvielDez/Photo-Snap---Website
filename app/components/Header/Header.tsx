import styles from './Header.module.css';
import { NavBar } from '~/components/NavBar';
import { NavLink } from '@remix-run/react';
import { PhotoSnapLogo } from '../icons';
import { useState } from 'react';
import { IconButton } from '../IconButton';
import { OpenIcon, CloseIcon } from '../icons';

type HeaderProps = {
  // Define your props here
};

export function Header() {
  const [isMenuClosed, setMenuClosed] = useState(true);

  function menuToggle() {
    setMenuClosed(!isMenuClosed);
  }

  function closeMenu() {
    setMenuClosed(true);
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navContainer}>
        <NavLink to="/">
          <PhotoSnapLogo style={{ height: '1rem', width: '10.625rem' }} />
        </NavLink>
        <NavBar isMenuOpen={isMenuClosed} closeMenu={closeMenu} />
        <IconButton onClick={menuToggle} className={styles.navMenuToggle}>
          {isMenuClosed ? (
            <OpenIcon style={{ height: '6px', width: '20px' }} />
          ) : (
            <CloseIcon style={{ height: '15px', width: '16px' }} />
          )}
        </IconButton>
      </div>
    </header>
  );
}
