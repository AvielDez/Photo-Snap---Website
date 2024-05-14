import styles from './NavBar.module.css';
import { NavLink } from '@remix-run/react';
import { Button } from '~/components/Button';

type NavBarProps = {
  isMenuOpen: boolean;
};

export function NavBar({ isMenuOpen }: NavBarProps) {
  return (
    <nav className={styles.navContainer} hidden={isMenuOpen}>
      <div className={styles.navListContainer}>
        <NavList className={styles.navLinkList}>
          <NavItem
            to="/stories"
            activeClass={styles.navLinkActive}
            name="Stories"
          />
          <NavItem
            to="/features"
            activeClass={styles.navLinkActive}
            name="Features"
          />
          <NavItem
            to="/pricing"
            activeClass={styles.navLinkActive}
            name="Pricing"
          />
        </NavList>
      </div>

      <Button contained isLink>
        get an invite
      </Button>
    </nav>
  );
}

type NavListProps = {
  children: React.ReactNode;
  className: string;
};

function NavList({ children, className }: NavListProps) {
  return <ul className={className}>{children}</ul>;
}

type NavItemProps = {
  to: string;
  activeClass: string;
  name: string;
};

function NavItem({ to, activeClass, name }: NavItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? activeClass : '')}
        to={to}
      >
        {name}
      </NavLink>
    </li>
  );
}
