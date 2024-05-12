import styles from './Header.module.css';
import { NavBar } from '~/components/NavBar';
import { NavLink } from '@remix-run/react';
import { PhotoSnapLogo } from '../icons';
import { useState } from 'react';

type HeaderProps = {
  // Define your props here
};

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function menuToggle() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <header className={styles.headerContainer}>
      <NavLink to="/">
        <PhotoSnapLogo style={{ height: '1rem', width: '10.625rem' }} />
      </NavLink>
      <NavBar isMenuOpen={isMenuOpen} />
      <button onClick={menuToggle}>Menu Toggle</button>
    </header>
  );
}
