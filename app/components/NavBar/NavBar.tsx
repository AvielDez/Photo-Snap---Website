import styles from './NavBar.module.css';
import { NavLink } from '@remix-run/react';
import { Button } from '~/components/Button';

type NavBarProps = {
  isMenuOpen: boolean;
  menuToggle: () => void;
};

export function NavBar({ isMenuOpen, menuToggle }: NavBarProps) {
  return (
    <nav className={styles.nav} hidden={isMenuOpen}>
      <NavList className={styles.navLinkList}>
        <NavItem
          to="/stories"
          activeClass={styles.navLinkActive}
          name="Stories"
          menuToggle={menuToggle}
        />
        <NavItem
          to="/features"
          activeClass={styles.navLinkActive}
          name="Features"
          menuToggle={menuToggle}
        />
        <NavItem
          to="/pricing"
          activeClass={styles.navLinkActive}
          name="Pricing"
          menuToggle={menuToggle}
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

function NavList({ children, className }: NavListProps) {
  return <ul className={className}>{children}</ul>;
}

type NavItemProps = {
  to: string;
  activeClass: string;
  name: string;
  menuToggle: () => void;
};

function NavItem({ to, activeClass, name, menuToggle }: NavItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? activeClass : '')}
        to={to}
        onClick={menuToggle}
      >
        {name}
      </NavLink>
    </li>
  );
}
