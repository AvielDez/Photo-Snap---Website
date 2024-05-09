import styles from './Button.module.css';
import { Link } from '@remix-run/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'text' | 'contained';
  isLink?: boolean;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  variant,
  isLink = false,
  to,
  onClick,
  ...props
}: ButtonProps) {
  if (isLink) {
    return (
      <Link to={to ?? '#'} {...props} className={getVariantStyling(variant)}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} onClick={onClick} className={getVariantStyling(variant)}>
      {children}
    </button>
  );
}

function getVariantStyling(variant: ButtonProps['variant']) {
  /*May want to add variants in the future */
  switch (variant) {
    case 'text':
      return styles.textButton;
    case 'contained':
      return styles.containedButton;
    default:
      return styles.containedButton;
  }
}
