import styles from './Footer.module.css';
import {
  PhotoSnapLogo,
  Facebook,
  Youtube,
  Twitter,
  Pinterest,
  Instagram,
} from '../icons';
import { NavItem, NavList } from '../NavBar';
import { Button } from '../Button';

type FooterProps = {
  // Define your props here
};

export function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.links}>
          <PhotoSnapLogo
            className={styles.photoSnapLogo}
            style={{ height: '1rem', width: '10.625rem' }}
          />
          <NavList className={styles.navList}>
            <NavItem to="/" activeClass={styles.navLinkActive} name="Home" />
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

          <NavList className={styles.navSocialMediaList}>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className={styles.socialMediaIcon} />
              </a>
            </li>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className={styles.socialMediaIcon} />
              </a>
            </li>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className={styles.socialMediaIcon} />
              </a>
            </li>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest className={styles.socialMediaIcon} />
              </a>
            </li>
            <li className={styles.socialMediaListItem}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className={styles.socialMediaIcon} />
              </a>
            </li>
          </NavList>
        </div>
        <div className={styles.meta}>
          <Button text inverted className={styles.button}>
            Get an Invite
          </Button>
          <p className={styles.copyRight}>
            Copyright {year}. All Rights Reserved
          </p>
        </div>
      </nav>
    </footer>
  );
}
