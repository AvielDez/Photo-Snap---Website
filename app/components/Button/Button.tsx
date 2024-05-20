import React from 'react';
import styles from './Button.module.css';
import { Link } from '@remix-run/react';
import clsx from 'clsx';

import { RightArrow } from '../icons';

type ButtonProps = {
  children: React.ReactNode;
  text?: boolean;
  contained?: boolean;
  widthFixed?: boolean;
  widthFull?: boolean;
  inverted?: boolean;
  isLink?: boolean;
  to?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  text,
  contained,
  widthFixed,
  widthFull,
  inverted,
  isLink = false,
  to,
  className,
  ...props
}: ButtonProps) {
  const buttonClass = clsx(styles.button, className, {
    [styles.text]: text,
    [styles.contained]: contained,
    [styles.invertedText]: inverted && text,
    [styles.invertedContained]: inverted && contained,
    [styles.fixed]: widthFixed,
    [styles.full]: widthFull,
  });

  const arrowIconClass = clsx(styles.arrowIcon, {
    [styles.invertedIcon]: inverted && text,
  });

  if (isLink) {
    return (
      <Link to={to ?? '#'} className={buttonClass}>
        {children}
        {text && <RightArrow className={styles.arrowIcon} />}
      </Link>
    );
  }
  return (
    <button {...props} className={buttonClass}>
      {children}
      {text && <RightArrow className={arrowIconClass} />}
    </button>
  );
}
