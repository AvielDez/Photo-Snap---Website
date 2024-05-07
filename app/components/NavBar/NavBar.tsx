import styles from './NavBar.module.css';
import { NavLink } from '@remix-run/react';

interface NavBarProps {
  // Define your props here
}

export function NavBar() {
  return (
    <nav className={styles.container}>
      <NavList className={styles.navLinkContainer}>
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
