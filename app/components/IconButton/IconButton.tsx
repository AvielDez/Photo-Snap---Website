import styles from './IconButton.module.css';
import clsx from 'clsx';

type IconButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button {...props} className={clsx(styles.iconButton, className)}>
      {children}
    </button>
  );
}
