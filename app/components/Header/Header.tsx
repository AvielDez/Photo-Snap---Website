import styles from './Header.module.css';
import { NavBar } from '~/components/NavBar';

interface HeaderProps {
  // Define your props here
}

export function Header() {
  return (
    <header className={styles.container}>
      <NavBar />
    </header>
  );
}
