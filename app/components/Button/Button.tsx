import React from 'react';
import styles from './Button.module.css';
import { Link } from '@remix-run/react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'text' | 'contained';
  isLink?: boolean;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.PropsWithChildren;

export function Button({
  children,
  variant,
  isLink = false,
  to,
  ...props
}: ButtonProps) {
  if (isLink) {
    return (
      <Link to={to ?? '#'} className={getVariantStyling(variant)}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={getVariantStyling(variant)}>
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
