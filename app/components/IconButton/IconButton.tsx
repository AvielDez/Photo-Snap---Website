import styles from './IconButton.module.css';

type IconButtonProps = {
  children: React.ReactNode;
};

export function IconButton({ children }: IconButtonProps) {
  return <button className={styles.iconButton}>{children}</button>;
}
