import styles from './NavBar.module.css';
import { NavLink } from '@remix-run/react';

interface NavBarProps {
  // Define your props here
}

export function NavBar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            to="/stories"
          >
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
