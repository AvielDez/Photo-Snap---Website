import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import styles from './AppWrapper.module.css';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
