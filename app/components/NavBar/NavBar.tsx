import styles from './NavBar.module.css';
import { NavLink } from '@remix-run/react';
import { Button } from '~/components/Button';

type NavBarProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export function NavBar({ isMenuOpen, closeMenu }: NavBarProps) {
  return (
    <nav className={styles.nav} hidden={isMenuOpen}>
      <NavList className={styles.navLinkList}>
        <NavItem
          to="/stories"
          activeClass={styles.navLinkActive}
          name="Stories"
          closeMenu={closeMenu}
        />
        <NavItem
          to="/features"
          activeClass={styles.navLinkActive}
          name="Features"
          closeMenu={closeMenu}
        />
        <NavItem
          to="/pricing"
          activeClass={styles.navLinkActive}
          name="Pricing"
          closeMenu={closeMenu}
        />
      </NavList>
      <div style={{ marginLeft: 'auto' }}>
        <Button contained isLink>
          get an invite
        </Button>
      </div>
    </nav>
  );
}

type NavListProps = {
  children: React.ReactNode;
  className: string;
};

export function NavList({ children, className }: NavListProps) {
  return <ul className={className}>{children}</ul>;
}

type NavItemProps = {
  to: string;
  activeClass: string;
  name: string;
  closeMenu?: () => void | undefined;
};

export function NavItem({ to, activeClass, name, closeMenu }: NavItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? activeClass : '')}
        to={to}
        onClick={closeMenu}
      >
        {name}
      </NavLink>
    </li>
  );
}
