import styles from './PhotoSections.module.css';

import { Button } from '~/components/Button';
import clsx from 'clsx';

type PhotoSectionsProps = {
  header: string;
  body: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right' | 'full';
  light?: boolean;
  to?: string;
};

export function PhotoSections({
  header,
  body,
  buttonText,
  image,
  imageAlt,
  imagePosition,
  light = false,
  to,
}: PhotoSectionsProps) {
  const textContainer = clsx(styles.textContainer, {
    [styles.light]: light,
  });

  const container = clsx(styles.container, {
    [styles.imageLeft]: imagePosition === 'left',
    [styles.imageRight]: imagePosition === 'right',
    [styles.imageFull]: imagePosition === 'full',
    [styles.light]: light,
  });

  return (
    <section className={container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={imageAlt} />
      </div>
      <div className={textContainer}>
        <div className={styles.text}>
          {!light && <div className={styles.lightBar}></div>}
          <h2 className={styles.header}>{header}</h2>
          <p className={styles.body}>{body}</p>
          <Button
            text
            inverted={!light}
            noLeftPadding
            className={styles.button}
            isLink
            to={to}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
